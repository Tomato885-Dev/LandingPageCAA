/* ============================================================================
   FadingVideo.jsx — Video de fondo con fundido de entrada y salida
   ----------------------------------------------------------------------------
   El video se repite solo: aparece con un fundido, y justo antes de terminar
   se desvanece y vuelve a empezar. Todo el fundido se hace con JavaScript
   (requestAnimationFrame), no con transiciones CSS.

   No necesitas modificar este archivo para cambiar un video: la dirección del
   video se edita en los archivos de src/contenido/ (campo "fondo.video").
   ============================================================================ */

const { useEffect, useRef } = React;

const DURACION_FUNDIDO = 500;      // milisegundos que dura cada fundido
const ANTICIPACION_SALIDA = 0.55;  // segundos antes del final para empezar a salir

function FadingVideo({ src, poster, className = '', style = {} }) {
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const saliendoRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const fadeTo = (destino, duracion = DURACION_FUNDIDO) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const inicio = performance.now();
      const desde = parseFloat(video.style.opacity || '0');
      const paso = (ahora) => {
        const t = Math.min((ahora - inicio) / duracion, 1);
        video.style.opacity = String(desde + (destino - desde) * t);
        if (t < 1) rafRef.current = requestAnimationFrame(paso);
      };
      rafRef.current = requestAnimationFrame(paso);
    };

    const reproducir = () => {
      const promesa = video.play();
      if (promesa && promesa.catch) promesa.catch(() => {});
    };

    const alCargar = () => {
      video.style.opacity = '0';
      reproducir();
      fadeTo(1);
    };

    const alAvanzar = () => {
      const restante = video.duration - video.currentTime;
      if (!saliendoRef.current && restante <= ANTICIPACION_SALIDA && restante > 0) {
        saliendoRef.current = true;
        fadeTo(0);
      }
    };

    const alTerminar = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        reproducir();
        saliendoRef.current = false;
        fadeTo(1);
      }, 100);
    };

    video.addEventListener('loadeddata', alCargar);
    video.addEventListener('timeupdate', alAvanzar);
    video.addEventListener('ended', alTerminar);

    if (video.readyState >= 2) alCargar();   // ya estaba cargado

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      video.removeEventListener('loadeddata', alCargar);
      video.removeEventListener('timeupdate', alAvanzar);
      video.removeEventListener('ended', alTerminar);
    };
  }, [src]);

  // Si no hay video pero sí una imagen, se muestra la imagen como fondo fijo.
  if (!src) {
    if (!poster) return null;
    return (
      <div
        className={className}
        style={{ ...style, backgroundImage: 'url(' + poster + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster || undefined}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
      aria-hidden="true"
    />
  );
}

window.FadingVideo = FadingVideo;
