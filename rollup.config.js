import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import fs from 'fs-extra';
import path from 'path';

import pkg from './package.json';

let entries = [];

let core = {};

// alias entries
const ALIAS_ICON_COMPONENT_ENTRIES = [
    { find: '../../iconbase/IconBase', replacement: 'primereact/iconbase' },
    { find: '../icon/angledoubledown', replacement: 'primereact/icon/angledoubledown' },
    { find: '../icon/angledoubleleft', replacement: 'primereact/icon/angledoubleleft' },
    { find: '../icon/angledoubleright', replacement: 'primereact/icon/angledoubleright' },
    { find: '../icon/angledoubleup', replacement: 'primereact/icon/angledoubleup' },
    { find: '../icon/angledown', replacement: 'primereact/icon/angledown' },
    { find: '../icon/angleleft', replacement: 'primereact/icon/angleleft' },
    { find: '../icon/angleright', replacement: 'primereact/icon/angleright' },
    { find: '../icon/angleup', replacement: 'primereact/icon/angleup' },
    { find: '../icon/arrowdown', replacement: 'primereact/icon/arrowdown' },
    { find: '../icon/arrowup', replacement: 'primereact/icon/arrowup' },
    { find: '../icon/ban', replacement: 'primereact/icon/ban' },
    { find: '../icon/bars', replacement: 'primereact/icon/bars' },
    { find: '../icon/calendar', replacement: 'primereact/icon/calendar' },
    { find: '../icon/check', replacement: 'primereact/icon/check' },
    { find: '../icon/chevrondown', replacement: 'primereact/icon/chevrondown' },
    { find: '../icon/chevronleft', replacement: 'primereact/icon/chevronleft' },
    { find: '../icon/chevronright', replacement: 'primereact/icon/chevronright' },
    { find: '../icon/chevronup', replacement: 'primereact/icon/chevronup' },
    { find: '../icon/exclamationtriangle', replacement: 'primereact/icon/exclamationtriangle' },
    { find: '../icon/eye', replacement: 'primereact/icon/eye' },
    { find: '../icon/eyeslash', replacement: 'primereact/icon/eyeslash' },
    { find: '../icon/filter', replacement: 'primereact/icon/filter' },
    { find: '../icon/filterslash', replacement: 'primereact/icon/filterslash' },
    { find: '../icon/infocircle', replacement: 'primereact/icon/infocircle' },
    { find: '../icon/minus', replacement: 'primereact/icon/minus' },
    { find: '../icon/pencil', replacement: 'primereact/icon/pencil' },
    { find: '../icon/plus', replacement: 'primereact/icon/plus' },
    { find: '../icon/refresh', replacement: 'primereact/icon/refresh' },
    { find: '../icon/search', replacement: 'primereact/icon/search' },
    { find: '../icon/searchminus', replacement: 'primereact/icon/searchminus' },
    { find: '../icon/searchplus', replacement: 'primereact/icon/searchplus' },
    { find: '../icon/sortalt', replacement: 'primereact/icon/sortalt' },
    { find: '../icon/sortamountdown', replacement: 'primereact/icon/sortamountdown' },
    { find: '../icon/sortamountupalt', replacement: 'primereact/icon/sortamountupalt' },
    { find: '../icon/spinner', replacement: 'primereact/icon/spinner' },
    { find: '../icon/star', replacement: 'primereact/icon/star' },
    { find: '../icon/starfill', replacement: 'primereact/icon/starfill' },
    { find: '../icon/thlarge', replacement: 'primereact/icon/thlarge' },
    { find: '../icon/times', replacement: 'primereact/icon/times' },
    { find: '../icon/timescircle', replacement: 'primereact/icon/timescircle' },
    { find: '../icon/trash', replacement: 'primereact/icon/trash' },
    { find: '../icon/undo', replacement: 'primereact/icon/undo' },
    { find: '../icon/upload', replacement: 'primereact/icon/upload' },
    { find: '../icon/windowmaximize', replacement: 'primereact/icon/windowmaximize' },
    { find: '../icon/windowminimize', replacement: 'primereact/icon/windowminimize' }
];

