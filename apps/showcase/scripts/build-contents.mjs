import { exec } from 'child_process';
import chokidar from 'chokidar';

const watcher = chokidar.watch(['docs', 'demo'], {
    ignored: /^\./,
    persistent: true,
    ignoreInitial: true
});

watcher
    .on('add', function (path) {
        //console.info('✅File\x1b[32m', path, '\x1b[0m has been added');

        if (path.endsWith('.tsx')) {
            exec('pnpm run build:store');
        } else {
            exec('pnpm run build:init');
        }
    })
    .on('change', function () {
        //console.info('🔄File\x1b[34m', path, '\x1b[0m has been changed');
        exec('pnpm run build:init');
    })
    .on('unlink', function () {
        //console.warn('🈁File\x1b[90m', path, '\x1b[0m has been removed');
        exec('pnpm run build:init');
    })
    .on('error', function () {
        //console.error('⛔Error happened', error);
    });
