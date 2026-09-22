/* ============================================================================
   Colaboradores.jsx — SECCIÓN 5: COLABORADORES
   ----------------------------------------------------------------------------
   La lista se edita en:  src/contenido/colaboradores.js

   Cada casilla se puede pinchar para abrir un cuadro con el logo grande y la
   explicación del beneficio, igual que las fotos del equipo en //¿Quiénes
   somos?. Una casilla solo se vuelve pinchable cuando tiene escrito su
   "detalle": mientras no lo tenga se ve igual que siempre, pero no se abre
   nada (así nadie pincha y se queda mirando un cuadro vacío).
   ============================================================================ */

const { useState: useStateColab } = React;

/* El "detalle" se puede escribir como un texto suelto o como una lista de
   párrafos. Las dos formas valen; esto las deja siempre como lista. */
function parrafosDelBeneficio(detalle) {
  if (Array.isArray(detalle)) return detalle.filter(Boolean);
  return detalle ? [detalle] : [];
}

function TarjetaColaborador({ colaborador, alPinchar }) {
  const tieneDetalle = parrafosDelBeneficio(colaborador.detalle).length > 0;

  const contenido = (
    <div className="relative z-10 w-full">
      {/* Espacio de la imagen. Siempre está, haya logo o no, para que la
          casilla no cambie de forma cuando se suban los archivos. */}
      <Media
        src={colaborador.logo}
        alt={colaborador.nombre}
        proporcion="aspect-[3/2]"
        ajuste="object-contain p-5"
        etiqueta="Agrega aquí el logo"
        icono="imagen"
        className={colaborador.logo ? 'placa-logo' : ''}
      />

      <div className="mt-3 flex items-start justify-center gap-1.5">
        <p className="text-sm md:text-[0.95rem] text-white font-body font-medium text-center leading-tight">
          {colaborador.nombre}
        </p>
        {/* La flecha solo aparece en las casillas que sí abren algo: es la
            señal de que hay más que leer. */}
        {tieneDetalle ? (
          <span className="flecha-integrante shrink-0 text-white/70 mt-[1px]">
            <Icono nombre="flecha-diagonal" className="h-3.5 w-3.5" />
          </span>
        ) : null}
      </div>

      {/* Etiqueta opcional: solo aparece si está escrita en colaboradores.js */}
      {colaborador.tipo ? (
        <p className="text-[11px] text-white/70 font-body font-light text-center mt-1">{colaborador.tipo}</p>
      ) : null}
    </div>
  );

  const clases = 'liquid-glass hover-elevar rounded-tarjeta p-3 h-full flex items-start';

  /* Tres formas posibles, en este orden:
       1. tiene beneficio escrito → botón que abre el cuadro
       2. no tiene, pero sí sitio web → enlace directo, como antes
       3. no tiene nada            → casilla normal, sin pinchar             */
  if (tieneDetalle) {
    return (
      <Panel
        as="button"
        type="button"
        onClick={() => alPinchar(colaborador)}
        aria-label={'Ver el beneficio de ' + colaborador.nombre}
        className={'tarjeta-integrante ' + clases + ' w-full text-left cursor-pointer'}
      >
        {contenido}
      </Panel>
    );
  }

  return colaborador.url
    ? <a href={colaborador.url} target="_blank" rel="noopener noreferrer" className={clases}>{contenido}</a>
    : <div className={clases}>{contenido}</div>;
}

function Colaboradores({ id }) {
  const c = window.CONTENIDO_COLABORADORES;
  const [abierto, setAbierto] = useStateColab(null);

  const parrafos = abierto ? parrafosDelBeneficio(abierto.detalle) : [];

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />

      {/* --- Cuadrícula de colaboradores ---
              Se usa flex para que, si el número no calza justo con las
              columnas, la última fila quede centrada y no colgando. --- */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-16">
        {c.colaboradores.map((colaborador, i) => (
          <Reveal
            comoLista
            key={i}
            delay={(i % 4) * 0.06}
            className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)]"
          >
            <TarjetaColaborador colaborador={colaborador} alPinchar={setAbierto} />
          </Reveal>
        ))}
      </div>

      {/* --- Cuadro con el logo grande y la explicación del beneficio --- */}
      <Modal
        abierto={Boolean(abierto)}
        alCerrar={() => setAbierto(null)}
        titulo={abierto ? abierto.nombre : ''}
        etiqueta="Beneficio"
        subtitulo={abierto ? abierto.tipo : ''}
        ancho="amplio"
      >
        {abierto ? (
          /* En pantalla ancha el logo va a la izquierda y el texto a la
             derecha. En el celular el logo queda arriba y el texto debajo. */
          <div className="md:flex md:items-start md:gap-8">
            <div className="w-full max-w-[320px] mx-auto md:mx-0 md:w-[300px] md:max-w-none md:shrink-0">
              <Media
                src={abierto.logo}
                alt={abierto.nombre}
                proporcion="aspect-[3/2]"
                ajuste="object-contain p-6"
                etiqueta="Agrega aquí el logo"
                icono="imagen"
                className={abierto.logo ? 'placa-logo' : ''}
              />
            </div>

            <div className="mt-6 md:mt-0 md:flex-1 md:min-w-0">
              <div className="space-y-4">
                {parrafos.map((parrafo, i) => (
                  <p key={i} className="text-sm md:text-base text-white font-body font-light leading-relaxed">
                    {parrafo}
                  </p>
                ))}
              </div>

              {/* El sitio del colaborador, si está escrito en colaboradores.js */}
              {abierto.url ? (
                <div className="mt-6">
                  <Boton texto="Ir al sitio" url={abierto.url} variante="principal" />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>

      {/* --- Invitación a colaborar --- */}
      {c.cta && c.cta.texto ? (
        <Reveal comoLista delay={0.1}>
          <Panel elevar={false} className="rounded-tarjeta mt-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="relative z-10 font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
              {c.cta.texto}
            </p>
            <div className="relative z-10">
              <Boton texto={c.cta.boton.texto} url={c.cta.boton.url} variante="principal" />
            </div>
          </Panel>
        </Reveal>
      ) : null}
    </SeccionBase>
  );
}

window.Colaboradores = Colaboradores;
