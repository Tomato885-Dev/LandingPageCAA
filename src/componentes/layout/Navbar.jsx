/* ============================================================================
   Navbar.jsx — Barra de navegación superior
   ----------------------------------------------------------------------------
   Los enlaces y el botón NO se editan aquí: se editan en
   src/contenido/sitio.js  (navegacion y botonMenu).
   ============================================================================ */

const { useState: useStateNav, useEffect: useEffectNav } = React;

function Navbar() {
  const { marca, navegacion, botonMenu } = window.CONTENIDO_SITIO;
  const [abierto, setAbierto] = useStateNav(false);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto
  useEffectNav(() => {
    document.body.classList.toggle('menu-abierto', abierto);
    return () => document.body.classList.remove('menu-abierto');
  }, [abierto]);

  const cerrar = () => setAbierto(false);

  const Logo = (
    <a href="#inicio" className="liquid-glass rounded-full h-12 w-12 flex items-center justify-center shrink-0" aria-label={marca.nombreLargo}>
      {marca.logoImagen
        ? <img src={marca.logoImagen} alt={marca.nombre} className="relative z-10 h-7 w-7 object-contain" />
        : <span className="relative z-10 font-heading italic text-white text-2xl leading-none lowercase">{marca.logoLetra}</span>}
    </a>
  );

  return (
    <React.Fragment>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between gap-4">
          {Logo}

          {/* --- Menú centrado (solo en pantallas grandes) --- */}
          <div className="hidden lg:flex liquid-glass rounded-full px-1.5 py-1.5 items-center">
            {navegacion.map((enlace, i) => (
              <a
                key={i}
                href={enlace.url}
                className="relative z-10 px-3 py-2 text-sm font-medium text-white/90 hover:text-white font-body transition-colors"
              >
                {enlace.texto}
              </a>
            ))}
            {botonMenu && botonMenu.texto ? (
              <div className="relative z-10 ml-1">
                <Boton texto={botonMenu.texto} url={botonMenu.url} variante="solido" />
              </div>
            ) : null}
          </div>

          {/* --- Botón de menú (solo en móvil/tablet) --- */}
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            className="lg:hidden liquid-glass rounded-full h-12 w-12 flex items-center justify-center"
          >
            <Icono nombre={abierto ? 'cerrar' : 'menu'} className="relative z-10 h-5 w-5 text-white" />
          </button>

          {/* --- Espaciador invisible para equilibrar el logo en escritorio --- */}
          <span className="hidden lg:block h-12 w-12" aria-hidden="true" />
        </div>
      </nav>

      {/* --- Menú desplegado en móvil --- */}
      {abierto ? (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/70 backdrop-blur-xl flex flex-col justify-center px-8">
          <div className="flex flex-col gap-1">
            {navegacion.map((enlace, i) => (
              <a
                key={i}
                href={enlace.url}
                onClick={cerrar}
                className="font-heading italic text-white text-4xl sm:text-5xl leading-tight tracking-[-2px] py-2"
              >
                {enlace.texto}
              </a>
            ))}
          </div>
          {botonMenu && botonMenu.texto ? (
            <div className="mt-10">
              <Boton texto={botonMenu.texto} url={botonMenu.url} variante="solido" onClick={cerrar} />
            </div>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
}

window.Navbar = Navbar;
