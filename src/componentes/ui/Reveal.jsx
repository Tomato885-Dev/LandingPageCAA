/* ============================================================================
   Reveal.jsx — Envoltorio de animación de entrada
   ----------------------------------------------------------------------------
   Hace que cualquier contenido aparezca con un suave desenfoque al entrar en
   pantalla.  Uso:   <Reveal delay={0.2}>  ...contenido...  </Reveal>
   ============================================================================ */

function Reveal({ children, delay = 0, y = 20, className = '', comoLista = false }) {
  const motion = (window.Motion || {}).motion;
  if (!motion) return <div className={className}>{children}</div>;

  const propsComunes = {
    className,
    initial: { filter: 'blur(10px)', opacity: 0, y },
    transition: { duration: 0.7, ease: 'easeOut', delay },
  };

  // comoLista=true → anima cuando entra en pantalla (secciones interiores)
  // comoLista=false → anima al cargar (portada)
  return comoLista
    ? <motion.div {...propsComunes} whileInView={{ filter: 'blur(0px)', opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}>{children}</motion.div>
    : <motion.div {...propsComunes} animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}>{children}</motion.div>;
}

window.Reveal = Reveal;
