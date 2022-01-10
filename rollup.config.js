import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

const globals = {
  ...packageJson.devDependencies,
};

export default {
  input: './src/index.ts',
  output: [
    {
      // CommonJS (NodeJS)
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      // ESM (Angular)
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true
    })
  ],
  external: Object.keys(globals)
};
