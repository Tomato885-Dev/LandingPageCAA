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
      reforma:     'Reformas',
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
       • tipo       : 'propuesta'   → ROJO         (proyectos nuevos nuestros)
                      'reforma'     → ROJO OSCURO (cambios a algo que ya existe)
                      'tradicional' → VERDE        (lo que el colegio ya hace)
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

      /* ---------- PROYECTOS DE CAMPAÑA Y REFORMAS (rojo) ------------------ */
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
          'Este proyecto implementará un servicio de impresión gestionado ' +
          'por el Centro de Alumnos, permitiendo que todos los estudiantes ' +
          'de 5 EB a 4 EM puedan imprimir material académico de forma ' +
          'simple, ordenada y accesible. Con ello, buscamos reducir las ' +
          'brechas de acceso y asegurar que ningún alumno quede en ' +
          'desventaja por no contar con una impresora.',
      },
      {
        tipo: 'reforma',
        nombre: '¡Elige TÚ Plan Lector!',
        desde: 'Mar 27', permanente: true,
        detalle: [
          'Queremos transformar el Plan Lector para que leer deje de ser ' +
          'una obligación y se convierta en una experiencia significativa. ' +
          'Sin eliminar las lecturas obligatorias, proponemos que una de ' +
          'las lecturas del año sea de libre elección, permitiendo que los ' +
          'estudiantes seleccionen un libro de acuerdo con sus intereses, ' +
          'siempre con la aprobación del profesor.',

          'La evaluación se realizará de forma oral, promoviendo el ' +
          'análisis, la reflexión y el desarrollo de habilidades de ' +
          'comunicación, además de reducir el uso de la inteligencia ' +
          'artificial como sustituto de la lectura.',

          'Con esta reforma buscamos formar lectores más autónomos, ' +
          'críticos y motivados, acercando la lectura a los intereses ' +
          'reales de los alumnos y fortaleciendo una cultura lectora que ' +
          'perdure más allá del colegio.',
        ],
      },
      {
        tipo: 'reforma',
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
        tipo: 'reforma',
        nombre: 'ADN',
        desde: 'Mar 27', permanente: true,
        detalle:
          'ADN transforma la hora de Orientación en un espacio para ' +
          'aprender habilidades útiles para la vida. Desde 3° Básico hasta ' +
          '4° Medio, los alumnos desarrollarán herramientas prácticas que ' +
          'los preparen para enfrentar con autonomía, responsabilidad y ' +
          'confianza los desafíos del futuro.',
      },
      {
        tipo: 'reforma',
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
        tipo: 'reforma',
        nombre: 'Wickso Liga',
        desde: 'Abr 27', hasta: 'May 27', grupo: 'wickso',
        detalle: [
          'Proponemos una Copa Wickso anual con un campeonato de liga en el ' +
          'primer semestre y playoffs en el segundo, finalizando con una ' +
          'Gran Final que defina al campeón absoluto.',

          'Además, cada equipo podrá diseñar su propia camiseta, ' +
          'fortaleciendo la identidad, la participación y el sentido de ' +
          'pertenencia.',
        ],
      },
      {
        tipo: 'propuesta',
        nombre: '1° Noche Verde',
        desde: 'May 27', grupo: 'noche-verde',
        detalle:
          'La Noche Verde busca recuperar y fortalecer el espíritu de la ' +
          'barra verbita, transformándola en un espacio de unión, identidad ' +
          'y apoyo hacia nuestros atletas. A través de una jornada previa ' +
          'al interescolar con actividades, música, invitados y un ' +
          'banderazo final, queremos revivir una tradición basada en el ' +
          'orgullo, el respeto y la sana competencia, representando lo que ' +
          'significa ser Verbita.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Semana Social',
        desde: 'May 27',
        detalle:
          'Esta iniciativa busca que los estudiantes salgan de su realidad ' +
          'cotidiana y conozcan distintas realidades de nuestro país, ' +
          'superando la llamada “burbuja social” en la que muchas veces ' +
          'vivimos. A través de experiencias de servicio y contacto directo ' +
          'con otras comunidades, en trabajos de fábrica, alumnos de 2° y ' +
          '3° medio podrán poner sus talentos al servicio de los demás, ' +
          'fortaleciendo la empatía, la conciencia social y el compromiso ' +
          'de ser agentes de cambio desde los valores del Verbo Divino.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Más que un Saludo',
        desde: 'Jun 27',
        detalle:
          'Más que un Saludo busca fortalecer los vínculos dentro de la ' +
          'comunidad escolar, generando un espacio donde alumnos y ' +
          'funcionarios puedan conocerse más allá de sus roles habituales. ' +
          'A través del deporte, juegos y actividades compartidas, el ' +
          'proyecto promueve el respeto, la cercanía y el sentido de ' +
          'pertenencia, reconociendo el aporte de cada persona que forma ' +
          'parte del Verbo Divino.',
      },
      {
        tipo: 'reforma',
        nombre: 'Wickso Playoffs',
        desde: 'Jul 27', hasta: 'Ago 27', grupo: 'wickso',
        detalle: [
          'Proponemos una Copa Wickso anual con un campeonato de liga en el ' +
          'primer semestre y playoffs en el segundo, finalizando con una ' +
          'Gran Final que defina al campeón absoluto.',

          'Además, cada equipo podrá diseñar su propia camiseta, ' +
          'fortaleciendo la identidad, la participación y el sentido de ' +
          'pertenencia.',
        ],
      },
      {
        tipo: 'propuesta',
        nombre: '2° Noche Verde',
        desde: 'Oct 27', grupo: 'noche-verde',
        detalle:
          'La Noche Verde busca recuperar y fortalecer el espíritu de la ' +
          'barra verbita, transformándola en un espacio de unión, identidad ' +
          'y apoyo hacia nuestros atletas. A través de una jornada previa ' +
          'al interescolar con actividades, música, invitados y un ' +
          'banderazo final, queremos revivir una tradición basada en el ' +
          'orgullo, el respeto y la sana competencia, representando lo que ' +
          'significa ser Verbita.',
      },

      /* ---------- ACTIVIDADES DEL COLEGIO (verde) ------------------------ */
      {
        tipo: 'tradicional',
        nombre: 'Huella de Primavera ’26',
        desde: 'Nov 26', grupo: 'huella',
        detalle: [
          'Segunda edición del 2026 de una de las fiestas más icónicas del ' +
          'Colegio, en que alrededor de 2.000 estudiantes de 7°EB, 8°EB y ' +
          '1°EM de todo Santiago se reúnen en el patio central para bailar ' +
          'y disfrutar de la música. Lo recaudado ayuda a financiar otros ' +
          'proyectos del CAA.',

          'Esta edición fue organizada por el CAA anterior, pero por temas ' +
          'de tiempos será el nuevo CAA quien la lleve a cabo.',
        ],
      },
      {
        tipo: 'tradicional',
        nombre: '1° Cuenta Pública',
        desde: 'Mar 27', grupo: 'cuenta-publica',
        detalle:
          'Instancia en la que el CAA informa a la comunidad sobre los ' +
          'ingresos y gastos realizados entre octubre y marzo. Además, se ' +
          'responden las preguntas de los estudiantes, promoviendo la ' +
          'transparencia y el buen uso de los recursos.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Huella de Verano ’27',
        desde: 'Mar 27', grupo: 'huella',
        detalle:
          'Primera edición del 2027 de una de las fiestas más icónicas del ' +
          'Colegio, en que alrededor de 2.000 estudiantes de 7°EB, 8°EB y ' +
          '1°EM de todo Santiago se reúnen en el patio central para bailar ' +
          'y disfrutar de la música. Lo recaudado ayuda a financiar otros ' +
          'proyectos del CAA.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Partido Auxiliares v/s CAA',
        desde: 'Mar 27',
        detalle:
          'Tradicional encuentro de fútbol entre los 12 integrantes del CAA ' +
          'y 11 auxiliares del Colegio, disputado en la cancha de pasto. ' +
          'Más que una competencia, busca generar un espacio de convivencia ' +
          'y reconocer el importante trabajo que realizan los auxiliares ' +
          'dentro de la comunidad escolar.',
      },
      {
        tipo: 'tradicional',
        nombre: 'La RED',
        desde: 'Abr 27', hasta: 'Oct 27',
        detalle:
          'Espacio de encuentro entre distintos Centros de Alumnos de ' +
          'colegios de Santiago. En estas reuniones se comparten ideas, ' +
          'experiencias y proyectos, además de conversar sobre temas ' +
          'comunes a la labor de cada equipo.',
      },
      {
        tipo: 'tradicional',
        nombre: 'S. M. G',
        desde: 'Abr 27',
        detalle:
          'Los Social Meeting Games son alianzas organizadas junto al VMA ' +
          'durante el primer semestre. En ellas, estudiantes de 3°EM y 4°EM ' +
          'compiten en distintas pruebas y van sumando puntos para sus ' +
          'alianzas, que buscan quedarse con el premio final.',
      },
      {
        tipo: 'tradicional',
        nombre: 'L Gante',
        desde: 'May 27',
        detalle:
          'Sexta edición de la gala dirigida a estudiantes de 3°EM y 4°EM. ' +
          'El CAA se encarga de organizar la instalación de carritos de ' +
          'comida y una pista de baile, creando un espacio de celebración ' +
          'para los estudiantes y sus parejas.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Interescolar Preparatorio',
        desde: 'May 27', grupo: 'interescolar',
        detalle:
          'Primera fase de la competencia de atletismo más importante de ' +
          'Chile, desarrollada durante el primer semestre. En ella, los ' +
          'atletas ponen a prueba el trabajo realizado durante su ' +
          'pretemporada y buscan posicionar al colegio de cara a la etapa ' +
          'final. Además, es una instancia en la que la barra acompaña al ' +
          'equipo con banderazos y el retomado baile de presentación.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Liga CVD VMA',
        desde: 'May 27', hasta: 'Ago 27',
        detalle:
          'Liga de fútbol organizada en conjunto con las alumnas del Villa ' +
          'María Academy, que cuenta con tres años de trayectoria. Durante ' +
          'tres meses, equipos de ambos colegios forman alianzas y compiten ' +
          'semanalmente en las canchas sintéticas del CVD. Al finalizar la ' +
          'temporada, se define un equipo ganador de cada colegio.',
      },
      {
        tipo: 'tradicional',
        nombre: '2° Cuenta Pública',
        desde: 'Jun 27', grupo: 'cuenta-publica',
        detalle:
          'Segunda instancia anual de rendición de cuentas, en la que el ' +
          'CAA presenta a la comunidad los movimientos de dinero realizados ' +
          'entre marzo y junio y responde las dudas de los estudiantes.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Perspectivas Cruzadas',
        desde: 'Jul 27',
        detalle:
          'Espacio organizado en conjunto por los Centros de Alumnos del ' +
          'CVD y del VMA. En él, alumnas de 1°EM y alumnos de 2°EM ' +
          'conversan y comparten sus puntos de vista sobre temas relevantes ' +
          'para su edad, como el consumo de alcohol y las relaciones entre ' +
          'hombres y mujeres.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Alcantarilla',
        desde: 'Ago 27',
        detalle:
          'Competencia musical en la que participan estudiantes y ' +
          'agrupaciones del Colegio. Los ganadores obtienen un cupo para ' +
          'presentarse en el Alcántara, uno de los principales eventos ' +
          'musicales del Colegio.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Mes de la Cultura',
        desde: 'Ago 27',
        detalle:
          'Antes conocido como Semana de la Cultura, es un mes completo ' +
          'dedicado a actividades y charlas culturales organizadas por el ' +
          'CAA. Su objetivo es acercar a los estudiantes a distintas ' +
          'disciplinas, no solo a través de charlas, sino también mediante ' +
          'experiencias prácticas, como la creación de murales y encuentros ' +
          'con figuras destacadas de la política, la arquitectura y el ' +
          'arte, entre otros.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Semana Verbita',
        desde: 'Sep 27',
        detalle:
          'Semana previa a Fiestas Patrias en la que se suspenden las ' +
          'clases regulares y los estudiantes se organizan por generaciones ' +
          'y letras en torno a una temática común. Durante la semana, las ' +
          'alianzas compiten en distintas actividades deportivas y ' +
          'culturales hasta definir a una ganadora.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Alcántara',
        desde: 'Sep 27',
        detalle:
          'Evento musical emblemático del Colegio, con más de 40 años de ' +
          'historia. Reúne a las agrupaciones musicales del CVD, incluyendo ' +
          'a los ganadores de Alcantarilla, junto a artistas invitados ' +
          'externos. El resultado es un concierto abierto a toda la ' +
          'comunidad estudiantil, con una asistencia aproximada de 3.000 ' +
          'personas.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Semana de Campaña',
        desde: 'Sep 27',
        detalle:
          'Período en que se lleva a cabo la elección del nuevo Centro de ' +
          'Alumnos. Durante tres días, las distintas candidaturas presentan ' +
          'sus propuestas y su visión para el Colegio. Al finalizar la ' +
          'semana, los estudiantes de 8°EB a 4°EM votan para elegir a sus ' +
          'nuevos representantes.',
      },
      {
        tipo: 'tradicional',
        nombre: '3° Cuenta Pública',
        desde: 'Oct 27', grupo: 'cuenta-publica',
        detalle:
          'Tercera y última instancia anual de rendición de cuentas. En ' +
          'ella, el CAA informa sobre los movimientos de dinero realizados ' +
          'entre junio y octubre y responde las preguntas de los ' +
          'estudiantes.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Interescolar Final',
        desde: 'Oct 27', grupo: 'interescolar',
        detalle:
          'Segunda y última fase del Interescolar de Atletismo, en la que ' +
          'se define al campeón del año. Durante la competencia, la barra ' +
          'acompaña a los atletas con cánticos, banderas y otras ' +
          'actividades hasta el cierre de la temporada.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Huella de Invierno ’27',
        desde: 'Oct 27', grupo: 'huella',
        detalle:
          'Segunda edición del 2027 de una de las fiestas más icónicas del ' +
          'Colegio, en que alrededor de 2.000 estudiantes de 7°EB, 8°EB y ' +
          '1°EM de todo Santiago se reúnen en el patio central para bailar ' +
          'y disfrutar de la música. Lo recaudado ayuda a financiar otros ' +
          'proyectos del CAA.',
      },
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
        tipo: 'reforma',
        nombre: 'Reciclaje CVD',
        desde: '',   // 👉 FALTA EL MES
        detalle:
          'Queremos que reciclar sea parte de la vida diaria del Verbo. ' +
          'Para ello, instalaremos multicontenedores de reciclaje en puntos ' +
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
          'Chile, viviendo el servicio, la evangelización y el encuentro ' +
          'con otras realidades. Más que un viaje, busca fortalecer la fe, ' +
          'el compromiso con los demás y la identidad verbita, haciendo ' +
          'vida el lema “Salgan al Mundo”.',
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
