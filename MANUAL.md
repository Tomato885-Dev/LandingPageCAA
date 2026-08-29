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
7. [La línea de tiempo (sección Proyectos)](#7-la-línea-de-tiempo-sección-proyectos)
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
│   ├── img/                    ← 📷 AQUÍ VAN LAS IMÁGENES (logo, portadas, favicon)
│   │   └── equipo/             ← 📷 AQUÍ VAN LAS FOTOS DE LOS INTEGRANTES
│   ├── logos/                  ← 📷 AQUÍ VAN LOS LOGOS DE COLABORADORES
│   └── video/                  ← 🎬 AQUÍ VAN LOS VIDEOS DE FONDO
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
  destacado: '+2',
  texto: 'Periodo 2027 · ¡Vota Carlos por un CAA con experiencia!',
},
```

Si no quieres esa etiqueta, escribe:

```js
etiqueta: null,
```

### Ejemplo 3: cambiar las cifras de la portada

```js
estadisticas: [
  { icono: 'usuarios', numero: '2.100', etiqueta: 'Estudiantes representados' },
  { icono: 'destello', numero: '63', tachado: true, etiqueta: 'Menos proyectos, más impacto.' },
  { icono: 'objetivo', numero: '14', etiqueta: 'Proyectos pensados para generar un impacto real' },
],
```

- Para **cambiar** una cifra: edita `numero` y `etiqueta`.
- Para **agregar** una tercera: copia una línea completa y pégala debajo.
- Para **quitar** una: borra la línea completa.
- Para que un número salga **con una línea encima** (como cuando se descarta una
  cifra), agrega `tachado: true,` dentro de esa línea. La raya sale en rojo.
  Si no quieres el tachado, simplemente no escribas ese campo.
- Los nombres de iconos posibles están en el [punto 12](#12-iconos-cuáles-hay-y-cómo-agregar-otros).

### Ejemplo 4: textos largos y el enlace "Leer más"

Cuando un texto es muy largo, no se muestra entero de golpe: se deja visible
lo importante y el resto queda detrás de un enlace **"Leer más"** que se abre
hacia abajo. Lo que está arriba **no se mueve**.

Así funcionan las tarjetas de **Visión** y **Misión**
(`src/contenido/vision-mision.js`):

```js
    {
      icono: 'brujula',
      etiqueta: 'Visión',
      titulo: 'Visión',

      texto: 'Primer párrafo. SE VE SIEMPRE.',

      puntos: [                      // los 3 ✓ rojos, SE VEN SIEMPRE
        'Frase clave uno.',
        'Frase clave dos.',
        'Frase clave tres.',
      ],

      masTexto: [                    // esto queda detrás de "Leer más"
        'Segundo párrafo.',

        'Tercer párrafo.',
      ],
    },
```

- Para **mover un párrafo** de escondido a siempre visible, córtalo de
  `masTexto` y pégalo en `texto` (o al revés).
- Si borras `masTexto` o lo dejas en `[]`, **el enlace "Leer más" desaparece
  solo** y la tarjeta queda como una tarjeta normal.
- Los párrafos largos se cortan en varias líneas con ` + ` al final de cada
  una. Ese `+` no sale en la página.

---

### Ejemplo 5: escribir el texto de los "Pilares"

Al final de la sección **Visión y Misión** hay dos barras grandes ("Ejecutar" e
"Impulsar"). Al pincharlas se abre un panel con texto. Se editan en
`src/contenido/vision-mision.js`, dentro de `pilares:`.

| Campo | Para qué sirve |
|---|---|
| `nombre` | El título grande de la barra |
| `bajada` | Frase corta que se ve **siempre**, aunque el pilar esté cerrado. Déjala en `''` si no la quieres |
| `icono` | El icono del cuadrado rojo. Los nombres están en el [punto 12](#12-iconos-cuáles-hay-y-cómo-agregar-otros) |
| `texto` | Lo que aparece al desplegar. Uno o varios párrafos |
| `puntos` | Frases cortas con un ✓ rojo. Puede quedar en `[]` |

**Un solo párrafo** se escribe entre comillas:

```js
    {
      nombre: 'Ejecutar',
      bajada: 'Que las ideas pasen del papel a la realidad.',
      icono: 'rayo',
      texto: 'Un proyecto no vale por cómo suena, sino por si se puede ' +
             'hacer bien.',
      puntos: [],
    },
```

**Varios párrafos** van entre corchetes, cada uno entre comillas y separado
del siguiente por una coma. Así están escritos los dos pilares actuales:

```js
      texto: [
        'Primer párrafo. Si es largo, se corta en varias líneas con  + ' +
        'al final de cada una, como esta.',

        'Segundo párrafo.',
      ],
