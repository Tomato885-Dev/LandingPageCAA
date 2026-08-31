/* ============================================================================
   construir.mjs — Arma la versión optimizada que se publica en internet
   ----------------------------------------------------------------------------
   NO hace falta ejecutarlo a mano: GitHub lo corre solo cada vez que subes un
   cambio (ver .github/workflows/publicar.yml).

   Qué hace, en simple:

     1. Lee index.html y saca de ahí, EN ORDEN, la lista de archivos de la
        página. index.html sigue siendo la única lista: si agregas un archivo
        ahí, este script lo toma solo.
     2. Traduce los .jsx a JavaScript normal y junta todo en un solo archivo.
        (Hoy esa traducción la hace el navegador de cada visitante; así se
        hace una sola vez, acá.)
     3. Genera la hoja de Tailwind con las clases que la página realmente usa.
     4. Escribe dist/index.html apuntando a esos archivos ya listos, y usando
        las versiones "de producción" de React, que pesan mucho menos.
     5. Copia assets/ y los estilos propios.

   La carpeta dist/ es descartable: se regenera entera en cada publicación.
   ============================================================================ */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import * as babel from '@babel/core';
import * as esbuild from 'esbuild';

const ejecutar = promisify(execFile);
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(RAIZ, 'dist');

/* Versiones de producción de las librerías. Son las mismas versiones que usa
   la página de desarrollo, pero minificadas: pesan una fracción. */
const LIBRERIAS = [
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/framer-motion@11.11.17/dist/framer-motion.js',
];

const kb = (n) => (n / 1024).toFixed(1) + ' KB';

async function main() {
  const html = await fs.readFile(path.join(RAIZ, 'index.html'), 'utf8');

  /* ---- 1. Sacar de index.html la lista ordenada de archivos ---- */
  const archivos = [...html.matchAll(/<script[^>]*\ssrc="(src\/[^"]+)"/g)].map((m) => m[1]);
  if (!archivos.length) throw new Error('No se encontró ningún archivo de la página en index.html');

  /* ---- 2. Traducir los .jsx y juntar todo ---- */
  const partes = [];
  for (const rel of archivos) {
    const codigo = await fs.readFile(path.join(RAIZ, rel), 'utf8');
    if (rel.endsWith('.jsx')) {
      const salida = await babel.transformAsync(codigo, {
        presets: [['@babel/preset-react', { runtime: 'classic' }]],
        filename: rel,
        babelrc: false,
        configFile: false,
      });
      partes.push('/* ' + rel + ' */\n' + salida.code);
    } else {
      partes.push('/* ' + rel + ' */\n' + codigo);
    }
  }

  /* Cada archivo va dentro de su propia función para que las constantes de
     nivel superior (const { useState } = React, etc.) no choquen entre sí al
     quedar todas en el mismo archivo. En el navegador hoy no chocan porque
     cada <script> tiene su propio ámbito. */
  const juntado = partes.map((p) => '(function () {\n' + p + '\n})();').join('\n\n');

  const minificado = await esbuild.transform(juntado, {
    loader: 'js',
    minify: true,
    target: ['es2018'],
    legalComments: 'none',
  });

  await fs.rm(DIST, { recursive: true, force: true });
  await fs.mkdir(DIST, { recursive: true });
  await fs.writeFile(path.join(DIST, 'app.js'), minificado.code);

  /* ---- 3. Hoja de Tailwind con solo las clases que se usan ---- */
  await ejecutar('npx', [
    'tailwindcss',
    '-c', path.join(RAIZ, 'tailwind.config.js'),
    '-i', path.join(RAIZ, 'build', 'tailwind-entrada.css'),
    '-o', path.join(DIST, 'tailwind.css'),
    '--minify',
  ], { cwd: RAIZ });

  /* ---- 4. index.html de la versión publicada ---- */
  let salida = html;

  // Tailwind: fuera el que compila en el navegador, entra la hoja generada.
  salida = salida.replace('<script src="https://cdn.tailwindcss.com"></script>',
                          '<link rel="stylesheet" href="tailwind.css" />');
  salida = salida.replace(/  <script>\n    \/\/ Configuración de Tailwind[\s\S]*?\n  <\/script>\n/, '');

  // Librerías: versiones de producción, y fuera Babel (ya no hay nada que
  // traducir en el navegador).
  salida = salida.replace(
    /  <script src="https:\/\/unpkg\.com\/react@[\s\S]*?framer-motion\.js"><\/script>\n/,
    LIBRERIAS.map((u) => '  <script src="' + u + '" crossorigin="anonymous"></script>').join('\n') + '\n'
  );

  // Los 20 y tantos <script> de la página pasan a ser uno solo.
  const primero = salida.indexOf('  <script src="src/contenido/sitio.js"></script>');
  const ultimo = salida.indexOf('</body>');
  if (primero === -1 || ultimo === -1) throw new Error('No se pudo ubicar el bloque de scripts en index.html');
  salida = salida.slice(0, primero) + '  <script src="app.js"></script>\n\n' + salida.slice(ultimo);

  // Los estilos propios quedan al lado.
  salida = salida.replace('href="src/estilos/theme.css"', 'href="theme.css"');

  await fs.writeFile(path.join(DIST, 'index.html'), salida);

  /* ---- 5. Copiar lo demás ---- */
  await fs.copyFile(path.join(RAIZ, 'src', 'estilos', 'theme.css'), path.join(DIST, 'theme.css'));
  await fs.cp(path.join(RAIZ, 'assets'), path.join(DIST, 'assets'), { recursive: true });
  // GitHub Pages no debe procesar la carpeta con Jekyll.
  await fs.writeFile(path.join(DIST, '.nojekyll'), '');
  // Si hay dominio propio configurado, se respeta.
  try {
    await fs.copyFile(path.join(RAIZ, 'CNAME'), path.join(DIST, 'CNAME'));
    console.log('  CNAME copiado (dominio propio)');
  } catch { /* no hay dominio propio configurado, es lo normal */ }

  /* ---- Resumen ---- */
  const pesoApp = (await fs.stat(path.join(DIST, 'app.js'))).size;
  const pesoCss = (await fs.stat(path.join(DIST, 'tailwind.css'))).size;
  console.log('\nListo. Versión publicable en dist/');
  console.log('  archivos de la página juntados : ' + archivos.length);
  console.log('  app.js                         : ' + kb(pesoApp));
  console.log('  tailwind.css                   : ' + kb(pesoCss));
}

main().catch((e) => { console.error('\nFalló la construcción:\n', e); process.exit(1); });
