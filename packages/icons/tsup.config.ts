import { globSync } from 'glob';
import { defineConfig } from 'tsup';
import TsupCommonOptions from '../../build.config';

const entry = globSync('src/**/index.tsx').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.tsx$/, '');

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
            'base/index': 'src/base/index.ts'
        }
    },
    {
        ...TsupCommonOptions,
        entry: {
            'umd/index': 'src/index.ts'
        },
        format: ['iife'],
        dts: false,
        minify: false,
        globalName: 'PrimeReact.Icons',
        outExtension: () => ({ js: `.js` })
    }
]);