```

Ese `+` al final de la línea no sale en la página: solo sirve para que el
texto no quede en una línea eterna dentro del archivo.

Si dejas `texto` y `puntos` vacíos, el panel muestra un aviso gris que dice
*"Escribe aquí el texto de este pilar."*. **Ese aviso desaparece solo** apenas
escribas algo; no hay que tocar nada más.

**Para agregar un tercer pilar:** copia un bloque `{ … },` completo y pégalo
dentro de la lista. Las barras se acomodan solas.
**Para quitar uno:** borra su bloque completo.

Los dos pilares se pueden abrir al mismo tiempo: abrir uno no cierra el otro.

---

## 5. Cambiar títulos y subtítulos

### Título gigante de la portada

`src/contenido/hero.js`:

```js
titulo: 'Cuidamos nuestra historia,\nConstruimos nuestro futuro',
```

Este título se anima palabra por palabra. Lo ideal son **entre 5 y 9 palabras**.

Ese `\n` que ves en el medio es un **salto de línea forzado**: obliga a que
"Construimos nuestro futuro" empiece en una línea nueva. Úsalo donde quieras
cortar el título a mano. Si no pones ningún `\n`, las palabras se acomodan solas
según el ancho de la pantalla:

```js
titulo: 'Una comunidad estudiantil que se atreve a más',
```

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

**Si el texto es largo** (como en "¿Por qué nosotros?"), se puede partir en
tres, y así no cae todo de golpe sobre el lector:

```js
  intro: [                       // SE VE SIEMPRE
    'Primer párrafo.',
    'Segundo párrafo.',
  ],

  introMas: [                    // detrás del enlace "Leer más"
    'Tercer párrafo.',
    'Cuarto párrafo.',
  ],

  cierre: 'La frase final, destacada con una línea roja al costado. ' +
          'También SE VE SIEMPRE.',
