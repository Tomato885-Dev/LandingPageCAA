/* ============================================================================
   Nosotros.jsx — SECCIÓN 2: ¿QUIÉNES SOMOS?
   ----------------------------------------------------------------------------
   Textos, tarjetas y fotos del equipo:  src/contenido/nosotros.js
   ============================================================================ */

const { useState: useStateNosotros } = React;

function Nosotros({ id }) {
  const c = window.CONTENIDO_NOSOTROS;
  const [abierto, setAbierto] = useStateNosotros(null);

  // El currículum tiene dos partes, las dos opcionales:
  //   • info   → uno o varios párrafos de presentación
  //   • logros → la lista de puntos con bolita roja
  const parrafos = abierto
    ? (Array.isArray(abierto.info) ? abierto.info.filter(Boolean) : (abierto.info ? [abierto.info] : []))
    : [];
  const logros = abierto && Array.isArray(abierto.logros) ? abierto.logros.filter(Boolean) : [];

  return (
    <SeccionBase id={id} fondo={c.fondo}>
      {/* --- Encabezado --- */}
      <TituloSeccion
        kicker={c.kicker}
        titulo={c.titulo}
        intro={c.intro}
        introMas={c.introMas}
        cierre={c.cierre}
      />

      {/* --- Tarjetas de áreas (solo si hay alguna escrita en nosotros.js) --- */}
      {c.tarjetas && c.tarjetas.length ? (
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
      ) : null}

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
                {/* La tarjeta completa es un botón: al pincharla se abre el
                    cuadro con la foto grande y la información del integrante. */}
                <Panel
                  as="button"
                  type="button"
                  onClick={() => setAbierto(persona)}
                  aria-label={'Ver más sobre ' + persona.nombre}
                  className="tarjeta-integrante rounded-tarjeta p-3 h-full w-full text-left cursor-pointer"
                >
                  <div className="relative z-10">
                    <Media
                      src={persona.foto}
                      alt={persona.nombre}
                      proporcion="aspect-[4/5]"
                      etiqueta="Foto del integrante"
                      icono="usuarios"
                    />
                    <div className="px-1.5 pt-4 pb-2 flex items-end justify-between gap-2">
                      <span className="min-w-0">
                        <span className="block font-heading italic text-white text-2xl leading-none tracking-[-0.5px]">
                          {persona.nombre}
                        </span>
                        {/* El cargo es opcional: si no está escrito, no se muestra */}
                        {persona.cargo ? (
                          <span className="block text-xs text-white/85 font-body font-light mt-2">{persona.cargo}</span>
                        ) : null}
                      </span>
                      <span className="flecha-integrante shrink-0 text-white/70">
                        <Icono nombre="flecha-diagonal" className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      {/* --- Cuadro con la foto grande y la información del integrante --- */}
      <Modal
        abierto={Boolean(abierto)}
        alCerrar={() => setAbierto(null)}
        titulo={abierto ? abierto.nombre : ''}
        etiqueta={c.equipo ? c.equipo.titulo : ''}
        subtitulo={abierto ? abierto.cargo : ''}
        ancho="amplio"
      >
        {abierto ? (
          /* En pantalla ancha la foto va a la izquierda y el currículum a la
             derecha, para poder ver las dos cosas de una. En el celular la
             foto queda arriba y el texto debajo. */
          <div className="md:flex md:items-start md:gap-8">
            <div className="w-full max-w-[380px] mx-auto md:mx-0 md:w-[340px] md:max-w-none md:shrink-0">
              <Media
                src={abierto.foto}
                alt={abierto.nombre}
                proporcion="aspect-[4/5]"
                etiqueta="Foto del integrante"
                icono="usuarios"
              />
            </div>

            <div className="mt-6 md:mt-0 md:flex-1 md:min-w-0">
              {parrafos.length ? (
                <div className="space-y-4">
                  {parrafos.map((parrafo, i) => (
                    <p key={i} className="text-sm md:text-base text-white font-body font-light leading-relaxed">
                      {parrafo}
                    </p>
                  ))}
                </div>
              ) : null}

              {logros.length ? (
                <ul className={'lista-logros space-y-2.5' + (parrafos.length ? ' mt-5' : '')}>
                  {logros.map((logro, i) => (
                    <li key={i} className="text-sm md:text-base text-white font-body font-light leading-snug">
                      {logro}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Aviso mientras no hay nada escrito. Desaparece solo apenas se
                  rellene "logros" o "info" en src/contenido/nosotros.js */}
              {!parrafos.length && !logros.length ? (
                <p className="text-sm text-white/45 font-body font-light italic">
                  Escribe aquí la información de este integrante.
                </p>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </SeccionBase>
  );
}

window.Nosotros = Nosotros;
