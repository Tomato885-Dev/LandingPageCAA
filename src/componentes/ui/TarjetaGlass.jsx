/* ============================================================================
   TarjetaGlass.jsx — Tarjeta de vidrio reutilizable
   ----------------------------------------------------------------------------
   Es la tarjeta que se usa en "Quiénes somos" y en "Visión y Misión":
   icono arriba a la izquierda, etiquetas arriba a la derecha, y abajo el
   título con su texto.  Acepta también una lista de puntos y un botón.
   ============================================================================ */

function TarjetaGlass({
  icono,
  etiquetas = [],
  titulo,
  texto,
  puntos = [],
  enlace = null,
  imagen = null,
  alturaMinima = 'min-h-[360px]',
  className = '',
}) {
  return (
    <Panel className={'rounded-tarjeta p-6 flex flex-col ' + alturaMinima + ' ' + className}>
      {/* --- Fila superior: icono + etiquetas --- */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        {icono ? <CajaIcono nombre={icono} /> : <span />}
        {etiquetas.length ? (
          <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
            {etiquetas.map((etiqueta, i) => <Pildora key={i}>{etiqueta}</Pildora>)}
          </div>
        ) : null}
      </div>

      {/* --- Imagen opcional --- */}
      {imagen !== null ? (
        <div className="relative z-10 mt-6">
          <Media src={imagen} alt={titulo} proporcion="aspect-[16/10]" />
        </div>
      ) : null}

      {/* --- Espacio flexible: empuja el texto hacia abajo --- */}
      <div className="flex-1" />

      {/* --- Parte inferior: título, texto, puntos y botón --- */}
      <div className="relative z-10 mt-6">
        {titulo ? (
          <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
            {titulo}
          </h3>
        ) : null}

        {texto ? (
          <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[38ch]">
            {texto}
          </p>
        ) : null}

        {puntos.length ? (
          <ul className="mt-5 space-y-2">
            {puntos.map((punto, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/85 font-body font-light">
                <Icono nombre="check" className="h-4 w-4 mt-0.5 shrink-0 text-white" />
                <span>{punto}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {enlace && enlace.url ? (
          <div className="mt-6">
            <Boton texto={enlace.texto} url={enlace.url} variante="principal" />
          </div>
        ) : null}
      </div>
    </Panel>
  );
}

window.TarjetaGlass = TarjetaGlass;
