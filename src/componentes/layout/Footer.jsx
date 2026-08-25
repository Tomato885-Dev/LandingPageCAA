/* ============================================================================
   Footer.jsx — Pie de página
   ----------------------------------------------------------------------------
   Todo su contenido se edita en src/contenido/footer.js
   Lleva el id "contacto", por eso los botones que apuntan a '#contacto'
   terminan aquí.
   ============================================================================ */

function Footer() {
  const c = window.CONTENIDO_FOOTER;
  const { marca } = window.CONTENIDO_SITIO;

  return (
    <footer id="contacto" className="relative w-full bg-fondo px-6 sm:px-8 md:px-16 lg:px-20 pt-24 pb-10 overflow-hidden">
      {/* Resplandor rojo tenue del pie de página */}
      <div className="resplandor-marca" aria-hidden="true" />

      {/* --- Bloque principal: título + botón --- */}
      <Reveal comoLista className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b borde-marca pb-14">
          <div className="max-w-xl">
            <h2 className="font-heading italic text-white text-5xl md:text-7xl leading-[0.9] tracking-[-3px]">
              {c.titulo}
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/85 font-body font-light leading-relaxed">
              {c.descripcion}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            {c.boton && c.boton.texto ? <Boton texto={c.boton.texto} url={c.boton.url} variante="principal" /> : null}

            {/* --- Redes sociales --- */}
            {c.redes && c.redes.length ? (
              <div className="flex items-center gap-2">
                {c.redes.map((red, i) => (
                  <a
                    key={i}
                    href={red.url}
                    target={red.url && red.url.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={red.nombre}
                    title={red.nombre}
                    className="liquid-glass rounded-full h-11 w-11 flex items-center justify-center hover-elevar"
                  >
                    <Icono nombre={red.icono} className="relative z-10 h-5 w-5 text-white" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>

      {/* --- Columnas de enlaces + datos de contacto --- */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
        {c.columnas.map((columna, i) => (
          <Reveal comoLista key={i} delay={i * 0.05}>
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-white/50 font-body font-medium mb-4">
                {columna.titulo}
              </h3>
              <ul className="space-y-2.5">
                {columna.enlaces.map((enlace, j) => (
                  <li key={j}>
                    <a
                      href={enlace.url}
                      target={enlace.url && enlace.url.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white/85 hover:text-white font-body font-light transition-colors"
                    >
                      {enlace.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal comoLista delay={0.15}>
          <div>
            <h3 className="text-xs uppercase tracking-[0.18em] text-white/50 font-body font-medium mb-4">Contacto</h3>
            <ul className="space-y-3">
              {c.contacto.map((dato, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Icono nombre={dato.icono} className="h-4 w-4 mt-0.5 shrink-0 text-white/70" />
                  {dato.url
                    ? <a href={dato.url} className="text-sm text-white/85 hover:text-white font-body font-light transition-colors">{dato.texto}</a>
                    : <span className="text-sm text-white/85 font-body font-light">{dato.texto}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* --- Línea final --- */}
      <div className="relative z-10 border-t borde-marca pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="liquid-glass rounded-full h-10 w-10 flex items-center justify-center">
            {marca.logoImagen
              ? <img src={marca.logoImagen} alt={marca.nombre} className="relative z-10 h-6 w-6 object-contain" />
              : <span className="relative z-10 font-heading italic text-white text-xl leading-none lowercase">{marca.logoLetra}</span>}
          </span>
          <span className="font-heading italic text-white text-xl">{marca.nombreLargo}</span>
        </div>
        <p className="text-xs text-white/50 font-body font-light">{c.legal}</p>
      </div>
    </footer>
  );
}

window.Footer = Footer;
