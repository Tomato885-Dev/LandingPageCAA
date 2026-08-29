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

  /* ---- LOS DOS BLOQUES PRINCIPALES ---------------------------------------
     Cada bloque tiene tres partes:

     • texto    : el primer párrafo. Se ve SIEMPRE.
     • puntos   : las 3 frases con ✓ rojo. Se ven SIEMPRE.
     • masTexto : el resto de los párrafos. Quedan escondidos detrás del
                  enlace "Leer más" y se despliegan hacia abajo, sin mover
                  nada de lo que está arriba.

     👉 Si borras  masTexto  (o lo dejas en  [] ), el enlace "Leer más"
        desaparece solo y la tarjeta queda como antes.
     👉 Para mover un párrafo de "escondido" a "siempre visible", córtalo de
        masTexto y pégalo en texto (o al revés).                               */
  bloques: [
    {
      icono: 'brujula',
      etiqueta: 'Visión',
      titulo: 'Visión',
      texto: 'El Verbo Divino es un colegio con historia, herramientas, ' +
             'tradiciones, espacios y talentos que lo hacen único. Sin ' +
             'embargo, hemos diagnosticado una realidad innegable: gran ' +
             'parte de ese potencial no se está aprovechando de la mejor ' +
             'manera. Observamos a diario cómo el Centro de Alumnos termina ' +
             'concentrado en acumular proyectos, llenar un libro de ideas y ' +
             'responder a un calendario cada vez más cargado, en vez de ' +
             'enfocarse en aquello que realmente puede sostenerse y generar ' +
             'un impacto real en la vida diaria de los estudiantes.',
      puntos: [
        'Muchas ideas sueltas, pocas que se sostienen en el tiempo.',
        'Se mide por promesas, no por lo que realmente se construye.',
        'Falta un liderazgo cercano, realista y con mirada de futuro.',
      ],
      masTexto: [
        'Vemos un colegio lleno de oportunidades, pero con una necesidad ' +
        'urgente: ordenar, priorizar y darle un sentido profundo a lo que ya ' +
        'se hace. Constatamos que no todo cambio nace de inventar algo ' +
        'nuevo; el verdadero avance está en fortalecer lo que ya tiene ' +
        'valor, dar continuidad a los proyectos que funcionan y abrir ' +
        'espacios para que más alumnos puedan participar, liderar y ' +
        'sentirse parte.',

        'Visualizamos un Verbo donde cada alumno se sienta verdaderamente ' +
        'reconocido, escuchado y acompañado. Un colegio donde ser verbita ' +
        'tenga un sentido real en la comunidad, a través del deporte, el ' +
        'arte, el servicio, las tradiciones y la vida escolar diaria. Para ' +
        'que esto sea posible, el CAA debe dejar de medirse por la cantidad ' +
        'de promesas que presenta y empezar a medirse por la calidad, ' +
        'responsabilidad y proyección de lo que logra construir.',

        'Nuestra visión no nace de la improvisación; nace de haber ' +
        'observado de cerca la realidad del colegio y de haber conversado ' +
        'con alumnos, profesores y directivos. Desde esa experiencia, ' +
        'entendemos con claridad que el Verbo no necesita más ideas ' +
        'desconectadas ni proyectos imposibles de sostener, sino una forma ' +
        'distinta de mirar el liderazgo estudiantil: más seria, más ' +
        'cercana, más realista y con mayor mirada a largo plazo.',

        'Aspiramos y proyectamos un Centro de Alumnos que represente con ' +
        'responsabilidad, que impulse lo que ya existe, que potencie al ' +
        'alumno y que contribuya a un Verbo más vivo, más unido y más ' +
        'consciente de su comunidad. Vemos un CAA que le hace honor al ' +
        'Verbita no por prometer más, sino por entender mejor el colegio, ' +
        'ejecutar de una mejor manera todo lo que ya tenemos y proyectar ' +
        'nuestra historia hacia el futuro, asegurando un impacto real para ' +
        'la totalidad del alumnado y las siguientes generaciones.',
      ],
    },
    {
      icono: 'objetivo',
      etiqueta: 'Misión',
      titulo: 'Misión',
      texto: 'Nuestra misión es construir un Centro de Alumnos serio, ' +
             'cercano y responsable, que represente al alumnado desde el ' +
             'conocimiento real de lo que ocurre en el colegio y transforme ' +
             'sus necesidades en acciones concretas, sostenibles y con ' +
             'impacto.',
      puntos: [
        'No sobrecargar el calendario, sino priorizar y ejecutar con responsabilidad.',
        'Impulsar lo que ya funciona, en vez de inventar sin sentido.',
        'Abrir espacios reales para que más alumnos participen y lideren.',
      ],
      masTexto: [
        'No venimos a sobrecargar el calendario ni a llenar un libro de ' +
        'promesas. Venimos a priorizar, ordenar, impulsar y ejecutar con ' +
        'responsabilidad. Queremos desarrollar proyectos realistas, bien ' +
        'planificados y posibles de llevar a cabo, que mejoren la vida ' +
        'escolar diaria y respondan a las verdaderas necesidades de los ' +
        'alumnos.',

        'Buscamos fortalecer lo que el Verbo ya tiene: su historia, sus ' +
        'herramientas, sus talentos, sus tradiciones y aquellos proyectos ' +
        'que han demostrado valor. Creemos que no siempre hay que inventar ' +
        'algo nuevo; muchas veces, el verdadero cambio está en potenciar lo ' +
        'que ya funciona, darle continuidad y convertirlo en una ' +
        'oportunidad real para más estudiantes.',

        'Nuestra misión también es impulsar al alumno como protagonista de ' +
        'la comunidad escolar. Queremos abrir espacios para quienes ya ' +
        'participan, para quienes tienen ideas, para quienes quieren ' +
        'liderar y para quienes todavía no han encontrado dónde ' +
        'desarrollarse.',

        'Trabajaremos con una mirada a largo plazo, entendiendo que hacer ' +
        'honor al Verbita no significa prometer más, sino representar ' +
        'mejor, ejecutar con responsabilidad y dejar una base más sólida ' +
        'para las próximas generaciones.',
      ],
    },
  ],

  /* ---- PILARES (las barras que se despliegan al final de la sección) ------
     Cada pilar es una barra grande. Al pincharla se abre un panel debajo con
     el texto.

     👉 PARA CAMBIAR EL TEXTO DE UN PILAR: edita su campo  texto: . Cada
        párrafo va entre comillas y separado por una coma del siguiente.
        Si un párrafo es largo, se corta en varias líneas con  ' + '  al final
        (fíjate en cómo están escritos los de abajo).
        Si dejas  texto  y  puntos  vacíos, el panel muestra un aviso gris que
        desaparece solo apenas escribas algo.

     • nombre  : el título grande de la barra.
     • bajada  : frase corta que se ve SIEMPRE, aunque el pilar esté cerrado.
     • icono   : nombre de icono (la lista está en src/componentes/ui/Iconos.jsx).
     • texto   : lo que aparece al desplegar. Puede ser una frase suelta entre
                 comillas, o varios párrafos separados por comas dentro de
                 corchetes [ ... ], como están ahora.
     • puntos  : lista de frases cortas con viñeta roja (puede quedar vacía).

     Para agregar un tercer pilar, copia un bloque { ... } completo.            */
  pilares: {
    titulo: 'Pilares',
    lista: [
      {
        nombre: 'Ejecutar',
        bajada: 'Que las ideas pasen del papel a la realidad.',
        icono: 'rayo',
        texto: [
          'Un proyecto no vale por cómo suena, sino por si se puede hacer ' +
          'bien. Por eso, nuestra forma de trabajo estará centrada en ' +
          'planificar, ordenar y cumplir. Queremos propuestas con ' +
          'responsables claros, tiempos realistas y objetivos concretos.',

          'Este pilar busca cambiar la lógica de prometer mucho y concretar ' +
          'poco. Nuestro compromiso es que cada iniciativa tenga una razón, ' +
          'una forma de llevarse a cabo y un resultado visible para los ' +
          'alumnos.',
        ],
        puntos: [],
      },
      {
        nombre: 'Impulsar',
        bajada: 'Activar lo que el Verbo ya tiene y potenciar a quienes lo construyen.',
        icono: 'destello',
        texto: [
          'El colegio ya cuenta con espacios, tradiciones, talentos y ' +
          'proyectos con mucho potencial. Nuestro trabajo no será ' +
          'reemplazarlo todo, sino darle más fuerza a lo que funciona, ' +
          'mejorar lo que puede crecer y abrirlo a más alumnos.',

          'Impulsar significa mover al colegio desde lo que ya existe, pero ' +
          'también desde quienes lo hacen vivir: sus alumnos. Queremos que ' +
          'cada estudiante pueda descubrir sus capacidades, desarrollar sus ' +
          'talentos, proponer ideas y encontrar un espacio real para ' +
          'participar dentro de la comunidad.',

          'Este pilar busca que el CAA no sea solo un grupo que organiza ' +
          'actividades, sino una plataforma que impulse al alumno a liderar, ' +
          'crear, aportar y sentirse parte activa del Verbo.',
        ],
        puntos: [],
      },
    ],
  },
};