const ALIAS_COMPONENT_ENTRIES = [
    { find: '../utils/Utils', replacement: 'primereact/utils' },
    { find: '../api/Api', replacement: 'primereact/api' },
    { find: '../hooks/Hooks', replacement: 'primereact/hooks' },
    { find: '../ripple/Ripple', replacement: 'primereact/ripple' },
    { find: '../csstransition/CSSTransition', replacement: 'primereact/csstransition' },
    { find: '../portal/Portal', replacement: 'primereact/portal' },
    { find: '../keyfilter/KeyFilter', replacement: 'primereact/keyfilter' },
    ...ALIAS_ICON_COMPONENT_ENTRIES,
    { find: '../tooltip/Tooltip', replacement: 'primereact/tooltip' },
    { find: '../virtualscroller/VirtualScroller', replacement: 'primereact/virtualscroller' },
    { find: '../terminalservice/TerminalService', replacement: 'primereact/terminalservice' },
    { find: '../overlayservice/OverlayService', replacement: 'primereact/overlayservice' },
    { find: '../checkox/Checkbox', replacement: 'primereact/checkbox' },
    { find: '../button/Button', replacement: 'primereact/button' },
    { find: '../inputtext/InputText', replacement: 'primereact/inputtext' },
    { find: '../inputnumber/InputNumber', replacement: 'primereact/inputnumber' },
    { find: '../messages/Messages', replacement: 'primereact/messages' },
    { find: '../progressbar/ProgressBar', replacement: 'primereact/progressbar' },
    { find: '../dropdown/Dropdown', replacement: 'primereact/dropdown' },
    { find: '../dialog/Dialog', replacement: 'primereact/dialog' },
    { find: '../paginator/Paginator', replacement: 'primereact/paginator' },
    { find: '../tree/Tree', replacement: 'primereact/tree' }
];

// dependencies
const GLOBAL_DEPENDENCIES = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-transition-group': 'ReactTransitionGroup'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES,
    ...ALIAS_COMPONENT_ENTRIES.reduce((acc, cur) => ({ ...acc, [cur.replacement]: cur.replacement.replace('/', '.') }), {})
};

// externals
const EXTERNAL = ['react', 'react-dom', 'react-transition-group', '@babel/runtime', '@fullcalendar/core', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...ALIAS_COMPONENT_ENTRIES.map((entries) => entries.replacement)];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties'],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const ALIAS_PLUGIN_OPTIONS_FOR_COMPONENT = {
    entries: ALIAS_COMPONENT_ENTRIES
};

const REPLACE_PLUGIN_OPTIONS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true
};

const RESOLVE_PLUGIN_OPTIONS = {
    extensions: ['.js']
};

const COMMONJS_PLUGIN_OPTIONS = {
    exclude: process.env.INPUT_DIR + '**',
    sourceMap: false
};

const POSTCSS_PLUGIN_OPTIONS = {
    sourceMap: false
};

const TERSER_PLUGIN_OPTIONS = {
    compress: {
        keep_infinity: true,
        pure_getters: true,
        reduce_funcs: false
    }
};

const PLUGINS = [replace(REPLACE_PLUGIN_OPTIONS), resolve(RESOLVE_PLUGIN_OPTIONS), commonjs(COMMONJS_PLUGIN_OPTIONS), babel(BABEL_PLUGIN_OPTIONS), postcss(POSTCSS_PLUGIN_OPTIONS)];

const PLUGINS_COMPONENT = [alias(ALIAS_PLUGIN_OPTIONS_FOR_COMPONENT), ...PLUGINS];

function addEntry(name, input, output, isComponent = true) {
    const exports = name === 'primereact.api' || name === 'primereact' ? 'named' : 'auto';
    const useCorePlugin = ALIAS_COMPONENT_ENTRIES.some((entry) => entry.replacement === name.replaceAll('.', '/'));
    const plugins = isComponent ? PLUGINS_COMPONENT : PLUGINS;
    const external = isComponent ? EXTERNAL_COMPONENT : EXTERNAL;
    const inlineDynamicImports = true;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
            external,
            inlineDynamicImports
        };
    };

    const get_CJS_ESM = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'cjs',
                    file: `${output}.cjs${isMinify ? '.min' : ''}.js`,
                    exports
                },
                {
                    format: 'esm',
                    file: `${output}.esm${isMinify ? '.min' : ''}.js`,
                    exports
                }
            ]
        };
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name,
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: isComponent ? GLOBAL_COMPONENT_DEPENDENCIES : GLOBAL_DEPENDENCIES,
                    exports
                }
            ]
        };
    };

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            const { name, format } = outputOptions;

            if (format === 'iife') {
                Object.keys(bundle).forEach((id) => {
                    const chunk = bundle[id];
                    const folderName = name.replace('primereact.', '').replaceAll('.', '/');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js' : '.js'}`;

                    core[filePath] ? (core[filePath][folderName] = chunk.code) : (core[filePath] = { [`${folderName}`]: chunk.code });
                });
            }
        }
    };
}

