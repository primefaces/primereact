import React from 'react';
import { services, data } from './LiveEditorData';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { TabPanel } from '../../components/tabview/TabView';

let currentProps = {};

export const useLiveEditorTabs = (props) => {
    let extFiles = props.extFiles && Object.entries(props.extFiles).map(([key, value], i) => {
        if (key === 'index.css') {
            return null;
        }

        const lang = key.indexOf('.css') !== -1 ? 'css' : 'js';
        return (
            <CodeHighlight key={`${key}_${i}`} lang={lang}>
{`
/* ${key.replace('src/demo/', '')} */
`}
                {value.content}
            </CodeHighlight>
        )
    });

    let tabs = Object.entries(props.sources).map(([key, value]) => {
        return (
            <TabPanel key={key} header={value.tabName}>
                <CodeHighlight lang="js">
                    {value.content}
                </CodeHighlight>

                {extFiles}
            </TabPanel>
        );
    });

    if (props.service) {
        tabs.push(
            <TabPanel key="service" header={`${props.service}.js`}>
                <CodeHighlight lang="js">
                    {services[props.service]}
                </CodeHighlight>
                <span className="liveEditorHelperText">*Dependency: axios</span>
            </TabPanel>
        )
    }

    if (props.data) {
        const dataArr = props.data.split(',');
        dataArr.forEach((el, i) => {
            tabs.push(
                <TabPanel key={`${el}_i`} header={`${el}.json`}>
                    <CodeHighlight lang="js" style={{ maxHeight: '500px' }}>
                        {data[el]}
                    </CodeHighlight>
                </TabPanel>
            )
        });
    }

    currentProps = props;

    return tabs;
}

export const useLiveEditor = () => {
    const props = currentProps;

    const createSandboxParameters = (nameWithExt, files, extDependencies) => {
        let extFiles = !!props.extFiles ? { ...props.extFiles } : {};
        let extIndexCSS = extFiles['index.css'] || '';
        delete extFiles['index.css'];

        const dependencies = require('../../../package.json') ? require('../../../package.json').devDependencies : {};

        return {
            files: {
                'package.json': {
                    content: {
                        main: `src/demo/${nameWithExt}`,
                        dependencies: {
                            ...extDependencies,
                            'react': dependencies['react'],
                            'react-dom': dependencies['react-dom'],
                            'react-transition-group': dependencies['react-transition-group'],
                            'axios': dependencies['axios'],
                            'primereact': '^6.2.1', // latest
                            'primeflex': dependencies['primeflex'],
                            'primeicons': dependencies['primeicons']
                        }
                    }
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
                ...extFiles,
                'index.html': {
                    content: `
<div id="root"></div>

<!-- Added to show icons in the editor -->
<link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">
                  `
                }
            }
        }
    };

    const getSandboxParameters = (sourceType) => {
        let name = props.name;
        let extension = '.js';
        let extDependencies = props.dependencies || {};
        let content = props.sources[sourceType].content;

        let _files = {};
        if (sourceType === 'class' || sourceType === 'hooks') {
            extension = '.js';
        }
        else if (sourceType === 'ts') {
            extension = '.tsx';

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

        _files[`src/demo/${name}${extension}`] = {
            content:
                `import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';
${content}
const rootElement = document.getElementById("root");
ReactDOM.render(<${name} />, rootElement);`
        }

        if (props.service) {
            _files[`src/service/${props.service}${extension}`] = {
                content: services[props.service]
            }

            extDependencies['axios'] = "^0.19.0";
        }

        if (props.data) {
            const dataArr = props.data.split(',');
            dataArr.forEach(el => {
                _files[`public/data/${el}.json`] = {
                    content: data[el]
                }
            });
        }

        return createSandboxParameters(`${name}${extension}`, _files, extDependencies);
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
