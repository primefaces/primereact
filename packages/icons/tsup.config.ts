import { globSync } from 'glob';
import { defineConfig } from 'tsup';
import TsupOptions from '../../tsup.config';

const entry = globSync('src/**/index.{ts,tsx}').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.tsx?$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig([
    {
        ...TsupOptions,
        entry
    }
    /*{
        ...TsupOptions,
        entry: {
            'base/index': 'src/base/index.ts'
        }
    }*/
    /*{
        ...TsupOptions,
        entry: {
            'umd/index': 'src/index.ts'
        },
        format: ['iife'],
        dts: false,
        minify: false,
        globalName: 'PrimeReact.Icons',
        outExtension: () => ({ js: `.js` })
    }*/
]);
