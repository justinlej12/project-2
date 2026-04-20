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

    html({
      minify: true,
    }),

    // 🔥 THIS IS WHAT YOUR PROFESSOR MEANS
    copy({
      targets: [
        { src: 'elements/images/**/*', dest: 'public/images' },
        { src: 'api/**/*', dest: 'public/api' }
      ],
    }),

    nodeResolve(),

    // 🔥 FIXED LINE (THIS SOLVES YOUR ERROR)
    esbuild({
      minify: true,
      target: 'esnext'
    }),

    importMetaAssets(),

    babel({
      plugins: [
        [
          'babel-plugin-template-html-minifier',
          {
            modules: {
              lit: ['html', { name: 'css', encapsulation: 'style' }]
            },
            htmlMinifier: {
              collapseWhitespace: true,
              removeComments: true,
              minifyCSS: true,
            },
          },
        ],
      ],
    }),
  ],
};