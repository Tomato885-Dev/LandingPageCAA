/* ============================================================================
   Media.jsx — Imagen con marcador de "aquí va una imagen"
   ----------------------------------------------------------------------------
   Si en el archivo de contenido pusiste una ruta de imagen, se muestra esa
   imagen. Si el campo está vacío, se muestra un recuadro que indica dónde debe
   ir la imagen (así nunca queda un hueco raro en la página).
   ============================================================================ */

const { useState: useStateMedia } = React;

// ajuste: 'object-cover'   → la imagen llena el recuadro y se recorta (fotos)
//         'object-contain' → la imagen se ve entera, sin recortar (logos)
function Media({ src, alt = '', className = '', proporcion = 'aspect-[16/9]', etiqueta = 'Agrega aquí tu imagen', icono = 'imagen', ajuste = 'object-cover' }) {
  // Si la ruta está escrita pero el archivo todavía no se ha subido, se vuelve
  // a mostrar el marcador en lugar del icono de "imagen rota" del navegador.
  const [falloImagen, setFalloImagen] = useStateMedia(false);

  return (
    <div className={'media-marco rounded-tarjeta ' + proporcion + ' ' + className}>
      {src && !falloImagen ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFalloImagen(true)} className={'h-full w-full ' + ajuste} />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-white/60">
          <Icono nombre={icono} className="h-7 w-7" />
          <span className="text-[11px] font-body text-center px-4 leading-tight">{etiqueta}</span>
        </div>
      )}
    </div>
  );
}

window.Media = Media;
