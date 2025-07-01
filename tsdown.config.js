import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: {
    compilerOptions: {
      removeComments: false,
    },
    isolatedDeclarations: false,
  },
  format: 'esm',
  outDir: './lib',
  outputOptions: {
    polyfillRequire: false,
  },
});
