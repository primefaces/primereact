import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        environment: 'jsdom',
        clearMocks: true,
        setupFiles: path.resolve(__dirname, 'vitest.setup.ts'),
        coverage: {
            reporter: ['text', 'json', 'html']
        },
        alias: {
            '^@primereact/(.*)/(.*)$': './packages/$1/src/$2'
        }
    }
});
