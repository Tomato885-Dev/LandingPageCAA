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
     • imagen: se usa como respaldo mientras carga el video, o en su lugar.     */
  fondo: {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4', // 👉 VIDEO: reemplazar por uno del CAA
    imagen: '',                     // 👉 IMAGEN: ej. 'assets/img/portada.jpg'
  },

  /* ---- ETIQUETA SUPERIOR (la píldora pequeña sobre el título) ------------ */
  etiqueta: {
    destacado: '+2',                                      // texto del chip rojo
    texto: 'Periodo 2027 · ¡Vota Carlos por un CAA con experiencia!',
  },

  /* ---- TÍTULO PRINCIPAL --------------------------------------------------
     Se anima palabra por palabra. Recomendado: entre 5 y 9 palabras.
     Escribe \n donde quieras forzar un salto de línea.                        */
  titulo: 'Cuidamos nuestra historia,\nConstruimos nuestro futuro',

  /* ---- TEXTO DESCRIPTIVO ------------------------------------------------- */
  subtitulo: 'Con la experiencia de lo que hemos construido y la motivación ' +
             'para seguir avanzando, Carlos +2 busca representar, escuchar y ' +
             'trabajar junto a todos los estudiantes por un Centro de Alumnos ' +
             'cada vez más cercano, activo y comprometido.',

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

  /* ---- FRANJA DE ALIADOS (parte baja de la portada) ---------------------- */
  aliados: {
    texto: 'Impulsamos nuestra comunidad desde todos los frentes',
    nombres: ['Cultura', 'Deporte', 'Acción Social', 'Participación Estudiantil', 'Convivencia y Comunidad'],
  },
};
