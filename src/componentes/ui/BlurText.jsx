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

  const palabras = String(text).split(' ');

  const estiloParrafo = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    rowGap: '0.1em',
  };

  if (!motion) {
    return <p ref={contenedorRef} className={className} style={estiloParrafo}>{text}</p>;
  }

  return (
    <p ref={contenedorRef} className={className} style={estiloParrafo}>
      {palabras.map((palabra, i) => (
        <motion.span
          key={palabra + '-' + i}
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
            delay: (i * delayPorPalabra) / 1000,
          }}
        >
          {palabra}
        </motion.span>
      ))}
    </p>
  );
}

window.BlurText = BlurText;
