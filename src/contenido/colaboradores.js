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
     • nombre : el texto que se muestra debajo de la imagen
     • logo   : ruta del archivo. Ya están escritas: solo hay que subir cada
                imagen a  assets/logos/  con ese mismo nombre de archivo.
                Mientras no esté subida, el recuadro muestra el marcador
                "Agrega aquí el logo" y la página no se rompe.
     • url    : sitio web de la marca. Si lo escribes, la casilla se vuelve un
                enlace que se abre en otra pestaña. Déjalo en '' si no tiene.
     ------------------------------------------------------------------------ */
  colaboradores: [
    { nombre: 'Burger King',            logo: 'assets/logos/burger-king.png', url: '' },
    { nombre: 'Starbucks',              logo: 'assets/logos/starbucks.png', url: '' },
    { nombre: 'Just Burger',            logo: 'assets/logos/just-burger.png', url: '' },
    { nombre: 'FEN',                    logo: 'assets/logos/fen.png', url: '' },
    { nombre: 'Preuniversitario Gauss', logo: 'assets/logos/preuniversitario-gauss.png', url: '' },
    { nombre: 'Açai',                   logo: 'assets/logos/acai.png', url: '' },
    { nombre: 'Gnomo',                  logo: 'assets/logos/gnomo.png', url: '' },
    { nombre: 'AndPag',                 logo: 'assets/logos/andpag.png', url: '' },
    { nombre: 'Elite',                  logo: 'assets/logos/elite.png', url: '' },
    { nombre: 'Andesgear',              logo: 'assets/logos/andesgear.png', url: '' },
    { nombre: 'Aprende +',              logo: 'assets/logos/aprende-mas.png', url: '' },
    { nombre: 'Preu Filadd',            logo: 'assets/logos/preu-filadd.png', url: '' },
    { nombre: 'Forus: Brands & Retail', logo: 'assets/logos/forus.png', url: '' },
    { nombre: 'CCU',                    logo: 'assets/logos/ccu.png', url: '' },
    { nombre: 'School of Rock',         logo: 'assets/logos/school-of-rock.png', url: '' },
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