function addCore() {
    const lastEntry = entries[entries.length - 1];

    lastEntry.plugins = [
        ...lastEntry.plugins,
        {
            name: 'coreMergePlugin',
            generateBundle() {
                Object.entries(core).forEach(([filePath, value]) => {
                    const code = ALIAS_COMPONENT_ENTRIES.reduce((val, entry) => {
                        const name = entry.replacement.replace('primereact/', '');

                        val += value[name] + '\n';

                        return val;
                    }, '');

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function (err) {
                        if (err) {
                            // eslint-disable-next-line no-console
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ];
}

function addComponent() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach((file) => {
                const name = file.split(/(.js)$/)[0].toLowerCase();

                if (name === folderName) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    addEntry('primereact.' + folderName, input, output, true);
                }
            });
        });
}

function addIcon() {
    const iconDir = path.resolve(__dirname, process.env.INPUT_DIR + 'icon');

    fs.readdirSync(path.resolve(__dirname, iconDir), { withFileTypes: true })
        .filter((dir) => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, iconDir + '/' + folderName)).forEach((file) => {
                if (/\.js$/.test(file)) {
                    const name = file.split(/(.js)$/)[0].toLowerCase();
                    const input = process.env.INPUT_DIR + 'icon/' + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + 'icon/' + folderName + '/' + name;

                    addEntry('primereact.icon.' + folderName, input, output, true);
                }
            });
        });
}

function addPrimeReact() {
    const input = process.env.INPUT_DIR + 'primereact.all.js';
    const output = process.env.OUTPUT_DIR + 'primereact.all';

    addEntry('primereact', input, output, false);
}

function addPackageJson() {
    const outputDir = path.resolve(__dirname, process.env.OUTPUT_DIR);
    const packageJson = `{
    "name": "primereact",
    "version": "${pkg.version}",
    "private": false,
    "author": "PrimeTek Informatics",
    "description": "PrimeReact is an open source UI library for React featuring a rich set of 90+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.",
    "homepage": "https://www.primereact.org",
    "repository": {
        "type": "git",
        "url": "https://github.com/primefaces/primereact.git"
    },
    "license": "MIT",
    "bugs": {
        "url": "https://github.com/primefaces/primereact/issues"
    },
    "keywords": [
        "primereact",
        "react",
        "hooks",
        "next",
        "nextjs",
        "ui-kit",
        "ui library",
        "component library",
        "material",
        "material design",
        "bootstrap",
        "tailwind theme",
        "dark theme",
        "react components",
        "responsive components"
    ],
    "unpkg": "primereact.all.min.js",
    "jsdelivr": "primereact.all.min.js",
    "main": "primereact.all.min.js",
    "module": "primereact.all.esm.min.js",
    "web-types": "web-types.json",
    "peerDependencies": {
        "@types/react": "^17.0.0 || ^18.0.0",
        "react": "^17.0.0 || ^18.0.0",
        "react-dom": "^17.0.0 || ^18.0.0",
        "primeicons": "^5.0.0 || ^6.0.0"
    },
    "peerDependenciesMeta": {
        "@types/react": {
            "optional": true
        }
    },
    "dependencies": {
        "@types/react-transition-group": "^4.4.1",
        "react-transition-group": "^4.4.1"
    },
    "sideEffects": [
        "**/*.css"
    ]
}`;

    !fs.existsSync(outputDir) && fs.mkdirSync(outputDir);
    fs.writeFileSync(path.resolve(outputDir, 'package.json'), packageJson);
}

addIcon();
addComponent();
addPrimeReact();
addCore();
addPackageJson();

export default entries;
