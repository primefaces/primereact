import { globSync } from 'glob';
import { defineConfig } from 'tsup';
import TsupCommonOptions from '../../build.config';

const entry = globSync('src/**/index.ts').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig([
    {
        ...TsupCommonOptions,
        entry
    },
    {
        ...TsupCommonOptions,
        entry: {
            'umd/index': 'src/index.ts'
        },
        format: ['iife'],
        dts: false,
        minify: false,
        globalName: 'PrimeReact.Styles',
        outExtension: () => ({ js: `.js` })
    }
]);
