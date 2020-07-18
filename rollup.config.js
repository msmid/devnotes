import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const basePlugins = [
  resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules',
    },
  }),
];

const external = ['lodash'];

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'cjs',
      plugins: basePlugins,
    },
    {
      file: 'dist/bundle.min.js',
      format: 'cjs',
      name: 'version',
      plugins: [...basePlugins, terser()],
    },
  ],
};
