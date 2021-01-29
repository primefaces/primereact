import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { services, data } from './LiveEditorData';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { SplitButton } from '../../components/splitbutton/SplitButton';
import { TabPanel } from '../../components/tabview/TabView';

export function useLiveEditorTabs(props) {
    let tabs = [(
        <TabPanel key="source" header="Source">
            <LiveEditor {...props} />
        </TabPanel>
    )];

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
                    <CodeHighlight lang="js" style={{maxHeight: '500px'}}>
                        {data[el]}
                    </CodeHighlight>
                </TabPanel>
            )
        });
    }

    return tabs;
}
export class LiveEditor extends Component {

    static defaultProps = {
        name: null,
        sources: null,
        service: null,
        data: null,
        dependencies: null,
        extFiles: null,
        defaultSourceType: 'hooks'
    };

    static propTypes = {
        name: PropTypes.string,
        sources: PropTypes.object,
        service: PropTypes.string,
        data: PropTypes.string,
        dependencies: PropTypes.object,
        extFiles: PropTypes.object,
        defaultSourceType: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            sandbox_id: null,
            showCodeHighlight: false
        }

        this.items = [
            {
                template: (item, options) => {
                    return (
                        /* eslint-disable */
                        <a href="#" role="menuitem" className={options.className} target={item.target} onClick={options.onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            <span className="p-ml-2" style={{color: 'var(--text-color)'}}>Class source</span>
                        </a>
                        /* eslint-enable */
                    );
                },
                command: () => {
                    this.postSandboxParameters('class');
                }
            },
            {
                template: (item, options) => {
                    return (
                        /* eslint-disable */
                        <a href="#" role="menuitem" className={options.className} target={item.target} onClick={options.onClick}>
                            <i className="pi pi-external-link" />
                            <span className="p-ml-2" style={{color: 'var(--text-color)'}}>Hooks source</span>
                        </a>
                        /* eslint-enable */
                    );
                },
                command: () => {
                    this.postSandboxParameters('hooks');
                }
            },
            {
                template: (item, options) => {
                    return (
                        /* eslint-disable */
                        <a href="#" role="menuitem" className={options.className} target={item.target} onClick={options.onClick}>
                            <img src="showcase/images/typescript-icon.png" alt="TypeScript"></img>
                            <span className="p-ml-2" style={{color: 'var(--text-color)'}}>TS source</span>
                        </a>
                        /* eslint-enable */
                    );
                },
                command: () => {
                    this.postSandboxParameters('ts');
                }
            }
        ];
    }

    postSandboxParameters(sourceType) {
        fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.getSandboxParameters(sourceType))
        })
        .then(response => response.json())
        .then(data => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'))
        .catch(() => this.setState({ showCodeHighlight: true }));
    }

    createSandboxParameters(nameWithExt, files, extDependencies) {
        let extFiles = !!this.props.extFiles ? {...this.props.extFiles} : {};
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
                            'classnames': dependencies['classnames'],
                            'axios': dependencies['axios'],
                            'primereact': '^6.0.0', // latest
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
    }

    getSandboxParameters(sourceType) {
        let name = this.props.name;
        let extension = '.js';
        let extDependencies = this.props.dependencies || {};
        let content = this.props.sources[sourceType].content;

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

        if (this.props.service) {
            _files[`src/service/${this.props.service}${extension}`] = {
                content: services[this.props.service]
            }

            extDependencies['axios'] =  "^0.19.0";
        }

        if (this.props.data) {
            const dataArr = this.props.data.split(',');
            dataArr.forEach(el => {
                _files[`public/data/${el}.json`] = {
                    content: data[el]
                }
            });
        }

        return this.createSandboxParameters(`${name}${extension}`, _files, extDependencies);
    }

    renderElement() {
        const buttonContent = (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                <span className="p-ml-2">Edit in CodeSandbox</span>
            </>
        );

        return (
            <div className="p-d-flex p-jc-end" style={{marginTop: '-1rem'}}>
                <div className="p-d-flex p-flex-column p-ai-end">
                    <span className="liveEditorHelperText">*Hooks, TS and Class sources can be accessed using</span>
                    <SplitButton model={this.items} buttonTemplate={buttonContent} onClick={() => this.postSandboxParameters(this.props.defaultSourceType)} appendTo={document.body} className="liveEditorSplitButton p-m-2" menuClassName="liveEditorPanel"></SplitButton>
                </div>
            </div>
        );
    }

    render() {
        const element = this.renderElement();

        return (
            <>
                {element}
                <CodeHighlight lang="js">
                    {this.props.sources[this.props.defaultSourceType].content}
                </CodeHighlight>

                {
                    this.props.extFiles && Object.entries(this.props.extFiles).map(([key, value], i) => {
                        if (key === 'index.css') {
                            return null;
                        }

                        const lang = key.indexOf('.css') !== -1 ? 'css' : 'js';
                        return (
                            <CodeHighlight key={`${key}_${i}`} lang={lang}>
                                {value.content}
                            </CodeHighlight>
                        )
                    })
                }
            </>
        )
    }
}
