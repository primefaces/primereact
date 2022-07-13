import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';

import fs from 'fs-extra';
import path from 'path';

let entries = [];

let core = {};

// alias entries
const ALIAS_COMPONENT_ENTRIES = [
    { find: '../utils/Utils', replacement: 'primereact/utils' },
    { find: '../api/Api', replacement: 'primereact/api' },
    { find: '../hooks/Hooks', replacement: 'primereact/hooks' },
    { find: '../ripple/Ripple', replacement: 'primereact/ripple' },
    { find: '../csstransition/CSSTransition', replacement: 'primereact/csstransition' },
    { find: '../portal/Portal', replacement: 'primereact/portal' },
    { find: '../keyfilter/KeyFilter', replacement: 'primereact/keyfilter' },
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
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-transition-group': 'ReactTransitionGroup'
};

const GLOBAL_COMPONENT_DEPENDENCIES = {
    ...GLOBAL_DEPENDENCIES, ...(ALIAS_COMPONENT_ENTRIES.reduce((acc, cur) => ({ ...acc, [cur.replacement]: cur.replacement.replace('\/', '.') }), {}))
};

// externals
const EXTERNAL = ['react', 'react-dom', 'react-transition-group', '@babel/runtime', '@fullcalendar/core', 'chart.js/auto', 'quill'];

const EXTERNAL_COMPONENT = [...EXTERNAL, ...(ALIAS_COMPONENT_ENTRIES.map(entries => entries.replacement))];

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

function addEntry(name, input, output, isComponent = true) {
    const exports = name === 'primereact.api' || name === 'primereact' ? 'named' : 'auto';
    const useCorePlugin = ALIAS_COMPONENT_ENTRIES.some(entry => entry.replacement.replace('primereact/', '') === name.replace('primereact.', ''));
    const plugins = isComponent ? PLUGINS_COMPONENT : PLUGINS;
    const external = isComponent ? EXTERNAL_COMPONENT : EXTERNAL;
    const inlineDynamicImports = true;

    const getEntry = (isMinify) => {
        return {
            input,
            plugins: [...plugins, isMinify && terser(TERSER_PLUGIN_OPTIONS), useCorePlugin && corePlugin()],
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
                    globals: isComponent ? GLOBAL_COMPONENT_DEPENDENCIES : GLOBAL_DEPENDENCIES,
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

function corePlugin() {
    return {
        name: 'corePlugin',
        generateBundle(outputOptions, bundle) {
            if (outputOptions.format === 'iife') {
                Object.keys(bundle).forEach(id => {
                    const chunk = bundle[id];
                    const name = id.replace('.min.js', '').replace('.js', '');
                    const filePath = `./dist/core/core${id.indexOf('.min.js') > 0 ? '.min.js': '.js'}`;

                    core[filePath] ? (core[filePath][name] = chunk.code) : (core[filePath] = { [`${name}`]: chunk.code });
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

                    fs.outputFile(path.resolve(__dirname, filePath), code, {}, function(err) {
                        if (err) {
                            return console.error(err);
                        }
                    });
                });
            }
        }
    ]
}

function addComponent() {
    fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR), { withFileTypes: true })
        .filter(dir => dir.isDirectory())
        .forEach(({ name: folderName }) => {
            fs.readdirSync(path.resolve(__dirname, process.env.INPUT_DIR + folderName)).forEach(file => {
                let name = file.split(/(.js)$/)[0].toLowerCase();
                if (name === folderName) {
                    const input = process.env.INPUT_DIR + folderName + '/' + file;
                    const output = process.env.OUTPUT_DIR + folderName + '/' + name;

                    addEntry('primereact.' + folderName, input, output, true);
                }
            });
        });
}

function addPrimeReact() {
    const input = process.env.INPUT_DIR + 'primereact.all.js';
    const output = process.env.OUTPUT_DIR + 'primereact.all';

    addEntry('primereact', input, output, false);
}

addComponent();
addPrimeReact();
addCore();

export default entries;
