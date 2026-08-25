/* ============================================================================
   Media.jsx — Imagen con marcador de "aquí va una imagen"
   ----------------------------------------------------------------------------
   Si en el archivo de contenido pusiste una ruta de imagen, se muestra esa
   imagen. Si el campo está vacío, se muestra un recuadro que indica dónde debe
   ir la imagen (así nunca queda un hueco raro en la página).
   ============================================================================ */

function Media({ src, alt = '', className = '', proporcion = 'aspect-[16/9]', etiqueta = 'Agrega aquí tu imagen', icono = 'imagen' }) {
  return (
    <div className={'media-marco rounded-tarjeta ' + proporcion + ' ' + className}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-2 text-white/45">
          <Icono nombre={icono} className="h-7 w-7" />
          <span className="text-[11px] font-body text-center px-4 leading-tight">{etiqueta}</span>
        </div>
      )}
    </div>
  );
}

window.Media = Media;
