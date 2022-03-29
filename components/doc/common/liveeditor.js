import React from 'react';
import { services, data } from './liveeditordata';
import { CodeHighlight } from './codehighlight';
import { TabPanel } from '../../lib/tabview/TabView';
import pkg from '../../../package.json';

const vPrimeReact = '^7.0.0'; // latest

let currentProps = {};

const contents = (name, content, imports) => ({
    'js': `import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';
${content}
const rootElement = document.getElementById("root");
ReactDOM.render(<${name} />, rootElement);`,

    'browser': `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>${name}</title>

        <!-- PrimeReact -->
        <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
        <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/primeflex@3.1.2/primeflex.min.css" />

        <!-- Dependencies -->
        <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>

        <!-- Demo -->${imports}
    </head>
    <body>
        <div id="root"></div>

        <script type="text/babel">
${content}
const rootElement = document.getElementById("root");
ReactDOM.render(<${name} />, rootElement);

        </script>
    </body>
</html>
`
});

export const useLiveEditorTabs = (props) => {
    currentProps = props;

    const liveEditor = useLiveEditor();

    let extFiles = props.extFiles && Object.entries(props.extFiles).map(([key, value], i) => {
        if (key === 'index.css') {
            return null;
        }

        const lang = key.indexOf('.css') !== -1 ? 'css' : 'js';
        return (
            <CodeHighlight key={`${key}_${i}`} lang={lang}>
{`
/* ${key.replace('demo/', '')} */
`}
                {value.content}
            </CodeHighlight>
        )
    });

    let ordered_sources = {
        'hooks': { ...props.sources.hooks },
        'class': { ...props.sources.class },
        'ts': { ...props.sources.ts },
        'browser': {...props.sources.browser}
    }

    let tabs = Object.entries(ordered_sources).map(([key, value]) => {
        const { content: _c, imports: _i } = value;
        const content = key === 'browser' ? contents(props.name, _c, _i).browser : _c;

        return (
            <TabPanel key={key} header={value.tabName}>
                {/* eslint-disable */}
                <a style={{ color: 'var(--primary-color)', cursor: 'pointer' }} className="inline-block mb-1" onClick={() => liveEditor.postSandboxParameters(key)}>
                    <span>Edit in CodeSandbox</span>
                </a>
                {/* eslint-enable */}
                <CodeHighlight lang="js">
                    {content}
                </CodeHighlight>

                {extFiles}
            </TabPanel>
        );
    });

    if (props.service) {
        const serviceArr = props.service.replace(/\s/g,'').split(',');
        serviceArr.forEach((s, i) => {
            tabs.push(
                <TabPanel key={`${s}_${i}`} header={`${s}.js`}>
                    <CodeHighlight lang="js">
                        {services[s]}
                    </CodeHighlight>
                    <span className="liveEditorHelperText">* This code is different for the 'Browser Source'.</span>
                </TabPanel>
            )
        });
    }

    if (props.data) {
        const dataArr = props.data.replace(/\s/g,'').split(',');
        dataArr.forEach((d, i) => {
            tabs.push(
                <TabPanel key={`${d}_${i}`} header={`${d}.json`}>
                    <CodeHighlight lang="js" style={{ maxHeight: '500px' }}>
                        {data[d]}
                    </CodeHighlight>
                </TabPanel>
            )
        });
    }

    return tabs;
}

