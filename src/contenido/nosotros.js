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
  kicker: '// ¿Por qué nosotros?',  // texto chico sobre el título
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
     Cada integrante lleva solo NOMBRE y FOTO.

     👉 FOTOS: sube las 7 imágenes a la carpeta  assets/img/equipo/  con los
        nombres de archivo que ya están escritos abajo (carlos-gomez.jpg,
        tomas-leon.jpg, y así). No hace falta cambiar nada más aquí.
        Mientras una foto no esté subida, ese recuadro muestra el marcador
        "Foto del integrante" y la página no se rompe.

     👉 INFORMACIÓN DE CADA UNO: al pinchar una foto se abre un cuadro con la
        foto más grande y, debajo, el texto del campo "info". Puede ser una
        frase entre comillas o varios párrafos entre corchetes:

          info: [
            'Primer párrafo.',

            'Segundo párrafo.',
          ],

        Mientras esté vacío, el cuadro muestra un aviso gris que desaparece
        solo apenas escribas algo.

     Para agregar o quitar a alguien, copia o borra una línea { ... } completa.
     El diseño se reacomoda solo, sean 4, 7 u 11 integrantes.                   */
  equipo: {
    titulo: 'Nuestro núcleo',
    integrantes: [
      {
        nombre: 'Carlos Gómez',
        foto: 'assets/img/equipo/carlos-gomez.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Tomás León',
        foto: 'assets/img/equipo/tomas-leon.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Juan Casanova',
        foto: 'assets/img/equipo/juan-casanova.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Emilio Bascuñán',
        foto: 'assets/img/equipo/emilio-bascunan.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Vicente Donoso',
        foto: 'assets/img/equipo/vicente-donoso.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Tomás Del Valle',
        foto: 'assets/img/equipo/tomas-del-valle.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
      {
        nombre: 'Nicolás Velasco',
        foto: 'assets/img/equipo/nicolas-velasco.jpg',
        info: '',   // 👉 ESCRIBE AQUÍ su información
      },
    ],
  },
};
