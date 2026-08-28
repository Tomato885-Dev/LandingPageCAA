/* ============================================================================
   nosotros.js — SECCIÓN 2: ¿QUIÉNES SOMOS?
   ============================================================================ */

window.CONTENIDO_NOSOTROS = {

  /* ---- FONDO DE LA SECCIÓN ---------------------------------------------- */
  fondo: {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4', // 👉 VIDEO
    imagen: '',                     // 👉 IMAGEN alternativa
  },

  /* ---- ENCABEZADO -------------------------------------------------------- */
  kicker: '// ¿Por qué nosotros?',  // texto chico sobre el título
  titulo: ['Experiencia', 'que nos une'], // cada elemento es una línea
  intro: 'Somos un equipo con experiencia y participación activa en nuestra ' +
         'comunidad. Conocemos de cerca sus desafíos porque escuchamos ' +
         'diariamente a los estudiantes. Por eso, presentamos proyectos ' +
         'concretos, pensados para generar un impacto real en el día a día ' +
         'de todos.',

  /* ---- TARJETAS DE ÁREAS -------------------------------------------------
     Ahora mismo esta sección va sin tarjetas: del texto de introducción se
     pasa directo a las fotos del equipo.

     Si algún día quieres volver a mostrar tarjetas aquí (por ejemplo, tus
     áreas de trabajo o tus ejes de campaña), agrégalas dentro de los
     corchetes con este formato:

       {
         icono: 'megafono',
         etiquetas: ['Una etiqueta', 'Otra'],
         titulo: 'Título de la tarjeta',
         texto: 'Dos o tres frases explicando de qué se trata.',
       },

     Los nombres de iconos están en src/componentes/ui/Iconos.jsx              */
  tarjetas: [],

  /* ---- EQUIPO / DIRECTIVA ------------------------------------------------
     Cada integrante lleva solo NOMBRE y FOTO.

     👉 FOTOS: sube las 7 imágenes a la carpeta  assets/img/equipo/  con los
        nombres que ya están escritos abajo (integrante-1.jpg, integrante-2.jpg,
        y así). No hace falta cambiar nada más aquí.
        Mientras una foto no esté subida, ese recuadro muestra el marcador
        "Foto del integrante" y la página no se rompe.

     Para agregar o quitar a alguien, copia o borra una línea { ... } completa.
     El diseño se reacomoda solo, sean 4, 7 u 11 integrantes.                   */
  equipo: {
    titulo: 'La directiva 2027',
    integrantes: [
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-1.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-2.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-3.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-4.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-5.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-6.jpg' },
      { nombre: 'Nombre Apellido', foto: 'assets/img/equipo/integrante-7.jpg' },
    ],
  },
};
