/* ============================================================================
   Logo.jsx — El logo de la campaña (menú de arriba y pie de página)
   ----------------------------------------------------------------------------
   No se edita aquí: el logo se cambia en  src/contenido/sitio.js
     • marca.logoImagen → ruta de la imagen (ej. 'assets/img/logo-carlos.png')
     • marca.logoLetra  → letra de respaldo, por si no hay imagen

   Si la imagen no existe o no carga, vuelve solo a la letra: la página nunca
   queda con el cuadrito roto de "imagen no encontrada".
   ============================================================================ */

const { useState: useStateLogo } = React;

function Logo({ tamano = 'h-12 w-12', tamanoLetra = 'text-2xl', className = '' }) {
  const { marca } = window.CONTENIDO_SITIO;
  const [falloImagen, setFalloImagen] = useStateLogo(false);
  const hayImagen = Boolean(marca.logoImagen) && !falloImagen;

  return (
    <a
      href="#inicio"
      aria-label={marca.nombreLargo}
      className={
        'liquid-glass flex items-center justify-center shrink-0 hover-elevar ' +
        (hayImagen ? 'logo-marco rounded-logo ' : 'rounded-full ') +
        tamano + ' ' + className
      }
    >
      {hayImagen ? (
        // El logo se ve COMPLETO dentro del recuadro: nunca se recorta,
        // sea cuadrado o alargado.
        <img
          src={marca.logoImagen}
          alt={marca.nombre}
          onError={() => setFalloImagen(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className={'relative z-10 font-heading italic text-white leading-none lowercase ' + tamanoLetra}>
          {marca.logoLetra}
        </span>
      )}
    </a>
  );
}

window.Logo = Logo;
