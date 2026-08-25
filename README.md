# Landing page — Centro de Alumnos CAA

Landing page de una sola página, modular y ampliable, para el Centro de Alumnos
**CAA**. Diseño cinematográfico sobre fondo negro, con videos de fondo en bucle,
sistema visual *liquid glass* y animaciones de entrada.

> 📘 **¿Vas a editar textos, imágenes o enlaces?**
> Todo está explicado paso a paso en **[MANUAL.md](MANUAL.md)**, escrito para
> personas que no programan.

---

## Cómo verla

No hay que instalar ni compilar nada, pero sí abrirla desde un servidor local
(al abrir el archivo con doble clic el navegador bloquea la carga de módulos):

```bash
python3 -m http.server 8000
# luego abre http://localhost:8000
```

O, en Visual Studio Code, clic derecho sobre `index.html` → **Open with Live Server**.

---

## Secciones incluidas

| # | Sección | Componente | Contenido |
|---|---|---|---|
| 1 | Inicio / Hero | `src/componentes/secciones/Hero.jsx` | `src/contenido/hero.js` |
| 2 | ¿Quiénes somos? | `src/componentes/secciones/Nosotros.jsx` | `src/contenido/nosotros.js` |
| 3 | Visión y Misión | `src/componentes/secciones/VisionMision.jsx` | `src/contenido/vision-mision.js` |
| 4 | Proyectos | `src/componentes/secciones/Proyectos.jsx` | `src/contenido/proyectos.js` |
| 5 | Colaboradores | `src/componentes/secciones/Colaboradores.jsx` | `src/contenido/colaboradores.js` |
| 6 | Footer / Contacto | `src/componentes/layout/Footer.jsx` | `src/contenido/footer.js` |

---

## Arquitectura

La idea central es la **separación entre contenido, componentes y estilos**:

```
index.html            → carga librerías (CDN) y todos los archivos del proyecto
src/contenido/        → SOLO datos: textos, rutas de imágenes y enlaces
src/componentes/ui/   → piezas reutilizables (Panel, Boton, Media, Icono, …)
src/componentes/layout/ → Navbar y Footer
src/componentes/secciones/ → una sección de la página por archivo
src/app/secciones.js  → registro de secciones (orden y visibilidad)
src/app/App.jsx       → recorre el registro y arma la página
src/estilos/theme.css → tokens de diseño (colores, radios, efecto vidrio)
assets/               → imágenes y logos
```

Agregar una sección nueva son **3 pasos** (archivo de contenido, archivo de
sección, registro en `secciones.js` + `index.html`); no hay que tocar nada más.
El detalle está en el [punto 11 del manual](MANUAL.md#11-ocultar-reordenar-y-agregar-secciones-nuevas).

### Tecnologías

Todo por CDN, sin build ni dependencias instaladas:

- **React 18.3.1** (UMD) + **Babel Standalone 7.29** (JSX en el navegador)
- **Tailwind CSS** (Play CDN) para las utilidades de estilo
- **Framer Motion 11.11** para las animaciones de entrada
- **Google Fonts**: Instrument Serif (títulos, en cursiva) y Barlow (textos)

> Los componentes se exponen como `window.NombreDelComponente`, y el contenido
> como `window.CONTENIDO_SECCION`. Es la forma más simple de tener módulos
> separados sin necesitar un empaquetador.

### Sistema visual

- Fondo negro, texto blanco, sin degradados de color.
- `.liquid-glass` y `.liquid-glass-strong`: superficies de vidrio con borde
  luminoso (definidas en `src/estilos/theme.css`).
- `FadingVideo`: videos de fondo en bucle con fundido de entrada y salida hecho
  con `requestAnimationFrame` (sin transiciones CSS).
- `BlurText`: el título de la portada aparece palabra por palabra saliendo del
  desenfoque.
- Totalmente responsive: escritorio, tablet y celular (menú desplegable en
  pantallas pequeñas).

---

## Personalización rápida

| Quiero… | Archivo |
|---|---|
| Cambiar textos, imágenes o enlaces | `src/contenido/*.js` |
| Cambiar colores | `src/estilos/theme.css` (bloque `:root`) |
| Ocultar o reordenar secciones | `src/app/secciones.js` |
| Cambiar el título de la pestaña o las fuentes | `index.html` |

---

## Contenido pendiente de reemplazar

Los lugares donde falta material propio del CAA están marcados en el código con
el símbolo **👉** y, en la página, con recuadros que dicen *"Agrega aquí tu
imagen"*:

- Fotos de la directiva → `assets/img/`
- Portadas de los proyectos → `assets/img/`
- Logos de los colaboradores → `assets/logos/`
- Logo del CAA, favicon e imagen para redes
- Videos de fondo (los actuales son de demostración)
- Correo, teléfono, dirección y enlaces reales de redes sociales
