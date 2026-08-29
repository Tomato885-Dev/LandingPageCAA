/* ============================================================================
   footer.js — SECCIÓN 6: PIE DE PÁGINA
   ----------------------------------------------------------------------------
   Contiene el contacto, las redes sociales y los enlaces importantes.
   El pie de página tiene el id "contacto": por eso los botones que apuntan a
   '#contacto' llevan hasta aquí.
   ============================================================================ */

window.CONTENIDO_FOOTER = {

  /* ---- BLOQUE PRINCIPAL -------------------------------------------------- */
  titulo: 'Hablemos',
  descripcion: 'La campaña está para escucharte: cuéntanos tu idea y te ' +
               'responderemos lo antes posible.',

  /* ---- BOTÓN PRINCIPAL DEL PIE ------------------------------------------ */
  boton: { texto: 'Escríbenos', url: 'mailto:carlosgomezp@verbo.cl' },   // 👉 ENLACE

  /* ---- DATOS DE CONTACTO -------------------------------------------------
     "icono" debe existir en src/componentes/ui/Iconos.jsx                     */
  contacto: [
    { icono: 'correo',    texto: 'carlosgomezp@verbo.cl',  url: 'mailto:carlosgomezp@verbo.cl' },
    { icono: 'telefono',  texto: '+569 7154 4681',         url: 'tel:+56971544681' },
  ],

  /* ---- REDES SOCIALES ----------------------------------------------------
     Iconos disponibles: instagram, tiktok, youtube, facebook, linkedin,
     x, whatsapp. Borra los que no uses.                                       */
  redes: [
    { icono: 'instagram', nombre: 'Instagram', url: 'https://instagram.com/' },   // 👉 ENLACE
    { icono: 'whatsapp',  nombre: 'WhatsApp',  url: 'https://wa.me/56971544681' },// 👉 ENLACE
    { icono: 'correo',    nombre: 'Correo',    url: 'mailto:carlosgomezp@verbo.cl' },
  ],

  /* ---- COLUMNAS DE ENLACES ----------------------------------------------
     Los datos de contacto se agregan solos como última columna, así que aquí
     solo van las columnas de enlaces.
     Para agregar otra, copia un bloque { titulo, enlaces } completo.           */
  columnas: [
    {
      titulo: 'El CAA',
      enlaces: [
        { texto: 'Quiénes somos',  url: '#nosotros' },
        { texto: 'Visión y misión', url: '#vision-mision' },
        { texto: 'Proyectos',       url: '#proyectos' },
        { texto: 'Colaboradores',   url: '#colaboradores' },
      ],
    },
  ],

  /* ---- LÍNEA FINAL ------------------------------------------------------- */
  legal: '© ' + new Date().getFullYear() + ' Centro de Alumnos CAA. Hecho por y para la comunidad estudiantil.',
};
