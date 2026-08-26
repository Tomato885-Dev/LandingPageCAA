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
     Agrega o elimina tarjetas copiando un bloque { ... } completo.
     "icono" debe ser un nombre de la lista de src/componentes/ui/Iconos.jsx    */
  tarjetas: [
    {
      icono: 'usuarios',
      etiquetas: ['Elegida por votación', 'Periodo anual', '7 integrantes'],
      titulo: 'Directiva',
      texto: 'Coordina el trabajo del centro, representa al estudiantado en ' +
             'las instancias oficiales y responde por la ejecución del plan ' +
             'de trabajo comprometido.',
    },
    {
      icono: 'megafono',
      etiquetas: ['Abiertas a todos', 'Cultura', 'Deporte', 'Bienestar'],
      titulo: 'Comisiones',
      texto: 'Equipos temáticos donde cualquier estudiante puede participar. ' +
             'Ahí nacen y se ejecutan la mayoría de las actividades del año.',
    },
    {
      icono: 'calendario',
      etiquetas: ['Mensual', 'Voto informado', 'Actas públicas'],
      titulo: 'Asamblea',
      texto: 'La instancia donde se decide en conjunto. Toda propuesta ' +
             'relevante se discute y se vota con la comunidad presente.',
    },
  ],

  /* ---- EQUIPO / DIRECTIVA ------------------------------------------------
     👉 FOTOS: guarda las imágenes en assets/img/ y escribe la ruta en "foto".
        Si dejas "foto" vacío, se muestra un recuadro con las iniciales.        */
  equipo: {
    titulo: 'La directiva 2026',
    integrantes: [
      { nombre: 'Nombre Apellido', cargo: 'Presidencia',      foto: '' },
      { nombre: 'Nombre Apellido', cargo: 'Vicepresidencia',  foto: '' },
      { nombre: 'Nombre Apellido', cargo: 'Secretaría',       foto: '' },
      { nombre: 'Nombre Apellido', cargo: 'Tesorería',        foto: '' },
    ],
  },
};
