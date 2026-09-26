# Logos de los auspicios

Aquí van las 20 imágenes, con estos nombres de archivo exactos.
Están agrupadas por **nivel**: el nivel decide de qué tamaño se ve la
casilla en la página, y se escribe en `src/contenido/colaboradores.js`.

**Nivel 1 — los principales (los más grandes)** · 8

| # | Marca | Archivo |
|---|---|---|
| 1 | Starbucks | `starbucks.png` |
| 2 | Just Burger | `just-burger.png` |
| 3 | CCU | `ccu.png` |
| 4 | Under Armour | `under-armour.png` |
| 5 | Pepsi | `pepsi.png` |
| 6 | Crush | `crush.png` |
| 7 | Gatorade | `gatorade.png` |
| 8 | Limón Soda | `limon-soda.png` |

**Nivel 2 — los siguientes** · 5

| # | Marca | Archivo |
|---|---|---|
| 9 | Açai | `acai.jpg` |
| 10 | Gnomo | `gnomo.png` |
| 11 | AndPac | `andpac.png` |
| 12 | School of Rock | `school-of-rock.png` |
| 13 | Daviu | `daviu.png` |

**Nivel 3 — el resto** · 7

| # | Marca | Archivo |
|---|---|---|
| 14 | Dimacofi | `dimacofi.png` |
| 15 | FEN | `fen.png` |
| 16 | Preuniversitario Gauss | `preuniversitario-gauss.png` |
| 17 | Elite | `elite.png` |
| 18 | Andesgear | `andesgear.png` |
| 19 | Aprende + | `aprende-mas.png` |
| 20 | Preu Filadd | `preu-filadd.png` |

El orden de la tabla es el orden en que aparecen en la página. Para mover un
colaborador de lugar, mueve su bloque en `src/contenido/colaboradores.js`; para
subirlo o bajarlo de tamaño, cámbiale el número de `nivel`.

## Cómo deben ser los archivos

Cada logo se muestra sobre una **placa blanca**, así que da lo mismo si el
logo es oscuro o claro: los dos se ven bien. No hace falta la versión blanca
de la marca.

- Formato `.png`, de preferencia con **fondo transparente**. Si el logo es
  en realidad una imagen con fondo (una foto o una textura, como el de
  Açai), va en `.jpg`: en `.png` pesaría el triple sin verse mejor.
- **600 px en el lado largo.** La forma no importa: el recuadro muestra el
  logo entero sin recortarlo, sea ancho, cuadrado o alto.
- Menos de 150 KB cada uno. Son 20 archivos y la página la van a abrir
  cientos de personas: cada logo pesado se nota al cargar.
- **600 px es importante sobre todo en el nivel 1**, que se ve en grande. Un
  logo chico estirado se ve borroso justo en las casillas más visibles.

### Si el logo es blanco

Todas las casillas van sobre **placa blanca**, así que un logo blanco con
fondo transparente no se vería. Para esos, deja el **fondo oscuro pegado
dentro del archivo** (así están Daviu y AndPac): en la casilla se ve como un
recuadro oscuro sobre el marco blanco, y el logo se lee bien.

> ⚠️ **Lo más importante: recorta el margen blanco antes de subirlo.**
>
> Los logos que se descargan de internet suelen venir con mucho espacio
> blanco alrededor. Ese margen cuenta como parte de la imagen, así que el
> recuadro achica todo para que quepa y el logo queda **mucho más chico que
> los vecinos**, aunque el archivo sea enorme.
>
> Si no sabes cómo recortarlo, mándamelo tal cual y lo dejo listo.

Mientras un logo no esté subido, su recuadro muestra el marcador
"Agrega aquí el logo". La página no se rompe.
