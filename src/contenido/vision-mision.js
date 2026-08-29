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
      texto: 'No venimos a llenar un libro de promesas: venimos a hacer que ' +
             'las cosas pasen. Nuestra misión es construir un CAA serio, ' +
             'cercano y responsable, que escuche al alumno, convierta sus ' +
             'necesidades en acciones concretas y deje una base sólida para ' +
             'quienes vienen después.',
      puntos: [
        'Ejecutar: menos promesas, más acciones concretas.',
        'Representar: escuchar y responder a las necesidades reales.',
        'Proyectar: construir hoy pensando en las próximas generaciones.',
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
