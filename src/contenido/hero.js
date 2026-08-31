/* ============================================================================
   hero.js — SECCIÓN 1: INICIO / PORTADA
   ----------------------------------------------------------------------------
   Es la primera pantalla que ve la gente: video de fondo, título grande,
   botones y cifras destacadas.
   ============================================================================ */

window.CONTENIDO_HERO = {

  /* ---- FONDO -------------------------------------------------------------
     • video : dirección del video de fondo (.mp4). Déjalo en '' si no quieres
               video y usa solo una imagen.
               👉 PARA USAR UN VIDEO TUYO: copia el archivo .mp4 en la carpeta
                  assets/video/ y escribe aquí  'assets/video/portada.mp4'
     • imagen: se usa como respaldo mientras carga el video, o en su lugar.     */
  fondo: {
    video: 'assets/video/portada.mp4',   // 👉 VIDEO de la portada
    imagen: '',                     // 👉 IMAGEN: ej. 'assets/img/portada.jpg'
  },

  /* ---- ETIQUETA SUPERIOR (la píldora pequeña sobre el título) ------------ */
  etiqueta: {
    destacado: '+2',                                      // texto del chip rojo
    texto: '¡Vota Carlos por un CAA que te impulsa y ejecuta!',
  },

  /* ---- TÍTULO PRINCIPAL --------------------------------------------------
     Se anima palabra por palabra. Recomendado: entre 5 y 9 palabras.
     Escribe \n donde quieras forzar un salto de línea.                        */
  titulo: 'Cuidamos nuestra historia,\nConstruimos nuestro futuro',

  /* ---- TEXTO DESCRIPTIVO ------------------------------------------------- */
  subtitulo: 'Con la experiencia de haber liderado proyectos reales y la ' +
             'convicción de que el Verbo necesita continuidad, Carlos +2 ' +
             'busca ejecutar, impulsar y representar a cada estudiante ' +
             'mediante un Centro de Alumnos serio, cercano y comprometido.',

  /* ---- BOTONES ----------------------------------------------------------- */
  botones: {
    principal:  { texto: 'Conoce nuestros proyectos', url: '#proyectos' },
    secundario: { texto: 'Quiénes somos',             url: '#nosotros' },
  },

  /* ---- CIFRAS DESTACADAS -------------------------------------------------
     Puedes dejar 2, 3 o 4 tarjetas. Los nombres de iconos disponibles están
     en src/componentes/ui/Iconos.jsx (lista al final del archivo).
     Agrega  tachado: true  si quieres que el número salga con una línea
     encima, como cuando se descarta una cifra.                                */
  estadisticas: [
    { icono: 'usuarios', numero: '2.100', etiqueta: 'Estudiantes representados' },
    { icono: 'destello', numero: '63', tachado: true, etiqueta: 'Menos proyectos, más impacto.' },
    { icono: 'objetivo', numero: '14', etiqueta: 'Proyectos pensados para generar un impacto real' },
  ],

  /* ---- FRANJA DE LA PARTE BAJA DE LA PORTADA ----------------------------
     Quitada: la portada termina en las cifras destacadas.

     Si algún día quieres volver a mostrar una franja de palabras abajo,
     cambia el null por un bloque con este formato:

       aliados: {
         texto: 'Impulsamos nuestra comunidad desde todos los frentes',
         nombres: ['Cultura', 'Deporte', 'Acción Social'],
       },                                                                     */
  aliados: null,
};
