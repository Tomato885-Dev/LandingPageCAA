# Manual de uso — Landing page del CAA

Este manual está escrito para personas **que no saben programar**.
Explica exactamente qué archivo abrir y qué cambiar para modificar cualquier
parte de la página.

---

## Índice

1. [Cómo ver la página en tu computador](#1-cómo-ver-la-página-en-tu-computador)
2. [Mapa de archivos: dónde está cada cosa](#2-mapa-de-archivos-dónde-está-cada-cosa)
3. [Reglas de oro antes de editar](#3-reglas-de-oro-antes-de-editar)
4. [Cambiar los textos de cada sección](#4-cambiar-los-textos-de-cada-sección)
5. [Cambiar títulos y subtítulos](#5-cambiar-títulos-y-subtítulos)
6. [Cambiar o agregar imágenes (y videos de fondo)](#6-cambiar-o-agregar-imágenes-y-videos-de-fondo)
7. [Agregar un proyecto nuevo](#7-agregar-un-proyecto-nuevo)
8. [Agregar o eliminar un colaborador](#8-agregar-o-eliminar-un-colaborador)
9. [Modificar enlaces y botones](#9-modificar-enlaces-y-botones)
10. [Cambiar colores y otros elementos del diseño](#10-cambiar-colores-y-otros-elementos-del-diseño)
11. [Ocultar, reordenar y agregar secciones nuevas](#11-ocultar-reordenar-y-agregar-secciones-nuevas)
12. [Iconos: cuáles hay y cómo agregar otros](#12-iconos-cuáles-hay-y-cómo-agregar-otros)
13. [Menú superior y pie de página](#13-menú-superior-y-pie-de-página)
14. [Publicar la página en internet](#14-publicar-la-página-en-internet)
15. [Si algo se rompe (problemas frecuentes)](#15-si-algo-se-rompe-problemas-frecuentes)
16. [Tabla resumen: "quiero cambiar… → abro…"](#16-tabla-resumen-quiero-cambiar--abro)

---

## 1. Cómo ver la página en tu computador

La página **no necesita instalar nada**, pero sí necesita abrirse desde un
"servidor local" (si haces doble clic en `index.html` el navegador bloquea
algunos archivos por seguridad y verás la pantalla en negro).

**Opción A — con Visual Studio Code (la más cómoda):**

1. Instala [Visual Studio Code](https://code.visualstudio.com/).
2. Dentro de VS Code, instala la extensión **Live Server**.
3. Abre la carpeta del proyecto (`Archivo → Abrir carpeta…`).
4. Haz clic derecho sobre `index.html` → **Open with Live Server**.
5. Se abrirá el navegador. Cada vez que guardes un archivo, la página se
   actualiza sola.

**Opción B — con una sola línea en la terminal:**

```bash
# En Mac / Linux:
python3 -m http.server 8000

# En Windows (si tienes Python instalado):
py -m http.server 8000
```

Luego abre en el navegador: `http://localhost:8000`

> **Importante:** después de guardar un cambio, si no lo ves, recarga forzando
> la actualización: `Ctrl + F5` (Windows) o `Cmd + Shift + R` (Mac).

---

## 2. Mapa de archivos: dónde está cada cosa

```
LandingPageCAA/
│
├── index.html                  ← Título de la pestaña, librerías y lista de archivos
├── MANUAL.md                   ← Este manual
│
├── assets/
│   ├── img/                    ← 📷 AQUÍ VAN LAS IMÁGENES (fotos, portadas, favicon)
│   └── logos/                  ← 📷 AQUÍ VAN LOS LOGOS DE COLABORADORES
│
└── src/
    ├── contenido/              ← ✍️  TEXTOS, IMÁGENES Y ENLACES (lo que más vas a editar)
    │   ├── sitio.js               · nombre del CAA, logo y menú superior
    │   ├── hero.js                · sección 1: portada
    │   ├── nosotros.js            · sección 2: quiénes somos
    │   ├── vision-mision.js       · sección 3: visión y misión
    │   ├── proyectos.js           · sección 4: proyectos
    │   ├── colaboradores.js       · sección 5: colaboradores
    │   └── footer.js              · sección 6: pie de página y contacto
    │
    ├── estilos/
    │   └── theme.css           ← 🎨 COLORES y efectos visuales
    │
    ├── componentes/            ← 🧩 Piezas visuales (solo si quieres cambiar el diseño)
    │   ├── ui/                    · botones, tarjetas, iconos, animaciones
    │   ├── layout/                · barra de navegación y pie de página
    │   └── secciones/             · una sección de la página por archivo
    │
    └── app/
        ├── secciones.js        ← 📋 ORDEN de las secciones (y cuáles se muestran)
        └── App.jsx                · arma la página completa (casi nunca se toca)
```

**La regla más simple de todas:**
si quieres cambiar **texto, imágenes o enlaces**, el archivo que buscas está en
`src/contenido/`. Nada más.

---

## 3. Reglas de oro antes de editar

Los archivos de `src/contenido/` se ven así:

```js
titulo: 'Una comunidad estudiantil que se atreve a más',
```

Al editar, respeta estas 5 reglas:

1. **Cambia solo lo que está entre comillas.**
   ✅ `titulo: 'Mi nuevo título',`
   ❌ `mititulo: 'Mi nuevo título',` (cambiaste el nombre del campo, se rompe)

2. **No borres la coma del final.** Cada línea termina con `,`.

3. **Si tu texto lleva un apóstrofo**, escríbelo con `\` delante:
   `texto: 'El CAA d\'este año',` — o mejor, evita los apóstrofos.

4. **Las tildes y la ñ se pueden usar sin problema:** `Visión`, `años`, `qué`.

5. **Guarda el archivo y recarga con `Ctrl + F5`.**

> Antes de un cambio grande, haz una copia de seguridad del archivo
> (por ejemplo `proyectos.js` → `proyectos-copia.js.txt`).
> Ojo: no lo dejes con extensión `.js` dentro de `src/contenido/`.

---

## 4. Cambiar los textos de cada sección

| Sección de la página | Archivo que debes abrir |
|---|---|
| Portada (lo primero que se ve) | `src/contenido/hero.js` |
| ¿Quiénes somos? | `src/contenido/nosotros.js` |
| Visión y Misión | `src/contenido/vision-mision.js` |
| Proyectos | `src/contenido/proyectos.js` |
| Colaboradores | `src/contenido/colaboradores.js` |
| Pie de página y contacto | `src/contenido/footer.js` |
| Menú de arriba y nombre del CAA | `src/contenido/sitio.js` |

### Ejemplo 1: cambiar el texto de la portada

Abre `src/contenido/hero.js` y busca:

```js
subtitulo: 'Somos el Centro de Alumnos CAA: representamos, organizamos y ' +
           'construimos junto a ti. Escuchamos cada propuesta y la ' +
           'convertimos en proyectos concretos para toda la comunidad.',
```

Cámbialo por lo que quieras. Si tu texto es corto, puedes dejarlo en una sola línea:

```js
subtitulo: 'Somos el Centro de Alumnos de Ingeniería. Trabajamos por ti.',
```

> El `+` al final de cada línea sirve solo para partir textos largos en varias
> líneas y que sea más cómodo leerlos. Si usas una sola línea, no lleva `+`.

### Ejemplo 2: cambiar la etiqueta destacada de la portada

En el mismo archivo:

```js
etiqueta: {
  destacado: 'Nuevo',
  texto: 'Periodo 2026 · Ya están abiertas las postulaciones a comisiones',
},
```

Si no quieres esa etiqueta, escribe:

```js
etiqueta: null,
```

### Ejemplo 3: cambiar las cifras de la portada

```js
estadisticas: [
  { icono: 'usuarios',  numero: '1.240', etiqueta: 'Estudiantes representados' },
  { icono: 'estrella',  numero: '24',    etiqueta: 'Proyectos ejecutados este año' },
],
```

- Para **cambiar** una cifra: edita `numero` y `etiqueta`.
- Para **agregar** una tercera: copia una línea completa y pégala debajo.
- Para **quitar** una: borra la línea completa.
- Los nombres de iconos posibles están en el [punto 12](#12-iconos-cuáles-hay-y-cómo-agregar-otros).

---

## 5. Cambiar títulos y subtítulos

### Título gigante de la portada

`src/contenido/hero.js`:

```js
titulo: 'Una comunidad estudiantil que se atreve a más',
```

Este título se anima palabra por palabra. Lo ideal son **entre 5 y 9 palabras**.

### Títulos de las demás secciones

Todos los títulos grandes de las secciones interiores están escritos en
**líneas separadas**, para controlar dónde corta el texto:

```js
titulo: ['Ideas', 'en movimiento'],
```

Eso se ve así en pantalla:

```
Ideas
en movimiento
```

- Si quieres **una sola línea**: `titulo: ['Nuestros proyectos'],`
- Si quieres **tres líneas**: `titulo: ['Ideas', 'que mueven', 'la comunidad'],`

### El texto pequeño sobre el título (kicker)

```js
kicker: '// Proyectos',
```

Puedes cambiarlo (`'// Nuestro trabajo'`) o dejarlo vacío: `kicker: '',`

### Texto de introducción bajo el título

```js
intro: 'Cada proyecto nace de una necesidad concreta planteada por la comunidad.',
```

Para quitarlo: `intro: '',`

---

## 6. Cambiar o agregar imágenes (y videos de fondo)

### Paso a paso para cualquier imagen

1. Copia tu imagen dentro de la carpeta `assets/img/`.
2. Ponle un nombre **sin espacios ni tildes**: `semana-estudiante.jpg`.
3. En el archivo de contenido correspondiente, escribe la ruta:

```js
imagen: 'assets/img/semana-estudiante.jpg',
```

**Dónde está cada imagen del sitio:**

| Imagen | Archivo | Campo |
|---|---|---|
| Logo del menú | `src/contenido/sitio.js` | `marca.logoImagen` |
| Fondo de la portada | `src/contenido/hero.js` | `fondo.imagen` |
| Fondo de "Quiénes somos" | `src/contenido/nosotros.js` | `fondo.imagen` |
| Fotos de la directiva | `src/contenido/nosotros.js` | `equipo.integrantes[].foto` |
| Fotos de proyectos | `src/contenido/proyectos.js` | `proyectos[].imagen` |
| Logos de colaboradores | `src/contenido/colaboradores.js` | `colaboradores[].logo` |
| Icono de la pestaña (favicon) | `index.html` | `<link rel="icon" ...>` |
| Imagen al compartir en redes | `index.html` | `<meta property="og:image" ...>` |

> **Mientras no pongas una imagen**, la página muestra un recuadro gris que dice
> "Agrega aquí tu imagen". Así siempre sabes dónde falta contenido y la página
> nunca se ve rota.

### Cambiar el logo del menú

En `src/contenido/sitio.js`:

```js
marca: {
  nombre: 'CAA',
  nombreLargo: 'Centro de Alumnos CAA',
  logoLetra: 'c',        // se usa si NO hay imagen
  logoImagen: '',        // ← escribe aquí la ruta de tu logo
},
```

Para usar un logo en imagen:

```js
logoImagen: 'assets/img/logo-caa.png',
```

### Cambiar los videos de fondo

Cada sección puede tener un video de fondo. En `src/contenido/hero.js`:

```js
fondo: {
  video: 'https://…/video.mp4',
  imagen: '',
},
```

- Para **cambiar el video**: pega otra dirección `.mp4` (puede ser un enlace de
  internet o un archivo tuyo, por ejemplo `'assets/img/portada.mp4'`).
- Para **quitar el video y usar una imagen fija**:

```js
fondo: {
  video: '',
  imagen: 'assets/img/portada.jpg',
},
```

- Para **dejar el fondo negro**: deja los dos campos vacíos.

> Los videos deben durar poco (5 a 15 segundos) y pesar poco (idealmente menos
> de 5 MB): se repiten solos con un fundido automático.

---

## 7. Agregar un proyecto nuevo

Abre `src/contenido/proyectos.js` y busca la lista `proyectos: [ … ]`.

**Copia y pega este bloque completo** dentro de la lista (antes del `]`):

```js
    {
      titulo: 'Nombre del proyecto',
      descripcion: 'Explica en dos o tres líneas de qué se trata el proyecto.',
      imagen: 'assets/img/mi-proyecto.jpg',
      estado: 'En curso',
      etiquetas: ['Cultura', 'Comunidad'],
      enlace: { texto: 'Ver más', url: 'https://ejemplo.cl' },
      destacado: false,
    },
```

Qué significa cada campo:

| Campo | Para qué sirve | Ejemplo |
|---|---|---|
| `titulo` | Nombre del proyecto | `'Semana del Estudiante'` |
| `descripcion` | Explicación corta | `'Una semana de actividades…'` |
| `imagen` | Foto del proyecto (o `''` si aún no hay) | `'assets/img/semana.jpg'` |
| `estado` | Etiqueta sobre la foto | `'En curso'`, `'Próximamente'`, `'Finalizado'` |
| `etiquetas` | Palabras clave (0 a 4) | `['Cultura', 'Anual']` |
| `enlace` | Botón del proyecto. Usa `null` si no tiene | `{ texto: 'Ver más', url: '#' }` |
| `destacado` | `true` = tarjeta ancha con la foto al costado | `false` |

**Recomendación:** deja `destacado: true` en **un solo** proyecto (el más
importante). Los demás en `false`.

**Para eliminar un proyecto:** borra su bloque completo, desde `{` hasta `},`.

**Para cambiar el orden:** mueve los bloques de lugar. El primero de la lista
aparece primero en la página.

---

## 8. Agregar o eliminar un colaborador

Abre `src/contenido/colaboradores.js`.

**Para agregar**, copia esta línea dentro de la lista `colaboradores: [ … ]`:

```js
    { nombre: 'Nombre de la organización', logo: 'assets/logos/nombre.png', url: 'https://sitio.cl', tipo: 'Institución' },
```

| Campo | Para qué sirve |
|---|---|
| `nombre` | Nombre del colaborador. **Si no hay logo, se muestra el nombre escrito**, y se ve bien. |
| `logo` | Ruta del logo (guárdalo en `assets/logos/`). Déjalo en `''` si no tienes. |
| `url` | Sitio web. Déjalo en `''` si no tiene: la tarjeta deja de ser un enlace. |
| `tipo` | Texto pequeño bajo el nombre. Déjalo en `''` si no quieres. |

**Para eliminar** un colaborador: borra su línea completa (incluida la coma final).

> Consejo: los logos deben ser **blancos o claros con fondo transparente**,
> porque el sitio tiene fondo negro.

---

## 9. Modificar enlaces y botones

Todos los botones se escriben igual: un texto y una dirección.

```js
boton: { texto: 'Escríbenos', url: 'mailto:contacto@caa.cl' },
```

Tipos de dirección que puedes usar:

| Quiero que el botón… | Escribe en `url` |
|---|---|
| Baje a una sección de esta misma página | `'#proyectos'` |
| Abra otra página web | `'https://instagram.com/tu_cuenta'` |
| Abra el correo | `'mailto:contacto@caa.cl'` |
| Marque un teléfono | `'tel:+56900000000'` |
| Abra WhatsApp | `'https://wa.me/56900000000'` |
| Abra un formulario de Google | `'https://forms.gle/xxxxxx'` |

Las direcciones que empiezan con `http` se abren en una pestaña nueva
automáticamente.

**Dónde está cada botón:**

| Botón | Archivo | Campo |
|---|---|---|
| "Únete al CAA" (menú) | `src/contenido/sitio.js` | `botonMenu` |
| Botones de la portada | `src/contenido/hero.js` | `botones.principal` y `botones.secundario` |
| Botón de cada proyecto | `src/contenido/proyectos.js` | `proyectos[].enlace` |
| "Preséntala al CAA" | `src/contenido/proyectos.js` | `cta.boton` |
| "Escríbenos" (colaboradores) | `src/contenido/colaboradores.js` | `cta.boton` |
| Botón grande del pie | `src/contenido/footer.js` | `boton` |
| Redes sociales | `src/contenido/footer.js` | `redes` |
| Columnas de enlaces del pie | `src/contenido/footer.js` | `columnas` |

**Las secciones a las que puedes apuntar con `#`** (están definidas en
`src/app/secciones.js`):

`#inicio` · `#nosotros` · `#vision-mision` · `#proyectos` · `#colaboradores` · `#contacto` (el pie de página)

---

## 10. Cambiar colores y otros elementos del diseño

La paleta del sitio son **dos colores sobre fondo negro**:

- **ROJO `#de0f01`** — color principal (marca)
- **BLANCO `#ffffff`** — color secundario (textos y bordes del vidrio)

El rojo está aplicado de forma **sutil**: no pinta bloques grandes, sino que
tiñe el vidrio, los bordes, los brillos y unos pocos acentos puntuales.

Todo eso se controla desde `src/estilos/theme.css`, en el bloque de arriba:

```css
:root {
  --color-marca: #de0f01;         /* ROJO principal              */
  --color-marca-rgb: 222, 15, 1;  /* el mismo rojo, en RGB       */
  --color-fondo: #000000;
  --color-texto: #ffffff;

  --color-acento: var(--color-marca);
  --color-acento-texto: #ffffff;

  --radio-tarjeta: 1.25rem;

  --vidrio-opacidad: 0.035;       /* cuánto rojo tiñe el vidrio  */
  --vidrio-borde-marca: 0.35;     /* rojo en los bordes          */
  --brillo-marca: 0.38;           /* brillo rojo al pasar el mouse */
}
```

| Variable | Qué controla |
|---|---|
| `--color-marca` | **El rojo de la marca.** Cámbialo aquí y cambia en toda la página |
| `--color-marca-rgb` | El mismo color en formato RGB. **Si cambias el de arriba, cambia también este** (ver nota) |
| `--color-fondo` | El fondo de toda la página |
| `--color-texto` | El color general de los textos |
| `--color-acento` | Color del botón "Únete al CAA" y del chip "Nuevo" (por defecto, el rojo) |
| `--color-acento-texto` | Color de la letra **dentro** de ese botón |
| `--radio-tarjeta` | Qué tan redondeadas son las tarjetas |
| `--vidrio-opacidad` | Cuánto rojo lleva el vidrio de las tarjetas |
| `--vidrio-borde-marca` | Cuánto rojo tienen los bordes del vidrio |
| `--brillo-marca` | Intensidad del brillo rojo al pasar el mouse |

> **Nota importante:** `--color-marca` y `--color-marca-rgb` son el mismo color
> escrito de dos formas. Si pones `#1d4ed8`, el RGB es `29, 78, 216`. Puedes
> convertirlo en [htmlcolorcodes.com](https://htmlcolorcodes.com/es/).

### Dónde aparece el rojo (por si quieres quitarlo de algún lugar)

| Dónde se ve | Cómo se controla |
|---|---|
| Botón "Únete al CAA" y chip "Nuevo" | `--color-acento` |
| Los textos pequeños tipo `// Proyectos` | clase `text-marca` en `src/componentes/ui/TituloSeccion.jsx` |
| Los ✓ de Visión y Misión | `text-marca` en `src/componentes/ui/TarjetaGlass.jsx` |
| El puntito de "En curso" en los proyectos | clase `.punto-marca` |
| El tinte del vidrio de las tarjetas | `--vidrio-opacidad` |
| El destello rojo del borde de las tarjetas | `--vidrio-borde-marca` |
| El brillo al pasar el mouse | `--brillo-marca` |
| El resplandor de fondo de las secciones | clase `.resplandor-marca` en `theme.css` |
| El cuadrado del icono de cada tarjeta | clase `.caja-icono` en `theme.css` |
| La barra de scroll y el texto seleccionado | final de `theme.css` |

### Subir o bajar la intensidad del rojo

**Que se note menos:**

```css
--vidrio-opacidad: 0.02;
--vidrio-borde-marca: 0.18;
--brillo-marca: 0.2;
```

**Que se note más:**

```css
--vidrio-opacidad: 0.06;
--vidrio-borde-marca: 0.55;
--brillo-marca: 0.6;
```

**Quitar el resplandor de fondo de las secciones:** en `theme.css`, busca
`.resplandor-marca` y baja los valores `0.16` y `0.11` a `0`.

**Ejemplo: cambiar toda la marca a azul**

```css
--color-marca: #1d4ed8;
--color-marca-rgb: 29, 78, 216;
```

**Ejemplo: tarjetas con esquinas más rectas**

```css
--radio-tarjeta: 0.5rem;
```

> Los colores se escriben en formato `#rrggbb`. Puedes elegir uno en
> [htmlcolorcodes.com](https://htmlcolorcodes.com/es/) y copiar el código.

### Cambiar las tipografías

Están en `index.html`, en dos lugares (hay que cambiar los dos):

1. La línea que carga las fuentes desde Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

2. La configuración que les pone nombre:

```js
fontFamily: {
  heading: ['"Instrument Serif"', 'serif'],   // títulos grandes (en cursiva)
  body:    ['"Barlow"', 'sans-serif'],        // textos normales
},
```

### El efecto de "vidrio"

En `theme.css`, más abajo, están las clases `.liquid-glass` y
`.liquid-glass-strong`. Son las que dan el efecto de vidrio esmerilado.
Si quieres un vidrio **más notorio**, cambia en `:root`:

```css
--vidrio-opacidad: 0.05;     /* estaba en 0.01 */
--vidrio-desenfoque: 10px;   /* estaba en 4px  */
```

---

## 11. Ocultar, reordenar y agregar secciones nuevas

### Ocultar o reordenar (muy fácil)

Abre `src/app/secciones.js`:

```js
window.SECCIONES = [
  { id: 'inicio',         componente: 'Hero',          activa: true },
  { id: 'nosotros',       componente: 'Nosotros',      activa: true },
  { id: 'vision-mision',  componente: 'VisionMision',  activa: true },
  { id: 'proyectos',      componente: 'Proyectos',     activa: true },
  { id: 'colaboradores',  componente: 'Colaboradores', activa: true },
];
```

- **Ocultar** una sección: cambia `activa: true` por `activa: false`.
  (La sección sigue existiendo, solo deja de mostrarse.)
- **Reordenar**: mueve la línea de lugar. Se muestran en ese orden.

### Agregar una sección nueva (3 pasos)

Supongamos que quieres una sección de **Noticias**.

**Paso 1 — crea el archivo de contenido**
`src/contenido/noticias.js`:

```js
window.CONTENIDO_NOTICIAS = {
  fondo: { video: '', imagen: '' },
  kicker: '// Noticias',
  titulo: ['Lo último', 'del CAA'],
  intro: 'Las novedades y comunicados oficiales del Centro de Alumnos.',
  items: [
    {
      icono: 'megafono',
      etiquetas: ['Comunicado'],
      titulo: 'Resultados de la votación',
      texto: 'Ya están disponibles los resultados de la última votación.',
    },
  ],
};
```

**Paso 2 — crea el archivo de la sección**
`src/componentes/secciones/Noticias.jsx`:

```jsx
function Noticias({ id }) {
  const c = window.CONTENIDO_NOTICIAS;

  return (
    <SeccionBase id={id} fondo={c.fondo} alturaMinima="min-h-0">
      <TituloSeccion kicker={c.kicker} titulo={c.titulo} intro={c.intro} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {c.items.map((item, i) => (
          <Reveal comoLista key={i} delay={i * 0.1}>
            <TarjetaGlass
              icono={item.icono}
              etiquetas={item.etiquetas}
              titulo={item.titulo}
              texto={item.texto}
              className="h-full"
            />
          </Reveal>
        ))}
      </div>
    </SeccionBase>
  );
}

window.Noticias = Noticias;
```

**Paso 3 — regístrala en dos lugares**

a) En `index.html`, junto a las demás secciones:

```html
<script src="src/contenido/noticias.js"></script>
```

(en el bloque 1, junto a los otros archivos de contenido) y

```html
<script type="text/babel" data-presets="react" src="src/componentes/secciones/Noticias.jsx"></script>
```

(en el bloque 4, junto a las otras secciones).

b) En `src/app/secciones.js`, agrega la línea donde quieras que aparezca:

```js
{ id: 'noticias', componente: 'Noticias', activa: true },
```

**Listo.** Si además quieres que aparezca en el menú, agrégala en
`src/contenido/sitio.js`:

```js
{ texto: 'Noticias', url: '#noticias' },
```

### Piezas que puedes reutilizar en una sección nueva

| Pieza | Para qué sirve | Ejemplo |
|---|---|---|
| `<SeccionBase>` | El molde de la sección (fondo y márgenes) | `<SeccionBase id={id} fondo={c.fondo}>` |
| `<TituloSeccion>` | Kicker + título grande + intro | `<TituloSeccion kicker="// Hola" titulo={['Uno','Dos']} />` |
| `<TarjetaGlass>` | Tarjeta de vidrio con icono, etiquetas, título y texto | ver ejemplo de arriba |
| `<Panel>` | Una caja de vidrio vacía para lo que quieras | `<Panel className="rounded-tarjeta p-6">…</Panel>` |
| `<Boton>` | Botón o enlace | `<Boton texto="Ver más" url="#" />` |
| `<Pildora>` | Etiqueta pequeña redondeada | `<Pildora>Cultura</Pildora>` |
| `<Media>` | Imagen con marcador "agrega tu imagen" | `<Media src={foto} alt="Foto" />` |
| `<Icono>` | Un icono | `<Icono nombre="estrella" className="h-6 w-6" />` |
| `<Reveal>` | Hace que algo aparezca animado | `<Reveal comoLista>…</Reveal>` |
| `<BlurText>` | Título que aparece palabra por palabra | `<BlurText text="Hola" />` |

---

## 12. Iconos: cuáles hay y cómo agregar otros

En los archivos de contenido los iconos se escriben por su **nombre**:

```js
{ icono: 'megafono', … }
```

**Nombres disponibles:**

`flecha-diagonal` · `flecha-derecha` · `flecha-abajo` · `play` · `usuarios` ·
`megafono` · `calendario` · `ampolleta` · `estrella` · `corazon` · `libro` ·
`globo` · `reloj` · `objetivo` · `brujula` · `destello` · `rayo` · `chispa` ·
`correo` · `telefono` · `ubicacion` · `enlace` · `menu` · `cerrar` · `check` ·
`imagen` · `instagram` · `linkedin` · `facebook` · `youtube` · `whatsapp` ·
`tiktok` · `x`

**Para agregar un icono nuevo:**

1. Entra a [lucide.dev/icons](https://lucide.dev/icons), busca el icono y copia su código SVG.
2. Abre `src/componentes/ui/Iconos.jsx` y agrega una línea dentro de `TRAZOS`
   con el nombre que quieras y el contenido de cada `d="…"`:

```js
  cohete: ['M5 13l4 4', 'M12 2a10 10 0 0 1 0 20'],
```

3. Ya puedes usar `icono: 'cohete'` en cualquier archivo de contenido.

---

## 13. Menú superior y pie de página

### Menú superior — `src/contenido/sitio.js`

```js
navegacion: [
  { texto: 'Inicio',        url: '#inicio' },
  { texto: 'Quiénes somos', url: '#nosotros' },
  …
],
```

- **Agregar** una opción: copia una línea y cámbiala.
- **Quitar** una opción: borra la línea.
- El menú se adapta solo: en celular se convierte en un botón de menú (☰).

### Pie de página — `src/contenido/footer.js`

- `titulo` y `descripcion`: el texto grande de "Hablemos".
- `contacto`: correo, teléfono y dirección (cada uno con su icono).
- `redes`: los círculos de redes sociales. Borra los que no uses.
- `columnas`: las listas de enlaces. Puedes agregar una columna nueva copiando
  un bloque completo `{ titulo: …, enlaces: [ … ] }`.
- `legal`: la línea final con el año (el año se pone solo).

---

## 14. Publicar la página en internet

La página es un sitio estático: se puede publicar gratis.

**Opción A — GitHub Pages (gratis):**

1. Sube la carpeta a un repositorio de GitHub.
2. En el repositorio: `Settings` → `Pages`.
3. En "Source" elige la rama (por ejemplo `main`) y la carpeta `/ (root)`.
4. Guarda. En pocos minutos tendrás una dirección tipo
   `https://tuusuario.github.io/LandingPageCAA/`.

**Opción B — Netlify (gratis, arrastrando la carpeta):**

1. Entra a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastra la carpeta completa del proyecto.
3. Listo, te entrega una dirección al instante.

> Para actualizar el sitio, vuelve a subir los archivos modificados.

---

## 15. Si algo se rompe (problemas frecuentes)

| Qué ves | Causa más probable | Solución |
|---|---|---|
| Pantalla negra / dice "cargando…" y no avanza | Falta una coma o una comilla en algún archivo de `src/contenido/` | Revisa el último archivo que editaste. En el navegador presiona `F12` → pestaña **Console**: ahí aparece el archivo y la línea con el error |
| Abriste `index.html` con doble clic y no carga nada | Falta el servidor local | Usa Live Server o `python3 -m http.server` (ver [punto 1](#1-cómo-ver-la-página-en-tu-computador)) |
| La imagen no aparece | La ruta está mal escrita | Debe ser exactamente `assets/img/nombre.jpg`, respetando mayúsculas y la extensión (`.jpg` ≠ `.JPG`) |
| El video no se ve | La dirección del video no funciona o el archivo es muy pesado | Prueba abrir la dirección en el navegador; usa un `.mp4` liviano |
| Cambié algo y no se ve | El navegador guardó la versión anterior | Recarga con `Ctrl + F5` (o `Cmd + Shift + R`) |
| Una sección desapareció | Quedó en `activa: false` | Revisa `src/app/secciones.js` |
| El texto de un botón se ve blanco sobre blanco | Cambiaste `--color-acento` a un color claro | Ajusta también `--color-acento-texto` en `src/estilos/theme.css` |

**Truco general:** si algo dejó de funcionar después de un cambio, **deshaz ese
cambio** (`Ctrl + Z`) y guarda. Casi siempre es una coma o una comilla.

---

## 16. Tabla resumen: "quiero cambiar… → abro…"

| Quiero cambiar… | Abro este archivo |
|---|---|
| El nombre del CAA o el logo | `src/contenido/sitio.js` |
| Las opciones del menú de arriba | `src/contenido/sitio.js` |
| El título grande de la portada | `src/contenido/hero.js` |
| El video o la imagen de fondo de la portada | `src/contenido/hero.js` |
| Las cifras destacadas | `src/contenido/hero.js` |
| El texto de "Quiénes somos" | `src/contenido/nosotros.js` |
| Los integrantes de la directiva y sus fotos | `src/contenido/nosotros.js` |
| La visión, la misión y los valores | `src/contenido/vision-mision.js` |
| Los proyectos | `src/contenido/proyectos.js` |
| Los colaboradores y sus logos | `src/contenido/colaboradores.js` |
| El contacto, las redes y los enlaces del pie | `src/contenido/footer.js` |
| Los colores | `src/estilos/theme.css` |
| El orden de las secciones o esconder una | `src/app/secciones.js` |
| El título de la pestaña del navegador | `index.html` |
| Las tipografías | `index.html` |
| Los iconos disponibles | `src/componentes/ui/Iconos.jsx` |
| El diseño interno de una sección | `src/componentes/secciones/…` |

---

¿Dudas? Cada archivo del proyecto tiene comentarios explicativos en su interior
(las líneas que empiezan con `//` o `/*`). Esos comentarios no se muestran en la
página: están ahí solo para ayudarte.
