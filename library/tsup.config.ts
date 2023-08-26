import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  format: ['esm', 'cjs'],
  dts: true,
  outDir: './dist',
  minify: 'terser',
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,
  shims: true,
  splitting: false,
  sourcemap: true,
  bundle: true,
});
