/* ============================================================================
   colaboradores.js — SECCIÓN 5: COLABORADORES
   ----------------------------------------------------------------------------
   CÓMO AGREGAR O ELIMINAR UN COLABORADOR:
   • Agregar : copia un bloque { ... } completo y cambia sus datos.
   • Eliminar: borra el bloque { ... } completo, incluida su coma final.
   ============================================================================ */

window.CONTENIDO_COLABORADORES = {

  fondo: {
    video: '',                      // 👉 VIDEO (opcional)
    imagen: '',                     // 👉 IMAGEN (opcional)
  },

  kicker: '// Colaboradores',
  titulo: ['Quienes caminan', 'con nosotros'],
  intro: 'Organizaciones, unidades y personas que hacen posible el trabajo ' +
         'del Centro de Alumnos.',

  /* ------------------------------------------------------------------------
     CAMPOS DE CADA COLABORADOR
     • nombre : cómo se llama (se muestra si no hay logo)
     • logo   : ruta de la imagen, ej. 'assets/logos/nombre.png'
                (fondo transparente y color claro se ven mejor)
     • url    : sitio web del colaborador; usa '' si no tiene
     • tipo   : texto pequeño bajo el nombre (opcional)
     ------------------------------------------------------------------------ */
  colaboradores: [
    { nombre: 'Dirección de Asuntos Estudiantiles', logo: '', url: '', tipo: 'Institución' },
    { nombre: 'Federación de Estudiantes',          logo: '', url: '', tipo: 'Estudiantil' },
    { nombre: 'Vinculación con el Medio',           logo: '', url: '', tipo: 'Institución' },
    { nombre: 'Centro Cultural',                    logo: '', url: '', tipo: 'Organización' },
    { nombre: 'Club Deportivo',                     logo: '', url: '', tipo: 'Organización' },
    { nombre: 'Red de Egresados',                   logo: '', url: '', tipo: 'Comunidad' },
  ],

  /* ---- INVITACIÓN A COLABORAR ------------------------------------------- */
  cta: {
    texto: '¿Tu organización quiere colaborar con el CAA?',
    boton: { texto: 'Escríbenos', url: 'mailto:contacto@caa.cl' },  // 👉 ENLACE
  },
};
