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
            <Boton texto={c.botones.principal.texto} url={c.botones.principal.url} variante="principal" icono={c.botones.principal.icono || 'flecha-diagonal'} />
            <Boton texto={c.botones.secundario.texto} url={c.botones.secundario.url} variante="texto" icono={c.botones.secundario.icono || 'flecha-derecha'} />
          </div>
        </Reveal>

        {/* Cifras destacadas
            En pantalla ancha van en fila, una al lado de la otra. En el
            celular cada una ocupa el ancho completo y se pone horizontal
            (número a la izquierda, frase a la derecha) para no alargar
            tanto la portada. */}
        {c.estadisticas && c.estadisticas.length ? (
          <Reveal delay={1.3} className="w-full">
            <div className="w-full max-w-[820px] mx-auto flex flex-col sm:flex-row sm:flex-wrap items-stretch justify-center gap-3 sm:gap-4 mt-8">
              {c.estadisticas.map((dato, i) => (
                <Panel
                  key={i}
                  fuerte={!!dato.destacada}
                  className="rounded-tarjeta p-4 sm:p-5 w-full sm:w-[250px] text-left flex flex-row sm:flex-col items-center sm:items-stretch gap-4 sm:gap-0"
                >
                  {/* Icono + número: en el celular quedan juntos a la izquierda */}
                  <div className="relative z-10 shrink-0 w-[68px] sm:w-auto flex flex-col items-start sm:block">
                    <Icono nombre={dato.icono} className="h-6 w-6 sm:h-7 sm:w-7 text-white opacity-90" />
                    <p
                      className="mt-2 sm:mt-4 font-heading italic text-white text-5xl sm:text-6xl tracking-[-2px] leading-none"
                      style={dato.tachado ? {
                        textDecoration: 'line-through',
                        textDecorationColor: 'var(--color-marca)',
                        textDecorationThickness: '3px',
                        opacity: 0.75,
                      } : null}
                    >
                      {dato.numero}
                    </p>
                  </div>
                  <p className="relative z-10 text-[13px] leading-snug text-white font-body font-light sm:mt-3">
                    <Destacar texto={dato.etiqueta} />
                  </p>
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
