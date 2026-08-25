/* ============================================================================
   secciones.js — ORDEN Y ACTIVACIÓN DE LAS SECCIONES
   ----------------------------------------------------------------------------
   Esta es la "columna vertebral" de la página. Cada línea representa una
   sección visible.

   • Para CAMBIAR EL ORDEN     → mueve la línea de lugar.
   • Para OCULTAR una sección  → cambia  activa: true  por  activa: false.
   • Para AGREGAR una sección  → ver MANUAL.md, punto 8 (son 3 pasos).

   Campos:
     id         → identificador usado por los enlaces del menú (#inicio, etc.)
     componente → nombre del componente que dibuja la sección
     activa     → true la muestra, false la oculta
   ============================================================================ */

window.SECCIONES = [
  { id: 'inicio',         componente: 'Hero',          activa: true },
  { id: 'nosotros',       componente: 'Nosotros',      activa: true },
  { id: 'vision-mision',  componente: 'VisionMision',  activa: true },
  { id: 'proyectos',      componente: 'Proyectos',     activa: true },
  { id: 'colaboradores',  componente: 'Colaboradores', activa: true },
];
