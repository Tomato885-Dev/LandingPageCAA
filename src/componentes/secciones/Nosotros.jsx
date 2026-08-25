/* ============================================================================
   Nosotros.jsx — SECCIÓN 2: ¿QUIÉNES SOMOS?
   ----------------------------------------------------------------------------
   Textos, tarjetas y fotos del equipo:  src/contenido/nosotros.js
   ============================================================================ */

function Nosotros({ id }) {
  const c = window.CONTENIDO_NOSOTROS;

  return (
    <SeccionBase id={id} fondo={c.fondo}>
      {/* --- Encabezado --- */}
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />

      {/* --- Tarjetas de áreas --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {c.tarjetas.map((tarjeta, i) => (
          <Reveal comoLista key={i} delay={i * 0.1}>
            <TarjetaGlass
              icono={tarjeta.icono}
              etiquetas={tarjeta.etiquetas}
              titulo={tarjeta.titulo}
              texto={tarjeta.texto}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>

      {/* --- Equipo / directiva --- */}
      {c.equipo && c.equipo.integrantes && c.equipo.integrantes.length ? (
        <div className="mt-20">
          <Reveal comoLista>
            <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px]">
              {c.equipo.titulo}
            </h3>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {c.equipo.integrantes.map((persona, i) => (
              <Reveal comoLista key={i} delay={i * 0.07}>
                <Panel className="rounded-tarjeta p-3 h-full">
                  <div className="relative z-10">
                    <Media
                      src={persona.foto}
                      alt={persona.nombre}
                      proporcion="aspect-[4/5]"
                      etiqueta="Foto del integrante"
                      icono="usuarios"
                    />
                    <div className="px-1.5 pt-4 pb-2">
                      <p className="font-heading italic text-white text-2xl leading-none tracking-[-0.5px]">
                        {persona.nombre}
                      </p>
                      <p className="text-xs text-white/70 font-body font-light mt-2">{persona.cargo}</p>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </SeccionBase>
  );
}

window.Nosotros = Nosotros;
