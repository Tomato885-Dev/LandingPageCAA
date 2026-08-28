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
  descripcion: 'El Centro de Alumnos CAA está para escucharte. Escríbenos, ' +
               'pásate por la oficina o cuéntanos tu idea: toda propuesta se ' +
               'revisa y se responde.',

  /* ---- BOTÓN PRINCIPAL DEL PIE ------------------------------------------ */
  boton: { texto: 'Escríbenos', url: 'mailto:contacto@caa.cl' },   // 👉 ENLACE

  /* ---- DATOS DE CONTACTO -------------------------------------------------
     "icono" debe existir en src/componentes/ui/Iconos.jsx                     */
  contacto: [
    { icono: 'correo',    texto: 'contacto@caa.cl',            url: 'mailto:contacto@caa.cl' },
    { icono: 'telefono',  texto: '+56 9 0000 0000',            url: 'tel:+56900000000' },
    { icono: 'ubicacion', texto: 'Oficina CAA, Edificio A',    url: '' },
  ],

  /* ---- REDES SOCIALES ----------------------------------------------------
     Iconos disponibles: instagram, tiktok, youtube, facebook, linkedin,
     x, whatsapp. Borra los que no uses.                                       */
  redes: [
    { icono: 'instagram', nombre: 'Instagram', url: 'https://instagram.com/' },   // 👉 ENLACE
    { icono: 'tiktok',    nombre: 'TikTok',    url: 'https://tiktok.com/' },      // 👉 ENLACE
    { icono: 'whatsapp',  nombre: 'WhatsApp',  url: 'https://wa.me/56900000000' },// 👉 ENLACE
    { icono: 'correo',    nombre: 'Correo',    url: 'mailto:contacto@caa.cl' },
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
