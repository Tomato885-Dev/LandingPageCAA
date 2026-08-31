/* ============================================================================
   Vidrio.jsx — Piezas base con efecto "liquid glass"
   ----------------------------------------------------------------------------
   Panel     → tarjeta de vidrio
   Pildora   → etiqueta redondeada pequeña
   CajaIcono → cuadrado de vidrio con un icono dentro
   Boton     → botón o enlace (3 estilos: 'principal', 'solido', 'texto')
   ============================================================================ */

/* "as" permite que el panel sea otra etiqueta en vez de un div: por ejemplo
   as="button" cuando la tarjeta completa tiene que ser pinchable. */
function Panel({ children, className = '', fuerte = false, elevar = true, as: Etiqueta = 'div', ...props }) {
  const base = fuerte ? 'liquid-glass-strong' : 'liquid-glass';
  return (
    <Etiqueta className={base + (elevar ? ' hover-elevar' : '') + ' ' + className} {...props}>
      {children}
    </Etiqueta>
  );
}

function Pildora({ children, className = '' }) {
  return (
    <span className={'liquid-glass rounded-full px-3 py-1 text-[11px] text-white font-body whitespace-nowrap ' + className}>
      {children}
    </span>
  );
}

function CajaIcono({ nombre, className = '' }) {
  return (
    <div className={'liquid-glass caja-icono rounded-[0.75rem] h-11 w-11 shrink-0 flex items-center justify-center ' + className}>
      <Icono nombre={nombre} className="h-6 w-6 text-white relative z-10" />
    </div>
  );
}

/* ----------------------------------------------------------------------------
   Boton
   • variante 'principal' → vidrio fuerte (llamado a la acción destacado)
   • variante 'solido'    → fondo del color de acento (menú)
   • variante 'texto'     → solo texto con icono
   ---------------------------------------------------------------------------- */
function Boton({ texto, url = '#', variante = 'principal', icono = 'flecha-diagonal', className = '', onClick }) {
  if (!texto) return null;

  const externo = /^https?:|^mailto:|^tel:/.test(url);
  const propsEnlace = externo ? { target: url.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};

  const estilos = {
    principal: 'liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white hover-elevar',
    solido:    'bg-acento text-acento-texto rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap hover-elevar',
    texto:     'text-sm font-medium text-white hover:text-marca',
  };

  const clase = 'inline-flex items-center gap-2 font-body transition-colors ' +
                (estilos[variante] || estilos.principal) + ' ' + className;
  const contenido = (
    <React.Fragment>
      <span className="relative z-10">{texto}</span>
      {icono ? <Icono nombre={icono} className={'relative z-10 ' + (variante === 'texto' ? 'h-4 w-4' : 'h-5 w-5')} /> : null}
    </React.Fragment>
  );

  /* Si todavía no tiene dirección, se dibuja igual pero como texto, no como
     enlace: así no recarga la página al pincharlo, y queda algo atenuado para
     que se note. Apenas escribas la url en src/contenido/ vuelve a ser un
     botón normal, sin tocar nada más. */
  if (!url) {
    return <span className={clase + ' opacity-60 cursor-default'} title={texto}>{contenido}</span>;
  }

  return (
    <a href={url} onClick={onClick} className={clase} {...propsEnlace}>
      {contenido}
    </a>
  );
}

window.Panel = Panel;
window.Pildora = Pildora;
window.CajaIcono = CajaIcono;
window.Boton = Boton;
