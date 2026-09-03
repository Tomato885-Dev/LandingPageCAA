/* ============================================================================
   nosotros.js — SECCIÓN 2: ¿QUIÉNES SOMOS?
   ============================================================================ */

window.CONTENIDO_NOSOTROS = {

  /* ---- FONDO DE LA SECCIÓN ---------------------------------------------- */
  fondo: {
    video: 'assets/video/nosotros.mp4',   // 👉 VIDEO de esta sección
    imagen: '',                     // 👉 IMAGEN alternativa
  },

  /* ---- ENCABEZADO -------------------------------------------------------- */
  kicker: '// ¿Quiénes somos?',  // texto chico sobre el título
  titulo: ['Experiencia', 'que nos une'], // cada elemento es una línea
  /* ---- TEXTO DE INTRODUCCIÓN ---------------------------------------------
     Como el texto es largo, se muestra en tres partes:

     • intro    → los primeros párrafos. SE VEN SIEMPRE.
     • introMas → el resto. Queda detrás del enlace "Leer más" y se despliega
                  hacia abajo, sin mover nada de lo que está arriba.
     • cierre   → la frase final, destacada con una línea roja al costado.
                  SE VE SIEMPRE, esté abierto o cerrado.

     👉 Para mover un párrafo de escondido a siempre visible, córtalo de
        introMas y pégalo al final de intro (o al revés).
     👉 Si dejas  introMas: []  , el enlace "Leer más" desaparece solo.        */
  intro: [
    'La pregunta que más se repite durante esta semana de campaña es: ' +
    '¿Por qué votar por ustedes?',

    'Nuestra respuesta no se fundamenta solamente en que dejamos de lado las ' +
    'ideas escritas en papel, y venimos con proyectos claros y medidas ' +
    'concretas para solucionar los problemas reales de todo el alumnado del ' +
    'colegio. Se basa en que somos un equipo con experiencia, que conoce el ' +
    'colegio y que ya ha demostrado que sabe llevar proyectos adelante.',
  ],

  introMas: [
    'Hemos liderado proyectos sociales como Plantemos Juntos, Trabajos ' +
    'Verbitas, ALXV y Misiones, donde hemos tenido que organizar, escuchar, ' +
    'coordinar y movilizar a otros, logrando una gestión destacada. Hemos ' +
    'sido capitanes de selección, aprendiendo a liderar equipos, motivar y ' +
    'trabajar por un objetivo común. También hemos participado en la ' +
    'organización del Alcántara, consiguiendo auspicios y colaboradores para ' +
    'hacer realidad distintos proyectos.',

    'Hemos sido presidentes de curso, estando cerca de los alumnos y ' +
    'liderando actividades de la vida cotidiana, como pichangas o juntadas ' +
    'de completos. También hemos sido parte del Tribunal de Honor, donde ' +
    'hemos demostrado nuestro compromiso con la transparencia, la ' +
    'responsabilidad y el cumplimiento de las normas.',

    'Todo esto demuestra que durante este tiempo no solo hemos trabajado ' +
    'para impulsar al alumnado y crear proyectos que generen un impacto ' +
    'real, sino que también hemos desarrollado las habilidades necesarias ' +
    'para llevar adelante una gestión seria, responsable y cercana.',
  ],

  cierre: 'Por eso queremos ser tu CAA: porque no venimos a aprender a ' +
          'gestionar, venimos a poner nuestra experiencia al servicio del Verbo.',

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
     Al pinchar cualquier recuadro se abre un cuadro con la foto más grande y,
     debajo, el currículum del integrante.

     CAMPOS DE CADA UNO

     • nombre : cómo aparece en el recuadro y arriba del cuadro.
     • foto   : ruta del archivo (ver más abajo).
     • cargo  : su curso, por ejemplo '3°A'. Sale chiquitito debajo del nombre,
                tanto en el recuadro como en el cuadro. Déjalo en '' si no
                quieres mostrarlo.
     • logros : SU CURRÍCULUM. Es una lista: cada línea sale como un punto
                con una bolita roja. Este es el formato:

                  logros: [
                    'Presidente de curso durante 5 años.',
                    'Organizador del Festival Alcántara 2026.',
                    'Jefe de Barra durante 2 años seguidos.',
                  ],

                👉 Para agregar un punto: escribe una línea nueva entre
                   comillas y termínala con una coma.
                👉 Para quitarlo: borra su línea completa.

     • info   : OPCIONAL. Un párrafo suelto que va ANTES de la lista, por si
                quieres una presentación en prosa. Puede ser una frase entre
                comillas o varios párrafos entre corchetes:

                  info: ['Primer párrafo.', 'Segundo párrafo.'],

     Mientras "logros" e "info" estén vacíos, el cuadro muestra un aviso gris
     que desaparece solo apenas escribas algo.

     👉 FOTOS: sube las 7 imágenes a la carpeta  assets/img/equipo/  con los
        nombres de archivo que ya están escritos abajo (carlos-gomez.jpg,
        tomas-leon.jpg, y así). No hace falta cambiar nada más aquí.
        Mientras una foto no esté subida, ese recuadro muestra el marcador
        "Foto del integrante" y la página no se rompe.

     Para agregar o quitar a alguien, copia o borra un bloque { ... } completo.
     El diseño se reacomoda solo, sean 4, 7 u 11 integrantes.                   */
  equipo: {
    titulo: 'Nuestro núcleo',
    integrantes: [
      {
        nombre: 'Carlos Gómez',
        foto: 'assets/img/equipo/carlos-gomez.jpg',
        cargo: '',   // 👉 su curso, por ejemplo '3°A'
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [],   // 👉 ESCRIBE AQUÍ su currículum, un punto por línea
      },
      {
        nombre: 'Tomás León',
        foto: 'assets/img/equipo/tomas-leon.jpg',
        cargo: '',   // 👉 su curso, por ejemplo '3°A'
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [],   // 👉 ESCRIBE AQUÍ su currículum, un punto por línea
      },
      {
        nombre: 'Juan Casanova',
        foto: 'assets/img/equipo/juan-casanova.jpg',
        cargo: '3°A',
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [
          'Participante de las campañas ganadoras durante 3 años ' +
          'seguidos.',
          'Presidente de curso durante 5 años y miembro de la directiva ' +
          'otros 2 años.',
          'Organizador del Festival Alcántara 2026.',
          'Jefe de Barra durante 2 años seguidos.',
          'Miembro de la Selección de fútbol durante 8 años.',
          'Organizador CVD VMA 2024.',
          'Organización Podcast 2025.',
          'Organizador de la Copa Wickso 2025.',
        ],
      },
      {
        nombre: 'Emilio Bascuñán',
        foto: 'assets/img/equipo/emilio-bascunan.jpg',
        cargo: '',   // 👉 su curso, por ejemplo '3°A'
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [],   // 👉 ESCRIBE AQUÍ su currículum, un punto por línea
      },
      {
        nombre: 'Vicente Donoso',
        foto: 'assets/img/equipo/vicente-donoso.jpg',
        cargo: '3°B',
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [
          'Presidente de curso en dos ocasiones, incluyendo el actual ' +
          '3°B.',
          'Miembro del equipo de Atletismo.',
          'Ex miembro de equipo de basquetbol (durante 5 años).',
          'Miembro del equipo de debate en inglés.',
          'Organizador Semana Verbita 2026.',
          'Presidente del Tribunal de Honor 2026.',
        ],
      },
      {
        nombre: 'Tomás Del Valle',
        foto: 'assets/img/equipo/tomas-del-valle.jpg',
        cargo: '3°E',
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [
          'Miembro de la directiva durante 5 años.',
          'Líder de Trabajos Verbitas 2025.',
          'Fundador y Ex presidente del Hub de Ciencia 2025.',
          'Líder de Plantemos Juntos 2026.',
          'Líder de Limpieza de Playa 2026.',
          'Líder de Misiones Verbitas 2026.',
          'Ex miembro de la Orquesta del colegio.',
          'Organizador Semana Verbita 2026.',
        ],
      },
      {
        nombre: 'Nicolás Velasco',
        foto: 'assets/img/equipo/nicolas-velasco.jpg',
        cargo: '3°E',
        info: '',   // 👉 un párrafo suelto, si quieres (opcional)
        logros: [
          'Delegado de Pastoral durante 8 años.',
          'Líder de Arte por la Vida 2025.',
          'Líder de la Pelota No Se Mancha 2025.',
          'Líder de Misiones Verbitas 2026.',
          'Líder de Plantemos Juntos 2026.',
          'Líder de Limpieza de Playa 2026.',
          'Miembro del Equipo Convivencia 2026.',
          'Organizador Oraciones de las Mañanas 2026.',
        ],
      },
    ],
  },
};
