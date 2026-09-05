/* ============================================================================
   Modal.jsx — Cuadro que se abre encima de la página
   ----------------------------------------------------------------------------
   Se cierra con la tecla Esc, con la X o pinchando el fondo oscuro.
   Mientras está abierto, la página de atrás no se mueve.

   El cuadro se dibuja al final del <body>, no dentro de la sección. Si se
   dibujara dentro, la sección lo encerraría y el menú de arriba quedaría por
   encima del cuadro (y el fondo oscuro dejaría de responder al clic).

   Uso:
     <Modal abierto={...} alCerrar={...} titulo="..." > ...contenido... </Modal>
   ============================================================================ */

const { useEffect: useEffectModal, useRef: useRefModal } = React;

function Modal({ abierto, alCerrar, titulo, etiqueta, subtitulo, ancho, children }) {
  // ancho="amplio" hace el cuadro más ancho, para cuando lleva la foto y el
  // texto uno al lado del otro. Sin ese dato queda el ancho normal.
  const cajaRef = useRefModal(null);
  const botonRef = useRefModal(null);
  const focoPrevioRef = useRefModal(null);

  useEffectModal(() => {
    if (!abierto) return;

    // Recordar dónde estaba el foco para devolverlo al cerrar.
    focoPrevioRef.current = document.activeElement;
    if (botonRef.current) botonRef.current.focus();

    // Congelar el scroll de la página de atrás sin que el contenido salte.
    const anchoBarra = window.innerWidth - document.documentElement.clientWidth;
    const overflowPrevio = document.body.style.overflow;
    const paddingPrevio = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (anchoBarra > 0) document.body.style.paddingRight = anchoBarra + 'px';

    const alTeclear = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); alCerrar(); return; }

      // Mantener el foco dentro del cuadro mientras esté abierto.
      if (e.key !== 'Tab' || !cajaRef.current) return;
      const focos = cajaRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focos.length) return;
      const primero = focos[0];
      const ultimo = focos[focos.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
    };

    document.addEventListener('keydown', alTeclear);
    return () => {
      document.removeEventListener('keydown', alTeclear);
      document.body.style.overflow = overflowPrevio;
      document.body.style.paddingRight = paddingPrevio;
      if (focoPrevioRef.current && focoPrevioRef.current.focus) focoPrevioRef.current.focus();
    };
  }, [abierto, alCerrar]);

  if (!abierto) return null;

  return ReactDOM.createPortal((
    <div
      className="modal-fondo"
      onClick={alCerrar}
      role="dialog"
      aria-modal="true"
      aria-label={titulo || 'Detalle'}
    >
      <div
        ref={cajaRef}
        className={'modal-caja liquid-glass-strong rounded-tarjeta' + (ancho === 'amplio' ? ' modal-caja-amplio' : '')}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ENCABEZADO: se queda fijo arriba. Así el nombre y el botón de
            cerrar siguen a la vista aunque el texto de abajo sea largo. */}
        <div className="modal-encabezado relative z-10 shrink-0 px-6 pt-6 md:px-8 md:pt-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {etiqueta ? (
                <span className="inline-flex items-center gap-2 text-[11px] font-body font-medium uppercase tracking-[0.14em] text-white/70">
                  {etiqueta}
                </span>
              ) : null}
              <h3 className="font-heading italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none mt-2">
                {titulo}
              </h3>
              {subtitulo ? (
                <p className="text-sm text-white/85 font-body font-light mt-2">{subtitulo}</p>
              ) : null}
            </div>

            <button
              ref={botonRef}
              type="button"
              onClick={alCerrar}
              aria-label="Cerrar"
              className="modal-cerrar border borde-marca rounded-full shrink-0 flex items-center justify-center h-10 w-10 text-white hover:text-marca transition-colors cursor-pointer"
            >
              <Icono nombre="cerrar" className="h-5 w-5" />
            </button>
          </div>

          <div className="linea-marca my-5" />
        </div>

        {/* CUERPO: esto es lo único que se desplaza. Ver .modal-cuerpo en
            src/estilos/theme.css: si el scroll estuviera en la caja de
            afuera, el borde de vidrio se iría con el texto. */}
        <div className="modal-cuerpo relative z-10 px-6 pb-6 md:px-8 md:pb-8">
          {children}
        </div>
      </div>
    </div>
  ), document.body);
}

window.Modal = Modal;
