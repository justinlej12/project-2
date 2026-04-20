import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'public',
  },
  preserveEntrySignatures: false,
  plugins: [
    // Allows HTML to be the entry point
    html({
      minify: true,
    }),

    // Copies assets so Vercel can find them
    copy({
      targets: [
        {
          src: 'elements/images/',
          dest: 'public/elements/',
          flatten: false,
        },
        {
          src: 'api/',
          dest: 'public/',
          flatten: false,
        },
        {
          src: [
            'node_modules/@haxtheweb/simple-icon/lib/svgs/*',
            '!node_modules/@haxtheweb/simple-icon/lib/svgs/elmsln-custom'
          ],
          dest: 'public/svgs',
          flatten: false,
        },
        {
          src: 'node_modules/@haxtheweb/hax-iconset/lib/svgs/*',
          dest: 'public/svgs',
          flatten: false,
        },
      ],
    }),

    // Resolves node_modules imports
    nodeResolve(),

    // Fixes your Vercel build error (IMPORTANT CHANGE)
    esbuild({
      minify: true,
      target: 'es2018',
    }),

    // Handles import.meta.url assets
    importMetaAssets(),

    // Minifies HTML/CSS inside Lit templates
    babel({
      plugins: [
        [
          'babel-plugin-template-html-minifier',
          {
            modules: {
              lit: ['html', { name: 'css', encapsulation: 'style' }],
            },
            failOnError: false,
            strictCSS: true,
            htmlMinifier: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              removeComments: true,
              caseSensitive: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
  ],
};