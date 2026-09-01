/* ============================================================================
   Destacar.jsx — PALABRAS RESALTADAS DENTRO DE UN TEXTO
   ----------------------------------------------------------------------------
   Sirve para que una palabra suelta salga marcada en rojo dentro de una frase
   normal, sin tener que tocar el código.

   CÓMO SE USA (desde los archivos de src/contenido/):
   pon la palabra entre *asteriscos* y aparecerá destacada. Por ejemplo:

       etiqueta: 'es el promedio de proyectos *PRESENTADOS* por los últimos ' +
                 '5 presidentes electos',

   Puedes marcar más de una palabra en la misma frase. Si no pones asteriscos,
   el texto sale igual que siempre.

   El color y el grosor de la marca se cambian en src/estilos/theme.css,
   en la regla  .palabra-destacada
   ============================================================================ */

function Destacar({ texto }) {
  if (!texto) return null;

  /* Parte la frase en trozos: los que venían entre asteriscos quedan marcados
     y el resto se deja tal cual. */
  const trozos = String(texto).split(/\*([^*]+)\*/g);

  return (
    <React.Fragment>
      {trozos.map((trozo, i) => (
        i % 2 === 1
          ? <strong key={i} className="palabra-destacada">{trozo}</strong>
          : <React.Fragment key={i}>{trozo}</React.Fragment>
      ))}
    </React.Fragment>
  );
}

window.Destacar = Destacar;
