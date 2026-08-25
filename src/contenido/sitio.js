/* ============================================================================
   sitio.js — DATOS GENERALES DEL SITIO
   ----------------------------------------------------------------------------
   Aquí se edita: el nombre del CAA, el logo y los enlaces del menú superior.
   ============================================================================ */

window.CONTENIDO_SITIO = {

  /* ---- MARCA / LOGO ------------------------------------------------------ */
  marca: {
    nombre: 'CAA',                  // Nombre corto que se muestra en el pie
    nombreLargo: 'Centro de Alumnos CAA',

    // El logo del menú puede ser una LETRA o una IMAGEN.
    // • Para usar una letra: deja logoImagen en '' y escribe la letra aquí.
    logoLetra: 'c',
    // • Para usar una imagen: pon la ruta, por ejemplo 'assets/img/logo.png'
    logoImagen: '',                 // 👉 IMAGEN: logo del CAA (opcional)
  },

  /* ---- MENÚ SUPERIOR -----------------------------------------------------
     Cada enlace apunta al "id" de una sección (ver src/app/secciones.js).
     Puedes agregar o quitar elementos de esta lista libremente.
     Si quieres un enlace externo, escribe la URL completa: 'https://...'      */
  navegacion: [
    { texto: 'Inicio',        url: '#inicio' },
    { texto: 'Quiénes somos', url: '#nosotros' },
    { texto: 'Visión',        url: '#vision-mision' },
    { texto: 'Proyectos',     url: '#proyectos' },
    { texto: 'Colaboradores', url: '#colaboradores' },
  ],

  /* ---- BOTÓN DESTACADO DEL MENÚ ------------------------------------------ */
  botonMenu: {
    texto: 'Únete al CAA',
    url: '#contacto',               // 👉 ENLACE: formulario, correo o sección
  },
};