```

- Al pinchar "Leer más" el texto crece **hacia abajo**: nada de lo que está
  arriba se mueve de lugar.
- Para mover un párrafo de escondido a siempre visible, córtalo de `introMas`
  y pégalo al final de `intro` (o al revés).
- Si dejas `introMas: []`, **el enlace desaparece solo**.
- `cierre` es opcional: si lo dejas en `''`, no sale.

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
| Fotos del equipo | `src/contenido/nosotros.js` | `equipo.integrantes[].foto` |
| Fotos de proyectos | `src/contenido/proyectos.js` | `proyectos[].imagen` |
| Logos de colaboradores | `src/contenido/colaboradores.js` | `colaboradores[].logo` |
| Icono de la pestaña (favicon) | `index.html` | `<link rel="icon" ...>` |
| Imagen al compartir en redes | `index.html` | `<meta property="og:image" ...>` |

> **Mientras no pongas una imagen**, la página muestra un recuadro gris que dice
> "Agrega aquí tu imagen". Así siempre sabes dónde falta contenido y la página
> nunca se ve rota. Lo mismo pasa si la ruta está escrita pero el archivo
> todavía no se ha subido: sale el marcador, no el icono de imagen rota.

### Las fotos del equipo

En `src/contenido/nosotros.js`, cada integrante lleva **solo su nombre y su
foto** (no hay cargos):

```js
equipo: {
  titulo: 'Nuestro núcleo',
  integrantes: [
    { nombre: 'Carlos Gómez', foto: 'assets/img/equipo/carlos-gomez.jpg' },
    { nombre: 'Tomás León',   foto: 'assets/img/equipo/tomas-leon.jpg' },
    ...
  ],
},
```

**Para poner las fotos:** sube los archivos a `assets/img/equipo/` con los
nombres de archivo que ya están escritos en cada línea (`carlos-gomez.jpg`,
`tomas-leon.jpg`, …). La lista completa está en `assets/img/equipo/README.md`.
No hay que tocar el código.

> Los nombres de archivo van sin tildes ni ñ, aunque el nombre que se muestra
> en la página sí las lleve. Son dos cosas distintas: el archivo y el texto.

Las fotos deben ser **verticales, proporción 4:5** (por ejemplo 800 × 1000 px).
El recuadro recorta al centro, así que deja la cara centrada y con aire arriba.

**Para agregar o quitar integrantes:** copia o borra una línea `{ ... }`
completa. El diseño se reacomoda solo y **centra la última fila** si queda
incompleta (con 7 integrantes quedan 4 arriba y 3 abajo, centrados).

> Si algún día quieres mostrar el cargo de alguien, agrega
> `cargo: 'Presidencia',` dentro de su línea. Si no está escrito, no se
> muestra nada.

### Cambiar el logo del menú

El logo aparece en dos lugares: arriba a la izquierda en el menú, y abajo en el
pie de página. Los dos salen del **mismo** archivo, así que se cambia una sola vez.

En `src/contenido/sitio.js`:

```js
marca: {
  nombre: 'CAA 2027',
  nombreLargo: '¡Vota Carlos!',
  logoLetra: 'C',                            // respaldo, si NO hay imagen
  logoImagen: 'assets/img/logo-carlos.png',  // ← la ruta de tu logo
},
```

**Para poner tu logo, en 2 pasos:**

1. Sube el archivo del logo a la carpeta `assets/img/` con el nombre
   `logo-carlos.png`.
2. Listo. No hay que tocar nada más: la ruta ya está escrita.

Si prefieres otro nombre de archivo, cambia también la ruta de `logoImagen`.

**Cómo debe ser el archivo del logo:**

- Formato `.png` (o `.svg` si lo tienes vectorial, se ve más nítido).
- **Cuadrado**, por ejemplo 512 × 512 px. El logo se muestra dentro de un
  recuadro de esquinas redondeadas, como el icono de una aplicación.
- Puede tener su propio fondo de color (por ejemplo el fondo rojo de la
  campaña): el recuadro lo respeta y le pone encima el borde de vidrio del
  sitio, para que combine con el resto.
- Deja poco margen alrededor del dibujo: mientras menos espacio vacío,
  más grande se ve el logo.
- Menos de 200 KB.

> **Si la imagen no existe o está mal escrita la ruta, la página no se rompe:**
> vuelve sola a mostrar la letra de `logoLetra`. Así que puedes dejar la ruta
> puesta aunque todavía no hayas subido el archivo.

### Cambiar los videos de fondo

Cada sección puede tener un video de fondo. En `src/contenido/hero.js` (la
portada) verás esto:

```js
fondo: {
  video: 'https://…/video.mp4',
  imagen: '',
},
```

**Para poner tu propio video, en 3 pasos:**

1. Copia tu archivo `.mp4` dentro de la carpeta `assets/video/`.
   Ponle un nombre sin espacios ni acentos, por ejemplo `portada.mp4`.
2. En `src/contenido/hero.js`, cambia la línea del `video` por la ruta de tu
   archivo:

```js
fondo: {
  video: 'assets/video/portada.mp4',
  imagen: '',
},
```

3. Guarda y recarga con `Ctrl + F5`.

Los videos de las otras secciones se cambian igual, pero en su propio archivo:
`nosotros.js`, `vision-mision.js`, `proyectos.js` o `colaboradores.js`.

**Otras opciones:**

- Para usar un video que ya está en internet: pega la dirección completa
  (`'https://…/video.mp4'`). Tiene que ser un enlace directo al archivo `.mp4`,
  **no** sirve un enlace de YouTube ni de Google Drive.
- Para **quitar el video y usar una imagen fija**:

```js
fondo: {
  video: '',
  imagen: 'assets/img/portada.jpg',
},
```

- Para **dejar el fondo negro**: deja los dos campos vacíos.

> Los videos deben durar poco (8 a 20 segundos) y pesar poco (menos de 10 MB):
> se repiten solos en bucle, sin sonido y con un fundido automático.
> Hay más consejos en `assets/video/README.md`.

### El velo: que el texto se lea sobre el video

Encima de cada video hay una **capa oscura** (el "velo"). Sin ella, un video
claro —un cielo, un día soleado, una toma aérea— hace que el texto blanco
desaparezca y la portada quede ilegible.

Si tu video es muy oscuro y quieres que se vea más, o al revés, regula el velo
en `src/estilos/theme.css`:

```css
--velo-intensidad: 1;
```

| Valor | Resultado |
|---|---|
| `0` | Sin velo. El video se ve tal cual (solo sirve con videos muy oscuros). |
| `0.5` | Velo suave. El video se luce más, el texto se lee justo. |
| `1` | **Valor actual.** El texto se lee siempre. |
| `1.3` | Velo fuerte. Para videos muy luminosos o con mucho detalle. |

Es un solo número y afecta a todas las secciones con video a la vez.

---

## 7. La línea de tiempo (sección Proyectos)

La sección **Proyectos** ya no son tarjetas: es una **línea de tiempo** del
mandato. Cada actividad es una caja que se puede pinchar para leer su detalle.

- En **computador** se dibuja horizontal, con los meses en el eje.
- En **celular** la misma información aparece vertical, mes por mes. Una línea
  horizontal no cabe en un teléfono, por eso hay dos versiones. **No hay que
  escribir nada dos veces**: las dos salen de la misma lista.

Todo se edita en `src/contenido/proyectos.js`, dentro de `lineaTiempo`.

### Agregar una actividad

Copia una línea completa dentro de `actividades: [ ... ]` y cámbiale los datos:

```js
      { tipo: 'propuesta', nombre: 'Nombre corto', desde: 'May 27', detalle: '' },
