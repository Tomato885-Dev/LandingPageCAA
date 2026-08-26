/* ============================================================================
   sitio.js — DATOS GENERALES DEL SITIO
   ----------------------------------------------------------------------------
   Aquí se edita: el nombre del CAA, el logo y los enlaces del menú superior.
   ============================================================================ */

window.CONTENIDO_SITIO = {

  /* ---- MARCA / LOGO ------------------------------------------------------ */
  marca: {
    nombre: 'CAA 2027',             // Nombre corto que se muestra en el pie
    nombreLargo: '¡Vota Carlos!',

    // El logo del menú puede ser una LETRA o una IMAGEN.
    // • Para usar una letra: deja logoImagen en '' y escribe la letra aquí.
    logoLetra: 'C',
    // • Para usar una imagen: pon la ruta, por ejemplo 'assets/img/logo.png'
    logoImagen: '',                 // 👉 IMAGEN: pendiente, el logo de la campaña
  },

  /* ---- MENÚ SUPERIOR -----------------------------------------------------
     Cada enlace apunta al "id" de una sección (ver src/app/secciones.js).
     Puedes agregar o quitar elementos de esta lista libremente.
     Si quieres un enlace externo, escribe la URL completa: 'https://...'      */
  navegacion: [
    { texto: 'Inicio',           url: '#inicio' },
    { texto: '¿Quiénes somos?',  url: '#nosotros' },
    { texto: 'Visión y Misión',  url: '#vision-mision' },
    { texto: 'Proyectos',        url: '#proyectos' },
    { texto: 'Colaboradores',    url: '#colaboradores' },
  ],

  /* ---- BOTÓN DESTACADO DEL MENÚ ------------------------------------------ */
  botonMenu: {
    texto: 'Únete al CAA',
    url: '#contacto',               // 👉 ENLACE: formulario, correo o sección
  },
};
