/* ============================================================================
   Proyectos.jsx — SECCIÓN 4: LÍNEA DE TIEMPO DEL MANDATO
   ----------------------------------------------------------------------------
   Las actividades se editan en:  src/contenido/proyectos.js
   (no hace falta tocar este archivo para agregar, quitar o mover una)

   En pantalla ancha se dibuja horizontal, como un calendario del año.
   En celular la misma información se muestra vertical, mes por mes: una
   línea de tiempo horizontal no cabe en un teléfono.
   ============================================================================ */

const { useState: useStateLT, useEffect: useEffectLT, useRef: useRefLT } = React;

const ALTO_CARRIL = 44;      // alto de cada fila de cajas, en píxeles
const ALTO_EJE = 56;         // espacio del eje con los nombres de los meses
const SEPARACION = 10;       // aire mínimo entre dos cajas de la misma fila

/* ----------------------------------------------------------------------------
   Reparte las actividades en filas para que ninguna se pise con otra.
   Las más anchas van primero, así quedan pegadas al eje y las cajas chicas
   se apilan hacia afuera.

   Las actividades que comparten el campo "grupo" se colocan TODAS en la misma
   fila, aunque ocurran en meses distintos (por ejemplo Wickso Liga y Wickso
   Playoffs, o Noche Verde 1 y 2). Si dos del mismo grupo se pisaran entre
   ellas, el grupo se ignora y cada una busca su propia fila: es preferible
   perder la alineación antes que dibujar una caja encima de otra.
   ---------------------------------------------------------------------------- */
function repartirEnCarriles(actividades, meses, anchoColumna) {
  const anchoTotal = meses.length * anchoColumna;

  const conMedidas = actividades.map((a) => {
    const iDesde = meses.indexOf(a.desde);
    const iHasta = a.hasta ? meses.indexOf(a.hasta) : iDesde;
    // Ancho aproximado del texto. No hace falta que sea exacto: solo sirve
    // para decidir qué cabe al lado de qué.
    const anchoTexto = a.nombre.length * 7.1 + (a.permanente ? 62 : 34);
    const esBarra = iHasta > iDesde;
    let ancho = esBarra
      ? Math.max((iHasta - iDesde) * anchoColumna, anchoTexto)
      : anchoTexto;
    ancho = Math.min(ancho, anchoTotal);
    let izquierda = esBarra
      ? (iDesde + 0.5) * anchoColumna
      : (iDesde + 0.5) * anchoColumna - ancho / 2;
    // Que ninguna caja se salga del recuadro.
    izquierda = Math.max(0, Math.min(izquierda, anchoTotal - ancho));
    return { ...a, iDesde, iHasta, esBarra, ancho, izquierda };
  });

  const sePisan = (a, b) =>
    !(a.izquierda + a.ancho + SEPARACION <= b.izquierda ||
      b.izquierda + b.ancho + SEPARACION <= a.izquierda);

  // Las del mismo grupo viajan juntas: se colocan como una sola unidad.
  const unidades = [];
  const porGrupo = {};
  for (const it of conMedidas) {
    if (!it.grupo) { unidades.push([it]); continue; }
    if (!porGrupo[it.grupo]) { porGrupo[it.grupo] = []; unidades.push(porGrupo[it.grupo]); }
    porGrupo[it.grupo].push(it);
  }

  // Si un grupo se pisa consigo mismo, se deshace en actividades sueltas.
  const unidadesSanas = [];
  for (const u of unidades) {
    const choque = u.some((a, i) => u.some((b, j) => i < j && sePisan(a, b)));
    if (choque) u.forEach((it) => unidadesSanas.push([it]));
    else unidadesSanas.push(u);
  }

  // Unidades más anchas primero; entre iguales, la que empieza antes.
  const orden = unidadesSanas.slice().sort((a, b) => {
    const anchoA = Math.max(...a.map((x) => x.ancho));
    const anchoB = Math.max(...b.map((x) => x.ancho));
    const desdeA = Math.min(...a.map((x) => x.iDesde));
    const desdeB = Math.min(...b.map((x) => x.iDesde));
    return (anchoB - anchoA) || (desdeA - desdeB);
  });

  const carriles = [];
  for (const unidad of orden) {
    let n = 0;
    while (carriles[n] && unidad.some((it) => carriles[n].some((o) => sePisan(it, o)))) n++;
    if (!carriles[n]) carriles[n] = [];
    for (const it of unidad) { carriles[n].push(it); it.carril = n; }
  }

  return { items: conMedidas, totalCarriles: carriles.length };
}

