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
    dir: 'dist',
  },
  preserveEntrySignatures: false,
  plugins: [
    html({
      minify: true,
    }),

    // ✅ THIS is critical for images + assets
    copy({
      targets: [
        { src: 'elements/images/**/*', dest: 'dist/elements/images' },
        { src: 'api/**/*', dest: 'dist/api' }
      ]
    }),

    nodeResolve(),

    // ✅ FIXED TARGET (your earlier error)
    esbuild({
      minify: true,
      target: 'es2020'
    }),

    importMetaAssets(),

    // ✅ THIS FIXES YOUR Xe.url ISSUE
    {
      name: 'fix-xe-url',
      renderChunk(code) {
        return code.replace(/Xe\.url/g, 'import.meta.url');
      }
    },

    babel({
      plugins: [
        [
          'babel-plugin-template-html-minifier',
          {
            modules: {
              lit: ['html', { name: 'css', encapsulation: 'style' }]
            },
            failOnError: false,
            strictCSS: true,
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