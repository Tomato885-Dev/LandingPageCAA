/* ============================================================================
   Proyectos.jsx — SECCIÓN 4: PROYECTOS
   ----------------------------------------------------------------------------
   Los proyectos se agregan/editan en:  src/contenido/proyectos.js
   (no hace falta tocar este archivo para agregar un proyecto nuevo)
   ============================================================================ */

function TarjetaProyecto({ proyecto }) {
  // Si el proyecto está marcado como "destacado", la tarjeta ocupa todo el
  // ancho y se muestra con la imagen a un lado (solo en pantallas grandes).
  const destacado = Boolean(proyecto.destacado);

  return (
    <Panel className="rounded-tarjeta p-5 h-full">
      <div className={'relative z-10 flex flex-col h-full gap-5 ' + (destacado ? 'lg:flex-row lg:items-stretch lg:gap-8' : '')}>

        {/* --- Imagen --- */}
        <div className={'relative ' + (destacado ? 'lg:w-1/2 lg:shrink-0 lg:h-full' : '')}>
          <Media
            src={proyecto.imagen}
            alt={proyecto.titulo}
            proporcion={destacado ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[320px]' : 'aspect-[16/10]'}
            etiqueta="Agrega aquí la imagen del proyecto"
          />
          {proyecto.estado ? (
            <span className="absolute top-3 left-3 liquid-glass rounded-full px-3 py-1 text-[11px] font-medium text-white">
              <span className="relative z-10 flex items-center gap-1.5">
                <i className="punto-marca" />
                {proyecto.estado}
              </span>
            </span>
          ) : null}
        </div>

        {/* --- Texto --- */}
        <div className={'flex flex-col flex-1 ' + (destacado ? 'lg:py-2' : '')}>
          <h3 className={'font-heading italic text-white tracking-[-1px] leading-none ' + (destacado ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl')}>
            {proyecto.titulo}
          </h3>
          <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[48ch]">
            {proyecto.descripcion}
          </p>

          {proyecto.etiquetas && proyecto.etiquetas.length ? (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {proyecto.etiquetas.map((etiqueta, i) => <Pildora key={i}>{etiqueta}</Pildora>)}
            </div>
          ) : null}

          <div className="flex-1" />

          {proyecto.enlace && proyecto.enlace.url ? (
            <div className="mt-6">
              <Boton texto={proyecto.enlace.texto} url={proyecto.enlace.url} variante="principal" />
            </div>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}

function Proyectos({ id }) {
  const c = window.CONTENIDO_PROYECTOS;

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />

      {/* --- Lista de proyectos --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {c.proyectos.map((proyecto, i) => (
          <Reveal comoLista key={i} delay={(i % 3) * 0.1} className={proyecto.destacado ? 'lg:col-span-3' : ''}>
            <TarjetaProyecto proyecto={proyecto} />
          </Reveal>
        ))}
      </div>

      {/* --- Invitación final --- */}
      {c.cta && c.cta.texto ? (
        <Reveal comoLista delay={0.1}>
          <Panel elevar={false} className="rounded-tarjeta mt-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="relative z-10 font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">
              {c.cta.texto}
            </p>
            <div className="relative z-10">
              <Boton texto={c.cta.boton.texto} url={c.cta.boton.url} variante="principal" />
            </div>
          </Panel>
        </Reveal>
      ) : null}
    </SeccionBase>
  );
}

window.Proyectos = Proyectos;
