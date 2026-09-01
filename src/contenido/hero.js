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

  /* ---- BOTONES -----------------------------------------------------------
     Los dos llevan a sitios externos.

     👉 PEGA AQUÍ LAS DIRECCIONES entre las comillas vacías:
        • principal  → el video de campaña en YouTube
          (la dirección larga del video, la que empieza con https://)
        • secundario → el Instagram de la campaña

     Mientras estén vacías, el botón se ve pero no lleva a ninguna parte y
     queda un poco atenuado. Apenas escribas la dirección funciona solo.

     Los iconos disponibles están en src/componentes/ui/Iconos.jsx            */
  botones: {
    principal:  { texto: 'Ver el video de campaña', url: '', icono: 'play' },
    secundario: { texto: 'Síguenos en Instagram',   url: '', icono: 'instagram' },
  },

  /* ---- CIFRAS DESTACADAS -------------------------------------------------
     Son las tarjetas que van abajo de los botones. Puedes dejar 2, 3 o 4.

     Campos de cada tarjeta:

     • numero    : la cifra grande. Es lo primero que se lee.
     • etiqueta  : la frase que va debajo. Se lee seguida del número, como
                   una sola oración: "34 es el promedio de proyectos...".

                   👉 PARA DESTACAR UNA PALABRA: ponla entre *asteriscos* y
                      saldrá marcada en rojo, como pasada con destacador.
                      Puedes marcar más de una palabra en la misma frase.

     • icono     : el dibujito de arriba. La lista de nombres disponibles
                   está al final de src/componentes/ui/Iconos.jsx
     • destacada : ponle  true  a la tarjeta que quieras que resalte sobre las
                   otras (se ve con el vidrio más marcado). Déjala en una sola.
     • tachado   : ponle  true  si quieres que el número salga con una línea
                   encima, como cuando se descarta una cifra.                   */
  estadisticas: [
    {
      icono: 'megafono',
      numero: '34',
      etiqueta: 'es el promedio de proyectos *PRESENTADOS* por los últimos 5 ' +
                'presidentes electos',
    },
    {
      icono: 'check',
      numero: '7',
      etiqueta: 'es el promedio de proyectos *REALIZADOS* por los últimos 5 ' +
                'presidentes electos',
    },
    {
      icono: 'rayo',
      numero: '13',
      destacada: true,
      etiqueta: 'son los proyectos que *EJECUTAREMOS*, para *IMPULSAR* a cada ' +
                'miembro de la comunidad',
    },
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