export const useLiveEditor = () => {
    const props = currentProps;

    const createSandboxParameters = (nameWithExt, files, extDependencies, sourceType, rootPath) => {
        let isBrowser = sourceType === 'browser';
        let _extFiles = !!props.extFiles ? { ...props.extFiles } : {};
        let extIndexCSS = _extFiles['index.css'] || '';
        delete _extFiles['index.css'];

        let extFiles = {};
        Object.entries(_extFiles).forEach(([k, v]) => extFiles[`${rootPath}${k}`] = v);

        const dependencies = pkg ? pkg.dependencies : {};

        return {
            files: {
                'package.json': {
                    content: {
                        main: `${rootPath}demo/${nameWithExt}`,
                        dependencies: isBrowser ? {} : {
                            ...extDependencies,
                            'react': dependencies['react'],
                            'react-dom': dependencies['react-dom'],
                            'react-transition-group': dependencies['react-transition-group'],
                            'primereact': vPrimeReact, // latest
                            'primeflex': dependencies['primeflex'],
                            'primeicons': dependencies['primeicons']
                        }
                    }
                },
                'index.html': {
                    content: isBrowser ? `<meta http-equiv="refresh" content="0;url=demo/${nameWithExt}" />` :
                    `<div id="root"></div>

                    <!-- Added to show icons in the editor -->
                    <link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">`
                },
                'index.css': {
                    content: `
html {
    font-size: 14px;
}

body {
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-weight: normal;
    color: #495057;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: .5em;
    margin-bottom: 50px;
}

h1, h2, h3, h4, h5, h6 {
    margin: 1.5rem 0 1rem 0;
    font-family: inherit;
    font-weight: 600;
    line-height: 1.2;
    color: inherit;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }
p {
    line-height: 1.5;
    margin: 0 0 1rem 0;
}

.card {
    margin-bottom: 2rem;
}

input[type="number"] {
    -moz-appearance: textfield;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

@keyframes pulse {
    0% {
        background-color: rgba(165, 165, 165, 0.1)
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3)
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1)
    }
}

.customer-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.customer-badge.status-qualified {
    background-color: #C8E6C9;
    color: #256029;
}

.customer-badge.status-unqualified {
    background-color: #FFCDD2;
    color: #C63737;
}

.customer-badge.status-negotiation {
    background-color: #FEEDAF;
    color: #8A5340;
}

.customer-badge.status-new {
    background-color: #B3E5FC;
    color: #23547B;
}

.customer-badge.status-renewal {
    background-color: #ECCFFF;
    color: #694382;
}

.customer-badge.status-proposal {
    background-color: #FFD8B2;
    color: #805B36;
}

.product-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.product-badge.status-instock {
    background: #C8E6C9;
    color: #256029;
}

.product-badge.status-outofstock {
    background: #FFCDD2;
    color: #C63737;
}

.product-badge.status-lowstock {
    background: #FEEDAF;
    color: #8A5340;
}

.order-badge {
    border-radius: 2px;
    padding: .25em .5rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    letter-spacing: .3px;
}

.order-badge.order-delivered {
    background: #C8E6C9;
    color: #256029;
}

.order-badge.order-cancelled {
    background: #FFCDD2;
    color: #C63737;
}

.order-badge.order-pending {
    background: #FEEDAF;
    color: #8A5340;
}

.order-badge.order-returned {
    background: #ECCFFF;
    color: #694382;
}

.image-text {
    vertical-align: middle;
    margin-left: .5rem;
}

.p-multiselect-representative-option {
    display: inline-block;
    vertical-align: middle;
}

.p-multiselect-representative-option img {
    vertical-align: middle;
    width: 24px;
}

.p-multiselect-representative-option span {
    margin-top: .125rem;
}

.p-column-filter {
    width: 100%;
}

.country-item {
    display: flex;
    align-items: center;
}

.country-item img.flag {
    width: 18px;
    margin-right: .5rem;
}

.flag {
    vertical-align: middle;
}

span.flag {
    width:44px;
    height:30px;
    display:inline-block;
}

img.flag {
    width:30px
}
${extIndexCSS}
                    `,
                },
                ...files,
                ...extFiles
            }
        }
    };

    const getSandboxParameters = (sourceType) => {
        let { name, sources, dependencies } = props;
        let extension = '.js';
        let serviceExtension = extension;
        let extDependencies = dependencies || {};
        let { content, imports } = sources[sourceType];
        let { browser, js } = contents(name, content, `\n        <link rel="stylesheet" href="../index.css" />${imports}`);
        let rootPath = 'src/';

        let _files = {};

        _files[`sandbox.config.json`] = {
            content: {
                "infiniteLoopProtection": false
            }
        }

        if (sourceType === 'class' || sourceType === 'hooks') {
            extension = serviceExtension = '.js';
            content = js;
        }
        else if (sourceType === 'ts') {
            extension = serviceExtension = '.tsx';
            content = js;

            _files[`tsconfig.json`] = {
                content:
                    `{
"compilerOptions": {
    "target": "es5",
    "lib": [
    "dom",
    "dom.iterable",
    "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
},
"include": [
    "src"
]
}`
            }

            extDependencies = {
                ...extDependencies,
                "@types/node": "10.12.24",
                "@types/react": "16.8.2",
                "@types/react-dom": "16.8.0",
                "@types/react-transition-group": "^4.2.4",
                "@types/classnames": "^2.2.10",
                "react-scripts": "2.1.3",
                "typescript": "3.3.3"
            }
        }
        else if (sourceType === 'browser') {
            extension = '.html';
            content = browser;
            rootPath = '';

            _files[`sandbox.config.json`]['content']['template'] = 'static';
        }

        _files[`${rootPath}demo/${name}${extension}`] = {
            content
        }

        if (props.service) {
            const serviceArr = props.service.replace(/\s/g,'').split(',');
            serviceArr.forEach(s => {
                const path = `${rootPath}${sourceType === 'browser' ? 'demo' : 'service'}/${s}${serviceExtension}`;
                const content = sourceType === 'browser' ? services[s].replace('export class', 'class') : services[s];

                _files[path] = {
                    content
                }
            });
        }

        if (props.data) {
            const dataArr = props.data.replace(/\s/g,'').split(',');
            dataArr.forEach(d => {
                const path = `${sourceType === 'browser' ? 'demo' : 'public'}/data/${d}.json`;
                const content = data[d];

                _files[path] = {
                    content
                }
            });
        }

        return createSandboxParameters(`${name}${extension}`, _files, extDependencies, sourceType, rootPath);
    }

    return {
        postSandboxParameters(sourceType) {
            fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(getSandboxParameters(sourceType))
            })
                .then(response => response.json())
                .then(data => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'));
        }
    }
}
