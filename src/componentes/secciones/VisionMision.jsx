/* ============================================================================
   VisionMision.jsx — SECCIÓN 3: VISIÓN Y MISIÓN
   ----------------------------------------------------------------------------
   Textos:  src/contenido/vision-mision.js
   ============================================================================ */

const { useState: useStatePilar } = React;

/* ----------------------------------------------------------------------------
   Una barra de pilar: se pincha y se despliega el panel de texto de abajo.
   ---------------------------------------------------------------------------- */
function BarraPilar({ pilar, indice }) {
  const [abierto, setAbierto] = useStatePilar(false);
  const idPanel = 'pilar-panel-' + indice;

  // "texto" acepta las dos formas: una frase suelta, o una lista de párrafos.
  const parrafos = Array.isArray(pilar.texto)
    ? pilar.texto.filter(Boolean)
    : (pilar.texto ? [pilar.texto] : []);
  const hayContenido = parrafos.length > 0 || (pilar.puntos && pilar.puntos.length > 0);

  return (
    <div className="liquid-glass rounded-tarjeta overflow-hidden">

      {/* --- Cabecera: es el botón que abre y cierra --- */}
      <button
        type="button"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        aria-controls={idPanel}
        data-abierto={abierto ? 'true' : 'false'}
        className="barra-pilar relative z-10 w-full flex items-center gap-4 sm:gap-6 text-left px-5 sm:px-8 py-6 sm:py-8 cursor-pointer"
      >
        {pilar.icono ? (
          <span className="liquid-glass caja-icono rounded-[0.9rem] shrink-0 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14">
            <Icono nombre={pilar.icono} className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </span>
        ) : null}

        <span className="flex-1 min-w-0">
          <span className="block font-heading italic text-white text-3xl sm:text-4xl md:text-5xl tracking-[-1.5px] leading-none">
            {pilar.nombre}
          </span>
          {pilar.bajada ? (
            <span className="block text-sm text-white/85 font-body font-light mt-2">
              {pilar.bajada}
            </span>
          ) : null}
        </span>

        <span className="border borde-marca rounded-full shrink-0 flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11">
          <Icono nombre="flecha-abajo" className="giro-flecha h-5 w-5 text-white" />
        </span>
      </button>

      {/* --- Panel que se despliega --- */}
      <div id={idPanel} className="desplegable relative z-10" data-abierto={abierto ? 'true' : 'false'}>
        <div className="desplegable-interior">
          <div className="px-5 sm:px-8 pb-7 sm:pb-8 pt-1">
            <div className="linea-marca mb-5" />

            {hayContenido ? (
              <React.Fragment>
                {parrafos.length ? (
                  <div className="space-y-4 max-w-[72ch]">
                    {parrafos.map((parrafo, i) => (
                      <p key={i} className="text-sm md:text-base text-white font-body font-light leading-relaxed">
                        {parrafo}
                      </p>
                    ))}
                  </div>
                ) : null}

                {pilar.puntos && pilar.puntos.length ? (
                  <ul className={'space-y-3 ' + (parrafos.length ? 'mt-5' : '')}>
                    {pilar.puntos.map((punto, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Icono nombre="check" className="h-4 w-4 mt-1 shrink-0 text-marca" strokeWidth={2.4} />
                        <span className="text-sm md:text-base text-white font-body font-light leading-relaxed">
                          {punto}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </React.Fragment>
            ) : (
              /* Aviso mientras el texto todavía no está escrito. Desaparece
                 solo apenas se rellene "texto" o "puntos" en el contenido. */
              <p className="text-sm text-white/45 font-body font-light italic">
                Escribe aquí el texto de este pilar.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function VisionMision({ id }) {
  const c = window.CONTENIDO_VISION_MISION;

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} />

      {/* --- Los dos bloques (Visión y Misión) ---
              items-start: al abrir "Leer más" en uno, el otro NO se estira
              para acompañarlo; cada tarjeta mide lo que mide su contenido. */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mt-16">
        {c.bloques.map((bloque, i) => (
          <Reveal comoLista key={i} delay={i * 0.12}>
            <TarjetaGlass
              icono={bloque.icono}
              etiquetas={bloque.etiqueta ? [bloque.etiqueta] : []}
              titulo={bloque.titulo}
              texto={bloque.texto}
              puntos={bloque.puntos}
              masTexto={bloque.masTexto}
              indice={i}
              anchoTexto="max-w-none"
              alturaMinima="min-h-0"
            />
          </Reveal>
        ))}
      </div>

      {/* --- Pilares (barras desplegables) --- */}
      {c.pilares && c.pilares.lista && c.pilares.lista.length ? (
        <div className="mt-16">
          <Reveal comoLista delay={0.1}>
            <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px]">
              {c.pilares.titulo}
            </h3>
          </Reveal>

          <div className="flex flex-col gap-4 mt-6">
            {c.pilares.lista.map((pilar, i) => (
              <Reveal comoLista key={i} delay={0.15 + i * 0.1}>
                <BarraPilar pilar={pilar} indice={i} />
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </SeccionBase>
  );
}

window.VisionMision = VisionMision;