```

| Campo | Para qué sirve |
|---|---|
| `tipo` | `'propuesta'` = **rojo** (lo que proponen ustedes) · `'tradicional'` = **verde** (lo que el colegio ya hace) |
| `nombre` | El texto de la caja. Mientras más corto, mejor |
| `desde` | El mes. Tiene que estar escrito **igual** que en la lista `meses` |
| `hasta` | Solo si dura varios meses: dibuja una barra larga. Si es de un mes, no escribas este campo |
| `permanente` | `true` le pone la flecha (→): empieza ese mes y sigue todo el año. No lleva `hasta` |
| `detalle` | El texto que se lee al pinchar |

Ejemplos de los tres casos:

```js
      // de un solo mes
      { tipo: 'propuesta', nombre: 'Noche Verde 1', desde: 'May 27', detalle: '' },

      // barra larga
      { tipo: 'propuesta', nombre: 'Paseos Culturales', desde: 'Mar 27', hasta: 'Oct 27', detalle: '' },

      // permanente (con flecha)
      { tipo: 'propuesta', nombre: 'CAA 911', desde: 'Oct 26', permanente: true, detalle: '' },
```

**Para quitar una actividad:** borra su línea completa.
**Para moverla de mes:** cambia el `desde`. Las cajas se reacomodan solas para
no pisarse entre ellas; no hay que ordenar nada a mano.

### Escribir el detalle

`detalle` puede ser una frase entre comillas, o varios párrafos entre corchetes:

```js
      detalle: [
        'Primer párrafo.',

        'Segundo párrafo.',
      ],
```

Mientras esté vacío, el cuadro muestra un aviso gris que dice *"Escribe aquí el
detalle de esta actividad."*. **Ese aviso desaparece solo** apenas escribas algo.

### Los meses del eje

```js
    meses: ['Oct 26', 'Nov 26', ... , 'Oct 27'],
```

Si agregas o quitas un mes, el eje se reparte solo. Eso sí: si borras un mes que
alguna actividad estaba usando, esa actividad deja de aparecer. Cambia también su
`desde`.

### Los colores

Están en `src/estilos/theme.css`:

```css
  --color-propuesta: var(--color-marca);   /* rojo  */
  --color-tradicional: #15803d;            /* verde */
```

El verde está elegido para que el nombre blanco encima se lea igual de bien que
sobre el rojo. Si lo cambias por uno más claro, el texto se empieza a perder.

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
boton: { texto: 'Escríbenos', url: 'mailto:carlosgomezp@verbo.cl' },
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
| Recuadro del final de Proyectos *(quitado)* | `src/contenido/proyectos.js` | `cta` está en `null` |
| Recuadro del final de Colaboradores *(quitado)* | `src/contenido/colaboradores.js` | `cta` está en `null` |
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

  --vidrio-opacidad: 0.14;        /* cuánto rojo tiñe el vidrio  */
  --vidrio-borde-marca: 0.9;      /* rojo en los bordes          */
  --brillo-marca: 0.9;            /* brillo rojo al pasar el mouse */
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
| El tinte rojo sobre los videos | clase `.velo-fondo` en `theme.css` |
| El cuadrado del icono de cada tarjeta | clase `.caja-icono` en `theme.css` |
| La barra de scroll y el texto seleccionado | final de `theme.css` |

### Subir o bajar la intensidad del rojo

**Un escalón más suave** (el ajuste anterior del sitio):

```css
--vidrio-opacidad: 0.06;
--vidrio-borde-marca: 0.6;
--brillo-marca: 0.62;
```

**Aún más rojo del que hay ahora:**

```css
--vidrio-opacidad: 0.20;
--vidrio-borde-marca: 1;
--brillo-marca: 1;
```

**Muy sutil, casi sin rojo:**

```css
--vidrio-opacidad: 0.02;
--vidrio-borde-marca: 0.18;
--brillo-marca: 0.2;
```

**Un escalón más marcado:**

```css
--vidrio-opacidad: 0.09;
--vidrio-borde-marca: 0.8;
--brillo-marca: 0.85;
```

**Quitar el resplandor de fondo de las secciones:** en `theme.css`, busca
`.resplandor-marca` y baja los valores `0.26` y `0.18` a `0`.

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
- `columnas`: las listas de enlaces. Ahora hay una sola ("El CAA"). Puedes
  agregar otra copiando un bloque completo `{ titulo: …, enlaces: [ … ] }`.
  Los datos de contacto se agregan solos como última columna, siempre a la
  derecha, así que el pie queda equilibrado haya una o tres columnas.
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
| Los integrantes del equipo y sus fotos | `src/contenido/nosotros.js` |
| La visión, la misión y los pilares | `src/contenido/vision-mision.js` |
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
