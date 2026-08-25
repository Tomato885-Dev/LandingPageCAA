/* ============================================================================
   Iconos.jsx — Biblioteca de iconos del sitio
   ----------------------------------------------------------------------------
   Se usa así desde cualquier componente:   <Icono nombre="estrella" />
   Y desde los archivos de contenido basta con escribir el NOMBRE del icono,
   por ejemplo:   { icono: 'estrella', ... }
   La lista completa de nombres disponibles está al final de este archivo.
   ============================================================================ */

const TRAZOS = {
  'flecha-diagonal': ['M7 17L17 7', 'M7 7h10v10'],
  'flecha-derecha':  ['M5 12h14', 'm13 6 6 6-6 6'],
  'flecha-abajo':    ['M12 5v14', 'm6 13 6 6 6-6'],
  usuarios:          ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  megafono:          ['m3 11 18-5v12L3 14v-3z', 'M11.6 16.8a3 3 0 1 1-5.8-1.6'],
  calendario:        ['M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'M16 2v4', 'M8 2v4', 'M3 10h18'],
  ampolleta:         ['M15 14c.2-1 .7-1.7 1.5-2.5A5.9 5.9 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'],
  estrella:          ['m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2-6.2 3.2L7 14.2l-5-4.9 6.9-1L12 2z'],
  corazon:           ['M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7 7-7z'],
  libro:             ['M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20'],
  globo:             ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M2 12h20', 'M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  reloj:             ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M12 6v6l4 2'],
  objetivo:          ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z', 'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'],
  brujula:           ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'm16.2 7.8-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1z'],
  destello:          ['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z', 'M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z'],
  rayo:              ['M13 2 4 14h7l-1 8 9-12h-7l1-8z'],
  chispa:            ['M12 2v4', 'M12 18v4', 'M4.9 4.9l2.8 2.8', 'M16.3 16.3l2.8 2.8', 'M2 12h4', 'M18 12h4', 'M4.9 19.1l2.8-2.8', 'M16.3 7.7l2.8-2.8'],
  correo:            ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 7-10 6L2 7'],
  telefono:          ['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.2 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z'],
  ubicacion:         ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z', 'M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'],
  enlace:            ['M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6', 'M15 3h6v6', 'M10 14 21 3'],
  menu:              ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  cerrar:            ['M18 6 6 18', 'M6 6l12 12'],
  check:             ['M20 6 9 17l-5-5'],
  imagen:            ['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z', 'M8.5 8.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z', 'm21 15-5-5L5 21'],
  instagram:         ['M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z', 'M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z', 'M17.5 6.5h.01'],
  linkedin:          ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z', 'M2 9h4v12H2z', 'M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'],
  facebook:          ['M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'],
  youtube:           ['M22.5 6.4a2.8 2.8 0 0 0-1.9-2C18.9 4 12 4 12 4s-6.9 0-8.6.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 11.8a29 29 0 0 0 .5 5.3 2.8 2.8 0 0 0 1.9 2c1.7.4 8.6.4 8.6.4s6.9 0 8.6-.4a2.8 2.8 0 0 0 1.9-2 29 29 0 0 0 .5-5.3 29 29 0 0 0-.5-5.4z', 'm9.8 15 5.7-3.3-5.7-3.2V15z'],
  whatsapp:          ['M12 2a10 10 0 0 0-8.6 15.1L2.2 22l5-1.2A10 10 0 1 0 12 2z', 'M8.6 8.4c0 4 3 7 7 7 .8 0 1.4-.6 1.4-1.4v-.9l-2.3-.8-1 1.2a7.6 7.6 0 0 1-3.2-3.2l1.2-1L11 7h-1c-.8 0-1.4.6-1.4 1.4z'],
  tiktok:            ['M16 3a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.8V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2A3 3 0 1 0 13 15V3h3z'],
  x:                 ['m4 4 7.5 9.5L4.5 20h2l6-6.8L18 20h2l-7.8-10L19.5 4h-2l-5.2 5.9L8 4H4z'],
};

// Iconos que se dibujan rellenos en lugar de con línea
const RELLENOS = ['play', 'facebook', 'youtube', 'tiktok', 'x', 'rayo'];

function Icono({ nombre, className = 'h-5 w-5', strokeWidth = 1.7 }) {
  if (nombre === 'play') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <polygon points="6 4 20 12 6 20 6 4" />
      </svg>
    );
  }

  const trazos = TRAZOS[nombre];
  if (!trazos) return null;                 // nombre no encontrado: no dibuja nada
  const relleno = RELLENOS.indexOf(nombre) !== -1;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={relleno ? 'currentColor' : 'none'}
      stroke={relleno ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {trazos.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

/* ----------------------------------------------------------------------------
   NOMBRES DISPONIBLES (para usar en los archivos de src/contenido/):

   flecha-diagonal · flecha-derecha · flecha-abajo · play · usuarios ·
   megafono · calendario · ampolleta · estrella · corazon · libro · globo ·
   reloj · objetivo · brujula · destello · rayo · chispa · correo · telefono ·
   ubicacion · enlace · menu · cerrar · check · imagen · instagram · linkedin ·
   facebook · youtube · whatsapp · tiktok · x

   PARA AGREGAR UN ICONO NUEVO: añade una línea al objeto TRAZOS de arriba con
   el nombre que quieras y el "path" del icono (por ejemplo, copiado de
   lucide.dev). Desde ese momento ya puedes usarlo en los archivos de contenido.
   ---------------------------------------------------------------------------- */

window.Icono = Icono;
