/* ============================================================================
   TituloSeccion.jsx — Encabezado común de todas las secciones
   ----------------------------------------------------------------------------
   Muestra el texto pequeño ("kicker") y el título grande en varias líneas.
   Los textos se editan en los archivos de src/contenido/.

   El texto de introducción admite tres partes:
     • intro     → uno o varios párrafos. SE VEN SIEMPRE.
     • introMas  → párrafos que quedan detrás del enlace "Leer más".
     • cierre    → frase de cierre destacada. SE VE SIEMPRE.
   Si no pasas introMas, no aparece ningún enlace y todo funciona como antes.
   ============================================================================ */

const { useState: useStateTitulo } = React;

function TituloSeccion({
  kicker,
  titulo = [],
  intro,
  introMas = [],
  cierre = '',
  textoLeerMas = 'Leer más',
  textoLeerMenos = 'Leer menos',
  tamanoIntro = 'text-sm md:text-base',
  className = '',
  centrado = false,
}) {
  const lineas = Array.isArray(titulo) ? titulo : [titulo];
  const [abierto, setAbierto] = useStateTitulo(false);

  // "intro" acepta una frase suelta o una lista de párrafos.
  const parrafos = Array.isArray(intro) ? intro.filter(Boolean) : (intro ? [intro] : []);
  const parrafosExtra = (introMas || []).filter(Boolean);
  const anchoTexto = 'max-w-2xl' + (centrado ? ' mx-auto' : '');

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

      {parrafos.length ? (
        <Reveal comoLista delay={0.2}>
          <div className={'mt-6 space-y-4 ' + anchoTexto}>
            {parrafos.map((parrafo, i) => (
              <p key={i} className={'text-white font-body font-light leading-relaxed ' + tamanoIntro}>
                {parrafo}
              </p>
            ))}
          </div>
        </Reveal>
      ) : null}

      {/* --- "Leer más": el resto del texto crece hacia abajo --- */}
      {parrafosExtra.length ? (
        <Reveal comoLista delay={0.25}>
          <div className={anchoTexto}>
            <button
              type="button"
              onClick={() => setAbierto(!abierto)}
              aria-expanded={abierto}
              aria-controls="intro-mas"
              data-abierto={abierto ? 'true' : 'false'}
              className="enlace-leer-mas mt-5 inline-flex items-center gap-2 text-sm font-body font-medium text-white hover:text-marca transition-colors cursor-pointer"
            >
              <span>{abierto ? textoLeerMenos : textoLeerMas}</span>
              <Icono nombre="flecha-abajo" className="giro-flecha h-4 w-4" />
            </button>

            <div id="intro-mas" className="desplegable" data-abierto={abierto ? 'true' : 'false'}>
              <div className="desplegable-interior">
                <div className="pt-5 space-y-4">
                  {parrafosExtra.map((parrafo, i) => (
                    <p key={i} className="text-sm md:text-base text-white/90 font-body font-light leading-relaxed">
                      {parrafo}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ) : null}

      {/* --- Frase de cierre destacada --- */}
      {cierre ? (
        <Reveal comoLista delay={0.3}>
          <p className={'mt-8 border-l-2 borde-marca pl-5 font-heading italic text-white text-xl md:text-2xl leading-snug ' + anchoTexto}>
            {cierre}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

window.TituloSeccion = TituloSeccion;
