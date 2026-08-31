/* Configuración de Tailwind para generar la hoja de estilos de la versión
   publicada. Es la misma configuración que está escrita dentro de index.html
   para la versión de desarrollo: si cambias una, cambia la otra. */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Instrument Serif"', 'serif'],
        body: ['"Barlow"', 'sans-serif'],
      },
      colors: {
        fondo: 'var(--color-fondo)',
        marca: 'var(--color-marca)',
        acento: 'var(--color-acento)',
        'acento-texto': 'var(--color-acento-texto)',
      },
      borderRadius: {
        DEFAULT: '9999px',
        tarjeta: 'var(--radio-tarjeta)',
      },
    },
  },
};
