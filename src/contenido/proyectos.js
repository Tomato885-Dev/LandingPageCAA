/* ============================================================================
   proyectos.js — SECCIÓN 4: PROYECTOS
   ----------------------------------------------------------------------------
   CÓMO AGREGAR UN PROYECTO NUEVO:
   copia un bloque completo { ... } de la lista "proyectos", pégalo debajo
   (respetando la coma final) y cambia sus datos. Nada más.
   ============================================================================ */

window.CONTENIDO_PROYECTOS = {

  fondo: {
    video: '',                      // 👉 VIDEO (opcional)
    imagen: '',                     // 👉 IMAGEN (opcional)
  },

  kicker: '// Proyectos',
  titulo: ['Ideas', 'en movimiento'],
  intro: 'Cada proyecto nace de una necesidad concreta planteada por la ' +
         'comunidad. Estos son los que estamos impulsando.',

  /* ------------------------------------------------------------------------
     CAMPOS DE CADA PROYECTO
     • titulo      : nombre del proyecto
     • descripcion : de qué se trata (2 o 3 líneas)
     • imagen      : ruta de la foto, ej. 'assets/img/proyecto-becas.jpg'
                     (si la dejas vacía se muestra un recuadro con un icono)
     • estado      : texto de la etiqueta ('En curso', 'Próximamente'…)
     • etiquetas   : palabras clave (0 a 4 recomendadas)
     • enlace      : { texto: 'Ver más', url: 'https://...' }
                     déjalo en null si el proyecto aún no tiene enlace
     • destacado   : true = la tarjeta ocupa el doble de ancho en pantallas
                     grandes. Recomendado solo para 1 proyecto.
     ------------------------------------------------------------------------ */
  proyectos: [
    {
      titulo: 'Semana del Estudiante',
      descripcion: 'Una semana completa de actividades culturales, deportivas ' +
                   'y recreativas organizada por y para el estudiantado, con ' +
                   'financiamiento gestionado por el CAA.',
      imagen: '',                   // 👉 IMAGEN del proyecto
      estado: 'En curso',
      etiquetas: ['Cultura', 'Comunidad', 'Anual'],
      enlace: { texto: 'Ver programa', url: '#' },   // 👉 ENLACE
      destacado: true,
    },
    {
      titulo: 'Red de apuntes abiertos',
      descripcion: 'Repositorio colaborativo de apuntes, guías y controles ' +
                   'antiguos, ordenado por asignatura y disponible para toda ' +
                   'la comunidad.',
      imagen: '',
      estado: 'En curso',
      etiquetas: ['Académico', 'Colaborativo'],
      enlace: { texto: 'Entrar al repositorio', url: '#' },
      destacado: false,
    },
    {
      titulo: 'Punto de bienestar',
      descripcion: 'Espacio de apoyo y derivación en salud mental, con horarios ' +
                   'de atención y material de autocuidado durante el periodo de ' +
                   'evaluaciones.',
      imagen: '',
      estado: 'En curso',
      etiquetas: ['Bienestar', 'Salud mental'],
      enlace: { texto: 'Cómo acceder', url: '#' },
      destacado: false,
    },
    {
      titulo: 'Mejora de espacios comunes',
      descripcion: 'Levantamiento y gestión de mejoras en salas de estudio, ' +
                   'casilleros y áreas de descanso, con seguimiento público del ' +
                   'estado de cada solicitud.',
      imagen: '',
      estado: 'Próximamente',
      etiquetas: ['Infraestructura', 'Gestión'],
      enlace: null,
      destacado: false,
    },
  ],

  /* ---- LLAMADO A LA ACCIÓN AL FINAL DE LA SECCIÓN ------------------------
     Quitado: la sección termina en la última tarjeta de proyectos.

     Si algún día quieres volver a mostrar el recuadro del final, cambia el
     null de abajo por un bloque con este formato:

       cta: {
         texto: '¿Tienes una idea para la comunidad?',
         boton: { texto: 'Preséntala al CAA', url: '#contacto' },
       },                                                                     */
  cta: null,
};
