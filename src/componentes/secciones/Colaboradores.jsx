/* ============================================================================
   Colaboradores.jsx — SECCIÓN 5: COLABORADORES
   ----------------------------------------------------------------------------
   La lista se edita en:  src/contenido/colaboradores.js
   ============================================================================ */

function TarjetaColaborador({ colaborador }) {
  const contenido = (
    <div className="relative z-10 w-full">
      {/* Espacio de la imagen. Siempre está, haya logo o no, para que la
          casilla no cambie de forma cuando se suban los archivos. */}
      <Media
        src={colaborador.logo}
        alt={colaborador.nombre}
        proporcion="aspect-[3/2]"
        ajuste="object-contain p-4"
        etiqueta="Agrega aquí el logo"
        icono="imagen"
      />

      <p className="text-sm md:text-[0.95rem] text-white font-body font-medium text-center mt-3 leading-tight">
        {colaborador.nombre}
      </p>

      {/* Etiqueta opcional: solo aparece si está escrita en colaboradores.js */}
      {colaborador.tipo ? (
        <p className="text-[11px] text-white/70 font-body font-light text-center mt-1">{colaborador.tipo}</p>
      ) : null}
    </div>
  );

  const clases = 'liquid-glass hover-elevar rounded-tarjeta p-3 h-full flex items-start';

  return colaborador.url
    ? <a href={colaborador.url} target="_blank" rel="noopener noreferrer" className={clases}>{contenido}</a>
    : <div className={clases}>{contenido}</div>;
}

function Colaboradores({ id }) {
  const c = window.CONTENIDO_COLABORADORES;

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
            <TarjetaColaborador colaborador={colaborador} />
          </Reveal>
        ))}
      </div>

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
