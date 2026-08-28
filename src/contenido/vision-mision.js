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
      texto: 'El Verbo no necesita más promesas: necesita un CAA que sepa ' +
             'escuchar, priorizar y transformar. Queremos pasar de la cantidad ' +
             'al impacto, fortaleciendo lo que funciona y construyendo ' +
             'proyectos con propósito, continuidad y futuro. Un Verbo más ' +
             'vivo, unido y participativo, donde cada alumno sea parte de lo ' +
             'que construimos.',
      puntos: [
        'Impacto real: menos promesas, más resultados.',
        'Continuidad: fortalecer y proyectar lo que funciona.',
        'Comunidad: un Verbo más unido, participativo y vivo.',
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
