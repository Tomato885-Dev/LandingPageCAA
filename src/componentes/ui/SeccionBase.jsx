/* ============================================================================
   SeccionBase.jsx — Molde común para todas las secciones
   ----------------------------------------------------------------------------
   Se encarga del fondo (video o imagen), del ancho y de los márgenes.
   Gracias a esto, crear una sección nueva es muy simple:

     function MiSeccion({ id, contenido }) {
       return (
         <SeccionBase id={id} fondo={contenido.fondo}>
           ...lo que quieras mostrar...
         </SeccionBase>
       );
     }
   ============================================================================ */

function SeccionBase({ id, fondo = {}, children, className = '', alturaMinima = 'min-h-screen' }) {
  const hayFondo = Boolean(fondo.video || fondo.imagen);

  return (
    <section id={id} className={'relative w-full overflow-hidden bg-fondo ' + alturaMinima + ' ' + className}>
      {hayFondo ? (
        <FadingVideo
          src={fondo.video}
          poster={fondo.imagen}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        /* Sin video: un resplandor rojo muy tenue para que el negro no quede plano */
        <div className="resplandor-marca" aria-hidden="true" />
      )}

      <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-20 py-20 md:py-24 flex flex-col">
        {children}
      </div>
    </section>
  );
}

window.SeccionBase = SeccionBase;
