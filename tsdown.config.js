import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  format: 'esm',
  outDir: './lib',
  outputOptions: {
    polyfillRequire: false,
  },
});
