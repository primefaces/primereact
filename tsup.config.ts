import { Options } from 'tsup';

export default {
    format: ['esm'],
    outDir: 'dist',
    dts: false,
    external: [/^@(primereact|primeuix)\/(.*)$/, 'react', 'react-dom'],
    sourcemap: true,
    splitting: false,
    clean: true,
    minify: true
} as Options;