/* ----------------------------------------------------------------------------
   Una caja de la línea de tiempo (sirve para las dos versiones)
   ---------------------------------------------------------------------------- */
function CajaActividad({ actividad, alPinchar, estilo, className = '', mostrarHasta = false }) {
  const clase = actividad.tipo === 'propuesta' ? 'caja-propuesta' : 'caja-tradicional';
  return (
    <button
      type="button"
      onClick={() => alPinchar(actividad)}
      style={estilo}
      title={actividad.nombre}
      className={'caja-actividad ' + clase + ' ' + className}
    >
      <span className="caja-actividad-texto">{actividad.nombre}</span>
      {/* En la versión vertical no hay eje que muestre hasta cuándo dura,
          así que la propia caja lo dice. */}
      {mostrarHasta && actividad.hasta ? (
        <span className="caja-hasta">hasta {actividad.hasta}</span>
      ) : null}
      {actividad.permanente ? <span className="caja-flecha" aria-hidden="true">→</span> : null}
    </button>
  );
}

/* ----------------------------------------------------------------------------
   Versión horizontal (pantallas anchas)
   ---------------------------------------------------------------------------- */
function LineaHorizontal({ lt, alPinchar }) {
  const contenedorRef = useRefLT(null);
  const [ancho, setAncho] = useStateLT(1100);

  useEffectLT(() => {
    const el = contenedorRef.current;
    if (!el) return;
    const medir = () => setAncho(el.getBoundingClientRect().width);
    medir();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', medir);
      return () => window.removeEventListener('resize', medir);
    }
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const anchoColumna = ancho / lt.meses.length;
  const arriba = repartirEnCarriles(lt.actividades.filter((a) => a.tipo === 'tradicional'), lt.meses, anchoColumna);
  const abajo  = repartirEnCarriles(lt.actividades.filter((a) => a.tipo === 'propuesta'),   lt.meses, anchoColumna);

  const altoArriba = arriba.totalCarriles * ALTO_CARRIL;
  const altoAbajo  = abajo.totalCarriles * ALTO_CARRIL;

  return (
    <div ref={contenedorRef} className="relative w-full" style={{ height: altoArriba + ALTO_EJE + altoAbajo }}>

      {/* Líneas verticales de cada mes, de arriba abajo */}
      {lt.meses.map((mes, i) => (
        <span key={'g' + i} className="lt-guia" style={{ left: (i + 0.5) * anchoColumna }} />
      ))}

      {/* Actividades del colegio, sobre el eje */}
      {arriba.items.map((a, i) => (
        <CajaActividad
          key={'v' + i}
          actividad={a}
          alPinchar={alPinchar}
          estilo={{
            position: 'absolute',
            left: a.izquierda,
            width: a.ancho,
            top: altoArriba - (a.carril + 1) * ALTO_CARRIL,
          }}
        />
      ))}

      {/* El eje */}
      <div className="lt-eje" style={{ top: altoArriba + 8 }}>
        {lt.meses.map((mes, i) => (
          <span key={i} className="lt-mes" style={{ left: (i + 0.5) * anchoColumna }}>{mes}</span>
        ))}
      </div>

      {/* Proyectos de campaña, bajo el eje */}
      {abajo.items.map((a, i) => (
        <CajaActividad
          key={'r' + i}
          actividad={a}
          alPinchar={alPinchar}
          estilo={{
            position: 'absolute',
            left: a.izquierda,
            width: a.ancho,
            top: altoArriba + ALTO_EJE + a.carril * ALTO_CARRIL - 8,
          }}
        />
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Versión vertical (celular y tablet)
   ---------------------------------------------------------------------------- */
function LineaVertical({ lt, alPinchar }) {
  // Cada actividad aparece en el mes en que empieza.
  const porMes = lt.meses
    .map((mes) => ({ mes, items: lt.actividades.filter((a) => a.desde === mes) }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="lt-vertical">
      {porMes.map((grupo, i) => (
        <div key={i} className="lt-vertical-mes">
          <div className="lt-vertical-marca" aria-hidden="true" />
          <p className="font-heading italic text-white text-2xl leading-none">{grupo.mes}</p>
          <div className="flex flex-col items-start gap-2 mt-3">
            {grupo.items.map((a, j) => (
              <CajaActividad key={j} actividad={a} alPinchar={alPinchar} mostrarHasta className="caja-actividad-vertical" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
   La sección completa
   ---------------------------------------------------------------------------- */
function Proyectos({ id }) {
  const c = window.CONTENIDO_PROYECTOS;
  const lt = c.lineaTiempo;
  const [abierta, setAbierta] = useStateLT(null);

  if (!lt || !lt.actividades || !lt.actividades.length) {
    return (
      <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
        <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />
      </SeccionBase>
    );
  }

  const esPropuesta = abierta && abierta.tipo === 'propuesta';
  const parrafos = abierta
    ? (Array.isArray(abierta.detalle) ? abierta.detalle.filter(Boolean) : (abierta.detalle ? [abierta.detalle] : []))
    : [];

  const cuando = (a) => {
    if (!a) return '';
    if (a.permanente) return 'Desde ' + a.desde + ' · se mantiene todo el año';
    if (a.hasta) return a.desde + ' – ' + a.hasta;
    return a.desde;
  };

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion
        kicker={c.kicker}
        titulo={c.titulo}
        intro={c.intro}
        tamanoIntro="text-base md:text-lg lg:text-xl"
      />

      {/* --- Leyenda --- */}
      <Reveal comoLista delay={0.1}>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-12">
          <span className="flex items-center gap-2.5 text-xs md:text-sm text-white font-body">
            <i className="lt-punto lt-punto-propuesta" /> {lt.leyenda.propuesta}
          </span>
          <span className="flex items-center gap-2.5 text-xs md:text-sm text-white font-body">
            <i className="lt-punto lt-punto-tradicional" /> {lt.leyenda.tradicional}
          </span>
        </div>
        {lt.ayuda ? (
          <p className="text-sm text-white/85 font-body font-light mt-4">{lt.ayuda}</p>
        ) : null}
        {lt.nota ? (
          <p className="text-xs text-white/60 font-body font-light italic mt-1.5">{lt.nota}</p>
        ) : null}
      </Reveal>

      {/* --- La línea de tiempo --- */}
      <Reveal comoLista delay={0.2}>
        <div className="mt-10">
          <div className="hidden lg:block">
            <LineaHorizontal lt={lt} alPinchar={setAbierta} />
          </div>
          <div className="lg:hidden">
            <LineaVertical lt={lt} alPinchar={setAbierta} />
          </div>

          {lt.notaFinal ? (
            <p className="text-xs text-white/60 font-body font-light italic mt-8">
              {lt.notaFinal}
            </p>
          ) : null}
        </div>
      </Reveal>

      {/* --- Cuadro de detalle --- */}
      <Modal
        abierto={Boolean(abierta)}
        alCerrar={() => setAbierta(null)}
        titulo={abierta ? abierta.nombre : ''}
        etiqueta={abierta ? (
          <React.Fragment>
            <i className={'lt-punto ' + (esPropuesta ? 'lt-punto-propuesta' : 'lt-punto-tradicional')} />
            {esPropuesta ? 'Proyecto de campaña' : 'Actividad del colegio'}
          </React.Fragment>
        ) : null}
        subtitulo={cuando(abierta)}
      >
        {parrafos.length ? (
          <div className="space-y-4">
            {parrafos.map((parrafo, i) => (
              <p key={i} className="text-sm md:text-base text-white font-body font-light leading-relaxed">
                {parrafo}
              </p>
            ))}
          </div>
        ) : (
          /* Aviso mientras el detalle no está escrito. Desaparece solo apenas
             se rellene el campo "detalle" en src/contenido/proyectos.js */
          <p className="text-sm text-white/45 font-body font-light italic">
            Escribe aquí el detalle de esta actividad.
          </p>
        )}
      </Modal>
    </SeccionBase>
  );
}

window.Proyectos = Proyectos;
