/* ============================================================================
   VisionMision.jsx — SECCIÓN 3: VISIÓN Y MISIÓN
   ----------------------------------------------------------------------------
   Textos:  src/contenido/vision-mision.js
   ============================================================================ */

function VisionMision({ id }) {
  const c = window.CONTENIDO_VISION_MISION;

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} />

      {/* --- Los dos bloques (Visión y Misión) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {c.bloques.map((bloque, i) => (
          <Reveal comoLista key={i} delay={i * 0.12}>
            <TarjetaGlass
              icono={bloque.icono}
              etiquetas={bloque.etiqueta ? [bloque.etiqueta] : []}
              titulo={bloque.titulo}
              texto={bloque.texto}
              puntos={bloque.puntos}
              alturaMinima="min-h-[380px]"
              className="h-full"
            />
          </Reveal>
        ))}
      </div>

      {/* --- Valores --- */}
      {c.valores && c.valores.lista && c.valores.lista.length ? (
        <Reveal comoLista delay={0.1}>
          <div className="mt-14 flex flex-col md:flex-row md:items-center gap-6">
            <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] shrink-0">
              {c.valores.titulo}
            </h3>
            <div className="flex flex-wrap gap-2">
              {c.valores.lista.map((valor, i) => (
                <span key={i} className="liquid-glass rounded-full px-4 py-2 text-sm text-white/90 font-body">
                  <span className="relative z-10">{valor}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ) : null}
    </SeccionBase>
  );
}

window.VisionMision = VisionMision;
