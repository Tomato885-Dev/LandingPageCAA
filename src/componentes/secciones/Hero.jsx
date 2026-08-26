/* ============================================================================
   Hero.jsx — SECCIÓN 1: INICIO / PORTADA
   ----------------------------------------------------------------------------
   Todo el texto de esta sección se edita en:  src/contenido/hero.js
   ============================================================================ */

function Hero({ id }) {
  const c = window.CONTENIDO_HERO;

  return (
    <section id={id} className="relative w-full min-h-screen overflow-hidden bg-fondo flex flex-col">
      {/* --- Video de fondo (ampliado al 120% y anclado arriba) --- */}
      <FadingVideo
        src={c.fondo.video}
        poster={c.fondo.imagen}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* --- Velo oscuro: sin esto, el texto blanco no se lee sobre un video
              claro. Su intensidad se regula en src/estilos/theme.css --- */}
      <div className="velo-fondo" aria-hidden="true" />

      {/* --- Contenido --- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center pt-28 pb-8 px-4">

        {/* Etiqueta superior */}
        {c.etiqueta ? (
          <Reveal delay={0.4}>
            <div className="liquid-glass rounded-full inline-flex items-center gap-3 pr-3">
              {c.etiqueta.destacado ? (
                <span className="relative z-10 bg-acento text-acento-texto rounded-full px-3 py-1 text-xs font-semibold font-body">
                  {c.etiqueta.destacado}
                </span>
              ) : null}
              <span className="relative z-10 text-sm text-white font-body">{c.etiqueta.texto}</span>
            </div>
          </Reveal>
        ) : null}

        {/* Título principal (animado palabra por palabra) */}
        <div className="mt-6">
          <BlurText
            text={c.titulo}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-heading italic text-white leading-[0.85] max-w-4xl justify-center tracking-[-3px] md:tracking-[-4px]"
          />
        </div>

        {/* Texto descriptivo */}
        <Reveal delay={0.8}>
          <p className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-snug">
            {c.subtitulo}
          </p>
        </Reveal>

        {/* Botones */}
        <Reveal delay={1.1}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6">
            <Boton texto={c.botones.principal.texto} url={c.botones.principal.url} variante="principal" icono="flecha-diagonal" />
            <Boton texto={c.botones.secundario.texto} url={c.botones.secundario.url} variante="texto" icono="play" />
          </div>
        </Reveal>

        {/* Cifras destacadas */}
        {c.estadisticas && c.estadisticas.length ? (
          <Reveal delay={1.3}>
            <div className="flex flex-wrap items-stretch justify-center gap-4 mt-8">
              {c.estadisticas.map((dato, i) => (
                <Panel key={i} className="rounded-tarjeta p-5 w-[210px] text-left">
                  <Icono nombre={dato.icono} className="relative z-10 h-7 w-7 text-white" />
                  <p
                    className="relative z-10 mt-5 font-heading italic text-white text-4xl tracking-[-1px] leading-none"
                    style={dato.tachado ? {
                      textDecoration: 'line-through',
                      textDecorationColor: 'var(--color-marca)',
                      textDecorationThickness: '3px',
                      opacity: 0.75,
                    } : null}
                  >
                    {dato.numero}
                  </p>
                  <p className="relative z-10 text-xs text-white font-body font-light mt-2">{dato.etiqueta}</p>
                </Panel>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>

      {/* --- Franja de aliados --- */}
      {c.aliados && c.aliados.nombres && c.aliados.nombres.length ? (
        <Reveal delay={1.4} className="relative z-10">
          <div className="flex flex-col items-center gap-4 pb-8 px-4">
            <span className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white text-center">
              <span className="relative z-10">{c.aliados.texto}</span>
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-16 gap-y-2">
              {c.aliados.nombres.map((nombre, i) => (
                <span key={i} className="font-heading italic text-white text-xl md:text-3xl tracking-tight">
                  {nombre}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}

window.Hero = Hero;
