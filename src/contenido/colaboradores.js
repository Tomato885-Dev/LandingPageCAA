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
  titulo: ['Colaboradores'],
  intro: 'Organizaciones, institutos y personas que contribuyen a la campaña, ' +
         'no solo mediante beneficios para el alumnado, sino también a través ' +
         'de colaboraciones concretas para llevar a cabo los proyectos.',

  /* ------------------------------------------------------------------------
     LOS AUSPICIOS

     El orden de esta lista es el orden en que aparecen en la página.
     Para mover uno de lugar, corta su línea y pégala donde corresponda.

     CAMPOS DE CADA UNO
     • nombre  : el texto que se muestra debajo de la imagen
     • logo    : ruta del archivo. Ya están escritas: solo hay que subir cada
                 imagen a  assets/logos/  con ese mismo nombre de archivo.
                 Mientras no esté subida, el recuadro muestra el marcador
                 "Agrega aquí el logo" y la página no se rompe.
     • detalle : 👉 EN QUÉ CONSISTE EL BENEFICIO. Es el texto que lee la gente
                 al pinchar la casilla.

                 IMPORTANTE: la casilla solo se puede pinchar cuando este
                 campo tiene algo escrito. Mientras esté en '' se ve igual
                 que siempre, pero no abre nada — así nadie pincha y se
                 queda mirando un cuadro en blanco. Apenas escribas el texto
                 aparece una flechita al lado del nombre y empieza a
                 funcionar solo.

                 Si el texto es largo y quieres separarlo en párrafos, en vez
                 de un texto suelto escribe una lista:

                     detalle: [
                       'Primer párrafo.',
                       'Segundo párrafo.',
                     ],

     • url     : sitio web de la marca. Si lo escribes, dentro del cuadro
                 aparece un botón "Ir al sitio" que se abre en otra pestaña.
                 Déjalo en '' si no tiene.
     • tipo    : 👉 EL BENEFICIO EN CORTO. Es la línea chica que va bajo el
                 nombre, y se lee SIN tener que pinchar nada: '20% de
                 descuento', 'Colaboración'. Es lo primero que mira la gente,
                 así que conviene tenerlo siempre puesto.

                 Si todavía no está confirmado, déjalo fuera: mejor que no
                 diga nada a que prometa un descuento equivocado.
     ------------------------------------------------------------------------ */
  colaboradores: [
    {
      nombre: 'Dimacofi',
      logo: 'assets/logos/dimacofi.png',
      url: '',
      tipo: 'Colaboración',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Starbucks',
      logo: 'assets/logos/starbucks.png',
      url: '',
      tipo: 'Colaboración',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Just Burger',
      logo: 'assets/logos/just-burger.png',
      url: '',
      tipo: '30% de descuento',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'FEN',
      logo: 'assets/logos/fen.png',
      url: '',
      tipo: 'Colaboración',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Preuniversitario Gauss',
      logo: 'assets/logos/preuniversitario-gauss.png',
      url: '',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Açai',
      logo: 'assets/logos/acai.png',
      url: '',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Gnomo',
      logo: 'assets/logos/gnomo.png',
      url: '',
      tipo: '10% de descuento adicional',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'AndPag',
      logo: 'assets/logos/andpag.png',
      url: '',
      tipo: '20% de descuento',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Elite',
      logo: 'assets/logos/elite.png',
      url: '',
      tipo: '20% de descuento',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Andesgear',
      logo: 'assets/logos/andesgear.png',
      url: '',
      tipo: 'Colaboración',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Aprende +',
      logo: 'assets/logos/aprende-mas.png',
      url: '',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Preu Filadd',
      logo: 'assets/logos/preu-filadd.png',
      url: '',
      tipo: '20% de descuento',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'Forus: Brands & Retail',
      logo: 'assets/logos/forus.png',
      url: '',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'CCU',
      logo: 'assets/logos/ccu.png',
      url: '',
      tipo: 'Colaboración',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
    {
      nombre: 'School of Rock',
      logo: 'assets/logos/school-of-rock.png',
      url: '',
      detalle: '',   // 👉 EN QUÉ CONSISTE EL BENEFICIO
    },
  ],

  /* ---- INVITACIÓN A COLABORAR -------------------------------------------
     Quitada: la sección termina en la última fila de auspicios.

     Si algún día quieres volver a mostrar el recuadro de invitación, cambia
     el null de abajo por un bloque con este formato:

       cta: {
         texto: '¿Tu organización quiere colaborar con el CAA?',
         boton: { texto: 'Escríbenos', url: 'mailto:contacto@caa.cl' },
       },                                                                       */
  cta: null,
};
