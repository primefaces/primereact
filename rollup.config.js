import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';

import fs from 'fs-extra';
import path from 'path';

const INPUT_DIR = 'src/components/';
const OUTPUT_DIR = 'dist/';

let entries = [];

// alias entries
const ALIAS_ENTRIES = [
    { find: '../api/Api', replacement: 'primereact/api' },
    { find: '../terminalservice/TerminalService', replacement: 'primereact/terminalservice' },
    { find: '../virtualscroller/VirtualScroller', replacement: 'primereact/virtualscroller' },
    { find: '../button/Button', replacement: 'primereact/button' },
    { find: '../inputtext/InputText', replacement: 'primereact/inputtext' },
    { find: '../paginator/Paginator', replacement: 'primereact/paginator' },
    { find: '../messages/Messages', replacement: 'primereact/messages' },
    { find: '../progressbar/ProgressBar', replacement: 'primereact/progressbar' },
    { find: '../checkox/Checkbox', replacement: 'primereact/checkbox' },
    { find: '../dropdown/Dropdown', replacement: 'primereact/dropdown' },
    { find: '../tree/Tree', replacement: 'primereact/tree' },
    { find: '../dialog/Dialog', replacement: 'primereact/dialog' }
];

const ALIAS_COMPONENT_ENTRIES = [
    ...ALIAS_ENTRIES,
    ...[
        { find: '../ripple/Ripple', replacement: 'primereact/core' },
        { find: '../utils/Utils', replacement: 'primereact/core' },
        { find: '../tooltip/Tooltip', replacement: 'primereact/core' },
        { find: '../keyfilter/KeyFilter', replacement: 'primereact/core' },
        { find: '../overlayservice/OverlayService', replacement: 'primereact/core' },
        { find: '../csstransition/CSSTransition', replacement: 'primereact/core' },
        { find: '../portal/Portal', replacement: 'primereact/core' }
    ]
];

// dependencies
const GLOBAL_DEPENDENCIES = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-transition-group': 'ReactTransitionGroup'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES, ...(ALIAS_COMPONENT_ENTRIES.reduce((acc, cur) => ({ ...acc, [cur.replacement]: cur.replacement.replace('\/', '.') }), {}))
};

const GLOBAL_CORE_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES, ...(ALIAS_ENTRIES.reduce((acc, cur) => ({ ...acc, [cur.replacement]: cur.replacement.replace('\/', '.') }), {}))
};

// externals
const EXTERNAL = ['react', 'react-dom', 'react-transition-group', '@babel/runtime', '@fullcalendar/core', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...(ALIAS_COMPONENT_ENTRIES.map(entries => entries.replacement))];

const EXTERNAL_CORE = [...EXTERNAL, ...(ALIAS_ENTRIES.map(entries => entries.replacement))];

// plugins
const BABEL_PLUGIN_OPTIONS = {
    exclude: 'node_modules/**',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties', ['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]],
    skipPreflightCheck: true,
    babelHelpers: 'runtime',
    babelrc: false
};

const ALIAS_PLUGIN_OPTIONS = {
    entries: ALIAS_ENTRIES
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
    exclude: 'src/**',
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
}

const PLUGINS = [
    replace(REPLACE_PLUGIN_OPTIONS),
    resolve(RESOLVE_PLUGIN_OPTIONS),
    commonjs(COMMONJS_PLUGIN_OPTIONS),
    babel(BABEL_PLUGIN_OPTIONS),
    postcss(POSTCSS_PLUGIN_OPTIONS)
];

const PLUGINS_COMPONENT = [
    alias(ALIAS_PLUGIN_OPTIONS_FOR_COMPONENT),
    ...PLUGINS
];

const PLUGINS_CORE = [
    alias(ALIAS_PLUGIN_OPTIONS),
    ...PLUGINS
];

function addEntry(name, input, output, isComponent = true) {
    const exports = name === 'primereact.api' || name === 'primereact' ? 'named' : 'auto';
    const isCore = name === 'primereact.core';
    const plugins = isComponent ? PLUGINS_COMPONENT : (isCore ? PLUGINS_CORE : PLUGINS);
    const external = isComponent ? EXTERNAL_COMPONENT : (isCore ? EXTERNAL_CORE : EXTERNAL);
    const inlineDynamicImports = true;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS)],
            external,
            inlineDynamicImports
        }
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
        }
    };

    const get_IIFE = (isMinify) => {
        return {
            ...getEntry(isMinify),
            output: [
                {
                    format: 'iife',
                    name,
                    file: `${output}${isMinify ? '.min' : ''}.js`,
                    globals: isComponent ? GLOBAL_COMPONENT_DEPENDENCIES : (isCore ? GLOBAL_CORE_DEPENDENCIES : GLOBAL_DEPENDENCIES),
                    exports
                }
            ]
        }
    };

    entries.push(get_CJS_ESM());
    entries.push(get_IIFE());

    // Minify
    entries.push(get_CJS_ESM(true));
    entries.push(get_IIFE(true));
}

function addComponent() {
    fs.readdirSync(path.resolve(__dirname, INPUT_DIR), { withFileTypes: true })
        .filter(dir => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, INPUT_DIR + folderName)).forEach(file => {
                let name = file.split(/(.js)$/)[0].toLowerCase();
                if (name === folderName) {
                    const input = INPUT_DIR + folderName + '/' + file;
                    const output = OUTPUT_DIR + folderName + '/' + name;

                    addEntry('primereact.' + folderName, input, output, folderName !== 'core');
                }
            });
        });
}

function addPrimeReact() {
    const input = INPUT_DIR + 'primereact.all.js';
    const output = OUTPUT_DIR + 'primereact.all';

    addEntry('primereact', input, output, false);
}

addComponent();
addPrimeReact();

export default entries;
