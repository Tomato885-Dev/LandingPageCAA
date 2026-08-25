/* ============================================================================
   Colaboradores.jsx — SECCIÓN 5: COLABORADORES
   ----------------------------------------------------------------------------
   La lista se edita en:  src/contenido/colaboradores.js
   ============================================================================ */

function TarjetaColaborador({ colaborador }) {
  const contenido = (
    <React.Fragment>
      {colaborador.logo ? (
        <img
          src={colaborador.logo}
          alt={colaborador.nombre}
          loading="lazy"
          className="relative z-10 h-12 max-w-[80%] object-contain"
        />
      ) : (
        <span className="relative z-10 font-heading italic text-white text-2xl md:text-[1.75rem] leading-tight tracking-tight">
          {colaborador.nombre}
        </span>
      )}

      {colaborador.logo ? (
        <span className="relative z-10 text-xs text-white/80 font-body font-light">{colaborador.nombre}</span>
      ) : null}

      {colaborador.tipo ? (
        <span className="relative z-10 text-[11px] text-white/50 font-body font-light">{colaborador.tipo}</span>
      ) : null}
    </React.Fragment>
  );

  const clases = 'liquid-glass hover-elevar rounded-tarjeta p-6 min-h-[160px] flex flex-col items-center justify-center gap-2 text-center';

  return colaborador.url
    ? <a href={colaborador.url} target="_blank" rel="noopener noreferrer" className={clases}>{contenido}</a>
    : <div className={clases}>{contenido}</div>;
}

function Colaboradores({ id }) {
  const c = window.CONTENIDO_COLABORADORES;

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />

      {/* --- Cuadrícula de colaboradores --- */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-16">
        {c.colaboradores.map((colaborador, i) => (
          <Reveal comoLista key={i} delay={(i % 3) * 0.08}>
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
