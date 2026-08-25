/* ============================================================================
   vision-mision.js — SECCIÓN 3: VISIÓN Y MISIÓN
   ============================================================================ */

window.CONTENIDO_VISION_MISION = {

  fondo: {
    video: '',                      // 👉 VIDEO (opcional). Vacío = fondo negro
    imagen: '',                     // 👉 IMAGEN (opcional)
  },

  kicker: '// Visión y Misión',
  titulo: ['Hacia dónde', 'vamos'],

  /* ---- LOS DOS BLOQUES PRINCIPALES --------------------------------------- */
  bloques: [
    {
      icono: 'brujula',
      etiqueta: 'Visión',
      titulo: 'Visión',
      texto: 'Ser un Centro de Alumnos reconocido por su cercanía, su ' +
             'transparencia y su capacidad de transformar las inquietudes ' +
             'del estudiantado en mejoras reales y duraderas.',
      puntos: [
        'Una comunidad informada y participativa',
        'Espacios estudiantiles dignos y accesibles',
        'Representación con datos y no con supuestos',
      ],
    },
    {
      icono: 'objetivo',
      etiqueta: 'Misión',
      titulo: 'Misión',
      texto: 'Representar y acompañar a cada estudiante, gestionando ' +
             'proyectos, actividades y canales de apoyo que respondan a lo ' +
             'que la comunidad realmente necesita.',
      puntos: [
        'Escuchar de forma permanente y abierta',
        'Ejecutar proyectos medibles y rendir cuentas',
        'Cuidar el bienestar y la vida estudiantil',
      ],
    },
  ],

  /* ---- VALORES (píldoras al final de la sección) ------------------------- */
  valores: {
    titulo: 'Nuestros valores',
    lista: ['Transparencia', 'Cercanía', 'Colaboración', 'Respeto', 'Compromiso', 'Inclusión'],
  },
};
