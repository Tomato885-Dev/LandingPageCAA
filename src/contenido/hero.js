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
    destacado: 'Nuevo',                                   // texto del chip blanco
    texto: 'Periodo 2026 · Ya están abiertas las postulaciones a comisiones',
  },

  /* ---- TÍTULO PRINCIPAL --------------------------------------------------
     Se anima palabra por palabra. Recomendado: entre 5 y 9 palabras.          */
  titulo: 'Una comunidad estudiantil que se atreve a más',

  /* ---- TEXTO DESCRIPTIVO ------------------------------------------------- */
  subtitulo: 'Somos el Centro de Alumnos CAA: representamos, organizamos y ' +
             'construimos junto a ti. Escuchamos cada propuesta y la ' +
             'convertimos en proyectos concretos para toda la comunidad.',

  /* ---- BOTONES ----------------------------------------------------------- */
  botones: {
    principal:  { texto: 'Conoce nuestros proyectos', url: '#proyectos' },
    secundario: { texto: 'Quiénes somos',             url: '#nosotros' },
  },

  /* ---- CIFRAS DESTACADAS -------------------------------------------------
     Puedes dejar 2, 3 o 4 tarjetas. Los nombres de iconos disponibles están
     en src/componentes/ui/Iconos.jsx (lista al final del archivo).            */
  estadisticas: [
    { icono: 'usuarios',  numero: '1.240', etiqueta: 'Estudiantes representados' },
    { icono: 'estrella',  numero: '24',    etiqueta: 'Proyectos ejecutados este año' },
  ],

  /* ---- FRANJA DE ALIADOS (parte baja de la portada) ---------------------- */
  aliados: {
    texto: 'Trabajamos junto a federaciones, centros de alumnos y organizaciones',
    nombres: ['Federación', 'Vinculación', 'Deportes', 'Cultura', 'Bienestar'],
  },
};
