import { globSync } from 'glob';
import { defineConfig } from 'tsup';
import TsupOptions from '../../tsup.config';

const entry = globSync('src/**/index.ts').reduce((acc: Record<string, string>, file: string) => {
    const name = file.replace(/^src\//, '').replace(/\.ts$/, '');

    acc[name] = file;

    return acc;
}, {});

export default defineConfig([
    {
        ...TsupOptions,
        entry
    }
]);
