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

          {/* Se usa flex en vez de grid para que una última fila incompleta
              (por ejemplo 7 integrantes = 4 + 3) quede centrada y no colgando
              hacia la izquierda. */}
          <div className="flex flex-wrap justify-center gap-5 mt-8">
            {c.equipo.integrantes.map((persona, i) => (
              <Reveal
                comoLista
                key={i}
                delay={i * 0.07}
                className="w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.834rem)] lg:w-[calc(25%-0.9375rem)]"
              >
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
                      {/* El cargo es opcional: si no está escrito, no se muestra */}
                      {persona.cargo ? (
                        <p className="text-xs text-white/85 font-body font-light mt-2">{persona.cargo}</p>
                      ) : null}
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
