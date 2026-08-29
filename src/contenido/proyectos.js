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
  titulo: ['Línea de tiempo', 'del mandato'],
  intro: 'Pincha cualquier actividad para ver su detalle.',

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
      propuesta:   'Proyectos CAA (nuevos)',
      tradicional: 'Otras actividades (eventos, deportivo, cultura, elecciones, cuentas públicas)',
    },

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
      { tipo: 'propuesta', nombre: 'CAA 911',            desde: 'Oct 26', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'App CAA',            desde: 'Oct 26', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'Imprime al Toque',   desde: 'Nov 26', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'Plan Lector',        desde: 'Mar 27', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'Comitivas',          desde: 'Mar 27', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'ADN',                desde: 'Mar 27', permanente: true,  detalle: '' },
      { tipo: 'propuesta', nombre: 'Paseos Culturales',  desde: 'Mar 27', hasta: 'Oct 27',   detalle: '' },
      { tipo: 'propuesta', nombre: 'Wickso Liga',        desde: 'Abr 27', hasta: 'May 27',   detalle: '' },
      { tipo: 'propuesta', nombre: 'Noche Verde 1',      desde: 'May 27',                    detalle: '' },
      { tipo: 'propuesta', nombre: 'Semana Social',      desde: 'May 27',                    detalle: '' },
      { tipo: 'propuesta', nombre: 'Más que un Saludo',  desde: 'Jun 27',                    detalle: '' },
      { tipo: 'propuesta', nombre: 'Wickso Playoffs',    desde: 'Jul 27', hasta: 'Ago 27',   detalle: '' },
      { tipo: 'propuesta', nombre: 'Noche Verde 2',      desde: 'Oct 27',                    detalle: '' },

      /* ---------- ACTIVIDADES DEL COLEGIO (verde) ------------------------ */
      { tipo: 'tradicional', nombre: 'Asumimos',              desde: 'Oct 26',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Invierno 26', desde: 'Nov 26',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 1',      desde: 'Mar 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Verano 27',   desde: 'Mar 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'La RED',                desde: 'Abr 27', hasta: 'Oct 27', detalle: '' },
      { tipo: 'tradicional', nombre: 'S.M.G',                 desde: 'Abr 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'L. Gante',              desde: 'May 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Interescolar Prep.',    desde: 'May 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Liga CVD VMA',          desde: 'May 27', hasta: 'Ago 27', detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 2',      desde: 'Jun 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Perspectivas Cruzadas', desde: 'Jul 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Alcantarilla',          desde: 'Ago 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Mes de la Cultura',     desde: 'Ago 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Semana Verbita',        desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Alcántara',             desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Semana de Campaña',     desde: 'Sep 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Cambio de Mando',       desde: 'Oct 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Cuenta Pública 3',      desde: 'Oct 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Interescolar Final',    desde: 'Oct 27',                  detalle: '' },
      { tipo: 'tradicional', nombre: 'Huella de Invierno 27', desde: 'Oct 27',                  detalle: '' },
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
