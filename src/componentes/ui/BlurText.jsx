/* ============================================================================
   BlurText.jsx — Título que aparece palabra por palabra, saliendo del desenfoque
   ----------------------------------------------------------------------------
   Uso:  <BlurText text="Mi título" className="..." />
   ============================================================================ */

const { useEffect: useEffectBlur, useRef: useRefBlur, useState: useStateBlur } = React;

function BlurText({ text = '', className = '', delayPorPalabra = 100 }) {
  const motion = (window.Motion || {}).motion;
  const contenedorRef = useRefBlur(null);
  const [visible, setVisible] = useStateBlur(false);

  useEffectBlur(() => {
    const nodo = contenedorRef.current;
    if (!nodo) return;
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            setVisible(true);
            observador.unobserve(nodo);
          }
        });
      },
      { threshold: 0.1 }
    );
    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  // Un \n en el texto fuerza un salto de línea; dentro de cada línea las
  // palabras siguen acomodándose solas según el ancho de la pantalla.
  const lineas = String(text).split('\n').map((linea) => linea.trim().split(' '));

  const estiloParrafo = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: '0.1em',
  };

  if (!motion) {
    return (
      <p ref={contenedorRef} className={className} style={estiloParrafo}>
        {String(text).replace(/\n/g, ' ')}
      </p>
    );
  }

  let indicePalabra = -1;   // cuenta corrida para escalonar la animación

  return (
    <p ref={contenedorRef} className={className} style={estiloParrafo}>
      {lineas.map((palabras, l) => [
        // Separador invisible que empuja la línea siguiente hacia abajo
        l > 0 ? <span key={'salto-' + l} style={{ flexBasis: '100%', height: 0 }} /> : null,
        ...palabras.map((palabra, i) => {
          indicePalabra += 1;
          const orden = indicePalabra;
          return (
            <motion.span
              key={l + '-' + palabra + '-' + i}
              style={{ display: 'inline-block', marginRight: '0.28em', willChange: 'transform, filter, opacity' }}
              initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
              animate={visible ? {
                filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                opacity: [0, 0.5, 1],
                y: [50, -5, 0],
              } : {}}
              transition={{
                duration: 0.7,
                times: [0, 0.5, 1],
                ease: 'easeOut',
                delay: (orden * delayPorPalabra) / 1000,
              }}
            >
              {palabra}
            </motion.span>
          );
        }),
      ])}
    </p>
  );
}

window.BlurText = BlurText;
