/* ============================================================================
   App.jsx — Arma la página completa
   ----------------------------------------------------------------------------
   Recorre la lista de src/app/secciones.js y dibuja cada sección activa,
   con la barra de navegación arriba y el pie de página abajo.
   Normalmente no necesitas editar este archivo.
   ============================================================================ */

const { useEffect: useEffectApp } = React;

function App() {
  // Oculta la pantalla de carga cuando la página ya está montada
  useEffectApp(() => {
    const cargando = document.getElementById('cargando');
    if (!cargando) return;
    cargando.classList.add('oculto');
    const t = setTimeout(() => cargando.remove(), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <React.Fragment>
      <Navbar />

      <main>
        {window.SECCIONES.filter((s) => s.activa).map((seccion) => {
          const Componente = window[seccion.componente];

          if (!Componente) {
            console.warn('No se encontró el componente "' + seccion.componente +
              '". Revisa que su archivo esté incluido en index.html.');
            return null;
          }

          return <Componente key={seccion.id} id={seccion.id} />;
        })}
      </main>

      <Footer />
    </React.Fragment>
  );
}

window.App = App;

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
