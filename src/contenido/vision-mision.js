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

     👉 PARA ESCRIBIR EL TEXTO DE UN PILAR: rellena su campo  texto:  y, si
        quieres, agrega frases sueltas dentro de  puntos: [ ... ].
        Mientras estén vacíos, el panel muestra un aviso gris recordando que
        falta llenarlo (ese aviso desaparece solo apenas escribas algo).

     • nombre  : el título grande de la barra.
     • bajada  : frase corta que se ve SIEMPRE, aunque el pilar esté cerrado.
     • icono   : nombre de icono (la lista está en src/componentes/ui/Iconos.jsx).
     • texto   : el párrafo que aparece al desplegar.
     • puntos  : lista de frases cortas con viñeta roja (puede quedar vacía).

     Para agregar un tercer pilar, copia un bloque { ... } completo.            */
  pilares: {
    titulo: 'Pilares',
    lista: [
      {
        nombre: 'Ejecutar',
        bajada: '',
        icono: 'rayo',
        texto: '',
        puntos: [],
      },
      {
        nombre: 'Impulsar',
        bajada: '',
        icono: 'destello',
        texto: '',
        puntos: [],
      },
    ],
  },
};
