/* ============================================================================
   proyectos.js — SECCIÓN 4: PROYECTOS
   ----------------------------------------------------------------------------
   Esta sección es una LÍNEA DE TIEMPO del mandato: cada actividad es una caja
   que se puede pinchar para leer su detalle.

   Para editar una actividad, busca su línea más abajo y cambia lo que quieras.
   El diseño se reacomoda solo: no hay que tocar ningún otro archivo.
   ============================================================================ */

window.CONTENIDO_PROYECTOS = {

  fondo: {
    video: '',                      // 👉 VIDEO (opcional)
    imagen: '',                     // 👉 IMAGEN (opcional)
  },

  kicker: '// Proyectos',
  titulo: ['Nuestra gestión'],
  intro: 'En el marco de nuestro pilar Ejecutar, nosotros les presentamos ' +
         'nuestra propuesta de cómo será nuestra gestión si asumimos para ' +
         'liderar el próximo año el CAA, donde indicamos cuáles serán las ' +
         'actividades desarrolladas cada mes.',

  lineaTiempo: {

    /* ---- LOS MESES DEL EJE ----------------------------------------------
       El orden de esta lista es el orden del eje. Si agregas o quitas un
       mes, el resto se reacomoda solo.                                      */
    meses: [
      'Oct 26', 'Nov 26', 'Dic 26', 'Ene 27', 'Feb 27', 'Mar 27', 'Abr 27',
      'May 27', 'Jun 27', 'Jul 27', 'Ago 27', 'Sep 27', 'Oct 27',
    ],

    /* ---- LEYENDA DE COLORES --------------------------------------------- */
    leyenda: {
      propuesta:   'Nuestros proyectos',
      tradicional: 'Proyectos CAA',
    },

    /* Instrucción chica que va ARRIBA, junto a la leyenda de colores. */
    ayuda: 'Pincha cualquier actividad para ver su detalle.',

    /* Aviso que va ARRIBA, junto a la leyenda de colores. */
    nota: 'Las actividades con flecha (→) son permanentes: comienzan ese mes ' +
          'y se mantienen durante todo el año.',

    /* Aviso que va DEBAJO de la línea de tiempo. Déjalo en '' si no lo quieres. */
    notaFinal: 'Fechas estimadas por mes, sujetas a confirmación.',

    /* ======================================================================
       LAS ACTIVIDADES

       Campos de cada una:

       • nombre     : el texto de la caja.
       • tipo       : 'propuesta'   → ROJO  (lo que proponemos nosotros)
                      'tradicional' → VERDE (lo que el colegio ya hace)
       • desde      : mes en que ocurre o empieza. Tiene que estar escrito
                      IGUAL que en la lista "meses" de arriba.
       • hasta      : solo si dura varios meses. Dibuja una barra larga.
                      Si la actividad es de un solo mes, no escribas este campo.
       • permanente : true  → le pone la flecha (→). Empieza ese mes y sigue
                      todo el año. No lleva "hasta".
       • grupo      : para que dos actividades que son LO MISMO queden en la
                      misma fila aunque ocurran en meses distintos (por
                      ejemplo Wickso Liga y Wickso Playoffs). Escríbeles el
                      mismo texto en este campo, el que quieras: solo se usa
                      para emparejarlas, no se ve en la página.
       • detalle    : el texto que se lee al pinchar la caja. Puede ser una
                      frase entre comillas o varios párrafos entre corchetes:
                          detalle: ['Primer párrafo.', 'Segundo párrafo.'],
                      Mientras esté vacío, el cuadro muestra un aviso gris que
                      desaparece solo apenas escribas algo.

       👉 Para agregar una actividad: copia una línea { ... } completa y
          cámbiale los datos.
       👉 Para quitarla: borra su línea completa.
       ====================================================================== */
    actividades: [

      /* ---------- PROYECTOS DE CAMPAÑA (rojo) ---------------------------- */
      {
        tipo: 'propuesta',
        nombre: 'CAA 911',
        desde: 'Oct 26', permanente: true,
        detalle:
          '¿Tienes un problema o idea urgente? Tu Centro de Alumnos al ' +
          'rescate: un canal rápido y directo para responder a tus ' +
          'necesidades en el colegio.',
      },
      {
        tipo: 'propuesta',
        nombre: 'App CAA',
        desde: 'Oct 26', permanente: true,
        detalle:
          '¿Te ha pasado que te enteras tarde de una actividad, torneo o ' +
          'iniciativa que te habría gustado conocer? Esta app busca cambiar ' +
          'eso. Tendremos en un solo lugar noticias, eventos, inscripciones, ' +
          'actividades y espacios para participar y conectar con estudiantes ' +
          'de toda la enseñanza media. Además, podrás conocer iniciativas, ' +
          'proyectos y emprendimientos de otros alumnos. Una plataforma hecha ' +
          'para nuestra comunidad, segura, organizada y pensada para seguir ' +
          'creciendo junto a nosotros.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Imprime al Toque',
        desde: 'Nov 26', permanente: true,
        detalle:
          'Print & Go CVD implementará un servicio de impresión gestionado ' +
          'por el Centro de Alumnos, permitiendo que todos los estudiantes ' +
          'puedan imprimir material académico de forma simple, ordenada y ' +
          'accesible. Con ello, buscamos reducir las brechas de acceso y ' +
          'asegurar que ningún alumno quede en desventaja por no contar con ' +
          'una impresora.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Plan Lector',
        desde: 'Mar 27', permanente: true,
        detalle: [
          'Queremos transformar el Plan Lector para que leer deje de ser una ' +
          'obligación y se convierta en una experiencia significativa. Sin ' +
          'eliminar las lecturas obligatorias, proponemos que una de las ' +
          'lecturas del año sea de libre elección, permitiendo que los ' +
          'estudiantes seleccionen un libro de acuerdo con sus intereses, ' +
          'siempre con la aprobación del profesor.',

          'La evaluación se realizará de forma oral, promoviendo el análisis, ' +
          'la reflexión y el desarrollo de habilidades de comunicación, ' +
          'además de reducir el uso de la inteligencia artificial como ' +
          'sustituto de la lectura.',

          'Con esta reforma buscamos formar lectores más autónomos, críticos ' +
          'y motivados, acercando la lectura a los intereses reales de los ' +
          'alumnos y fortaleciendo una cultura lectora que perdure más allá ' +
          'del colegio.',
        ],
      },
      {
        tipo: 'propuesta',
        nombre: 'Comitivas',
        desde: 'Mar 27', permanente: true,
        detalle:
          'Buscamos fortalecer las comitivas del Centro de Alumnos ' +
          'entregándoles una organización clara, funciones definidas y ' +
          'proyectos propios. Así, más estudiantes podrán participar ' +
          'activamente, desarrollar habilidades de liderazgo y trabajo en ' +
          'equipo, y contribuir de manera concreta a la vida escolar.',
      },
      {
        tipo: 'propuesta',
        nombre: 'ADN',
        desde: 'Mar 27', permanente: true,
        detalle:
          'ADN transforma la hora de Consejo de Curso en un espacio para ' +
          'aprender ' +
          'habilidades útiles para la vida. Desde 3° Básico hasta 4° Medio, ' +
          'los alumnos desarrollarán herramientas prácticas que los preparen ' +
          'para enfrentar con autonomía, responsabilidad y confianza los ' +
          'desafíos del futuro.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Paseos Culturales',
        desde: 'Mar 27', hasta: 'Oct 27',
        detalle:
          'Los Paseos Culturales no deberían ser una actividad que ocurre una ' +
          'vez y desaparece. Queremos recuperarlos y convertirlos en una ' +
          'experiencia mensual, donde nosotros mismos podamos elegir a dónde ' +
          'ir y qué conocer. Desde lugares históricos y artísticos hasta ' +
          'expresiones de la cultura popular, cada salida será una ' +
          'oportunidad para salir de la rutina, compartir con otros cursos y ' +
          'descubrir algo nuevo. Y para cerrar el año, quienes más participen ' +
          'podrán vivir una experiencia especial en el Teatro Municipal.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Wickso Liga',
        desde: 'Abr 27', hasta: 'May 27', grupo: 'wickso',
        detalle: [
          'Proponemos una Copa Wickso anual con un campeonato de liga en el ' +
          'primer semestre y playoffs en el segundo, finalizando con una Gran ' +
          'Final que defina al campeón absoluto.',

          'Además, cada equipo podrá diseñar su propia camiseta, ' +
          'fortaleciendo la identidad, la participación y el sentido de ' +
          'pertenencia.',
        ],
      },
      {
        tipo: 'propuesta',
        nombre: 'Noche Verde 1',
        desde: 'May 27', grupo: 'noche-verde',
        detalle:
          'La Noche Verde busca recuperar y fortalecer el espíritu de la ' +
          'barra verbita, transformándola en un espacio de unión, identidad y ' +
          'apoyo hacia nuestros atletas. A través de una jornada previa al ' +
          'interescolar con actividades, música, invitados y un banderazo ' +
          'final, queremos revivir una tradición basada en el orgullo, el ' +
          'respeto y la sana competencia, representando lo que significa ser ' +
          'Verbita.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Semana Social',
        desde: 'May 27',
        detalle:
          'Semana Social busca que los estudiantes salgan de su realidad ' +
          'cotidiana y conozcan distintas realidades de nuestro país, ' +
          'superando la llamada “burbuja social” en la que muchas veces ' +
          'vivimos. A través de experiencias de servicio y contacto directo ' +
          'con otras comunidades, alumnos de 2° y 3° medio podrán poner sus ' +
          'talentos al servicio de los demás, fortaleciendo la empatía, la ' +
          'conciencia social y el compromiso de ser agentes de cambio desde ' +
          'los valores del Verbo Divino.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Más que un Saludo',
        desde: 'Jun 27',
        detalle:
          'Más que un Saludo busca fortalecer los vínculos dentro de la ' +
          'comunidad escolar, generando un espacio donde alumnos y ' +
          'funcionarios puedan conocerse más allá de sus roles habituales. A ' +
          'través del deporte, juegos y actividades compartidas, el proyecto ' +
          'promueve el respeto, la cercanía y el sentido de pertenencia, ' +
          'reconociendo el aporte de cada persona que forma parte del Verbo ' +
          'Divino.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Wickso Playoffs',
        desde: 'Jul 27', hasta: 'Ago 27', grupo: 'wickso',
        detalle: [
          'Proponemos una Copa Wickso anual con un campeonato de liga en el ' +
          'primer semestre y playoffs en el segundo, finalizando con una Gran ' +
          'Final que defina al campeón absoluto.',

          'Además, cada equipo podrá diseñar su propia camiseta, ' +
          'fortaleciendo la identidad, la participación y el sentido de ' +
          'pertenencia.',
        ],
      },
      {
        tipo: 'propuesta',
        nombre: 'Noche Verde 2',
        desde: 'Oct 27', grupo: 'noche-verde',
        detalle:
          'La Noche Verde busca recuperar y fortalecer el espíritu de la ' +
          'barra verbita, transformándola en un espacio de unión, identidad y ' +
          'apoyo hacia nuestros atletas. A través de una jornada previa al ' +
          'interescolar con actividades, música, invitados y un banderazo ' +
          'final, queremos revivir una tradición basada en el orgullo, el ' +
          'respeto y la sana competencia, representando lo que significa ser ' +
          'Verbita.',
      },

      /* ---------- ACTIVIDADES DEL COLEGIO (verde) ------------------------ */
      { tipo: 'tradicional', nombre: 'Asumimos',              desde: 'Oct 26',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Invierno 26', desde: 'Nov 26', grupo: 'huella',         detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 1',      desde: 'Mar 27', grupo: 'cuenta-publica', detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Verano 27',   desde: 'Mar 27', grupo: 'huella',         detalle: '' },
      { tipo: 'tradicional', nombre: 'La RED',                desde: 'Abr 27', hasta: 'Oct 27', detalle: '' },
      { tipo: 'tradicional', nombre: 'S.M.G',                 desde: 'Abr 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'L. Gante',              desde: 'May 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Interescolar Prep.',    desde: 'May 27', grupo: 'interescolar',   detalle: '' },
      { tipo: 'tradicional', nombre: 'Liga CVD VMA',          desde: 'May 27', hasta: 'Ago 27', detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 2',      desde: 'Jun 27', grupo: 'cuenta-publica', detalle: '' },
      { tipo: 'tradicional', nombre: 'Perspectivas Cruzadas', desde: 'Jul 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Alcantarilla',          desde: 'Ago 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Mes de la Cultura',     desde: 'Ago 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Semana Verbita',        desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Alcántara',             desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Semana de Campaña',     desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Cambio de Mando',       desde: 'Oct 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 3',      desde: 'Oct 27', grupo: 'cuenta-publica', detalle: '' },
      { tipo: 'tradicional', nombre: 'Interescolar Final',    desde: 'Oct 27', grupo: 'interescolar',   detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Invierno 27', desde: 'Oct 27', grupo: 'huella',         detalle: '' },
    ],

    /* ======================================================================
       TEXTOS ESCRITOS QUE TODAVÍA NO TIENEN LUGAR EN LA LÍNEA DE TIEMPO

       Estos dos proyectos ya tienen su texto redactado, pero no aparecían en
       la línea de tiempo original, así que falta decidir EN QUÉ MES van.

       👉 Para ponerlos en la página: corta el bloque { ... } que quieras,
          pégalo dentro de la lista "actividades" de arriba, y escríbele el
          mes en "desde" (y "hasta" o "permanente: true" si corresponde).
       ====================================================================== */
    pendientesDeUbicar: [
      {
        tipo: 'propuesta',
        nombre: 'Reciclaje',
        desde: '',   // 👉 FALTA EL MES
        detalle:
          'Queremos que reciclar sea parte de la vida diaria del Verbo. Para ' +
          'ello, instalaremos multicontenedores de reciclaje en puntos ' +
          'estratégicos del colegio, junto con una campaña de educación ' +
          'ambiental para toda la comunidad.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Verbo por el Mundo',
        desde: '',   // 👉 FALTA EL MES
        detalle:
          'Verbo por el Mundo propone una experiencia misionera que ' +
          'permitirá a los estudiantes recorrer distintas comunidades de ' +
          'Chile, viviendo el servicio, la evangelización y el encuentro con ' +
          'otras realidades. Más que un viaje, busca fortalecer la fe, el ' +
          'compromiso con los demás y la identidad verbita, haciendo vida el ' +
          'lema “Salgan al Mundo”.',
      },
    ],
  },

  /* ---- LLAMADO A LA ACCIÓN AL FINAL DE LA SECCIÓN ------------------------
     Quitado: la sección termina en la línea de tiempo.

     Si algún día quieres volver a mostrar el recuadro del final, cambia el
     null de abajo por un bloque con este formato:

       cta: {
         texto: '¿Tienes una idea para la comunidad?',
         boton: { texto: 'Preséntala al CAA', url: '#contacto' },
       },                                                                     */
  cta: null,
};
