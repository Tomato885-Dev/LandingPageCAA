/* ============================================================================
   TituloSeccion.jsx — Encabezado común de todas las secciones
   ----------------------------------------------------------------------------
   Muestra el texto pequeño ("kicker") y el título grande en varias líneas.
   Los textos se editan en los archivos de src/contenido/.
   ============================================================================ */

function TituloSeccion({ kicker, titulo = [], intro, className = '', centrado = false }) {
  const lineas = Array.isArray(titulo) ? titulo : [titulo];

  return (
    <div className={(centrado ? 'text-center mx-auto ' : '') + className}>
      <Reveal comoLista>
        {kicker ? <p className="text-sm font-body text-marca mb-6">{kicker}</p> : null}
      </Reveal>

      <Reveal comoLista delay={0.1}>
        <h2 className="font-heading italic text-white text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
          {lineas.map((linea, i) => (
            <span key={i} className="block">{linea}</span>
          ))}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal comoLista delay={0.2}>
          <p className={'mt-6 text-sm md:text-base text-white font-body font-light leading-relaxed max-w-2xl' + (centrado ? ' mx-auto' : '')}>
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

window.TituloSeccion = TituloSeccion;
