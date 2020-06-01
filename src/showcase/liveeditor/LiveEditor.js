import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { services, data } from './LiveEditorData';
import { getParameters } from 'codesandbox/lib/api/define';

export class LiveEditor extends Component {

    static defaultProps = {
        name: null,
        sources: null,
        service: null,
        data: null,
        dependencies: null,
        extFiles: null,
        activeButtonIndex: 0,
        editorType: 'codesandbox'
    };

    static propTypes = {
        name: PropTypes.string,
        sources: PropTypes.object,
        service: PropTypes.string,
        data: PropTypes.string,
        dependencies: PropTypes.object,
        extFiles: PropTypes.object,
        activeButtonIndex: PropTypes.number,
        editorType: PropTypes.string
    };

    renderCodeSandboxButton(nameWithExt, index, files, extDependencies) {
        let extFiles = !!this.props.extFiles ? {...this.props.extFiles} : {};
        let extIndexCSS = extFiles['index.css'] || '';
        delete extFiles['index.css'];

        const dependencies = require('../../../package.json') ? require('../../../package.json').devDependencies : {};

        const parameters = getParameters({
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
                            'primereact': 'latest',
                            'primeflex': dependencies['primeflex'],
                            'primeicons': dependencies['primeicons']
                        }
                    }
                },
                'index.css': {
                    content: `
body {
    padding: .5em;
    font-family: "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: normal;
    color: #333333;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
}
.center-demo {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.p-col-d {
    display: table-cell;
}
.p-col-m {
    display: none;
}
@media screen and (max-width: 1024px) {
    .p-col-d {
        display: none;
    }
    .p-col-m {
        display: inline-block;
    }
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
        });

        return (
            <form key={index} action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
                <input type="hidden" name="parameters" value={parameters} />
                <button type="submit" className="live-editor-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    <span className="live-editor-text">Edit in CodeSandbox</span>
                </button>
            </form>
        );
    }

    renderCodeSandbox() {
        let name = this.props.name;
        let extension = '.js';
        let extDependencies = this.props.dependencies || {};

        return Object.entries(this.props.sources).map(([key, value], index) => {
            if (index !== this.props.activeButtonIndex) {
                return null;
            }

            let _files = {};
            if (key === 'app' || key === 'hooks') {
                extension = '.js';
            }
            else if (key === 'ts') {
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
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';
${value.content}
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
                _files[`public/data/${this.props.data}.json`] = {
                    content: data[this.props.data]
                }
            }

            return this.renderCodeSandboxButton(`${name}${extension}`, index, _files, extDependencies);
        });
    }

    renderElements() {
        if (this.props.editorType === 'codesandbox') {
            return this.renderCodeSandbox();
        }

        return null;
    }

    render() {
        let elements = this.renderElements();

        return elements;
    }
}
