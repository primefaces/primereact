import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { services, data } from './LiveEditorData';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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

    constructor(props) {
        super(props);

        this.state = {
            sandbox_id: null,
            showCodeHighlight: false
        }
    }

    postSandboxParameters(parameters) {
        fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(parameters)
        })
        .then(response => response.json())
        .then(data => this.setState({ sandbox_id: data.sandbox_id }))
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
    margin-bottom: 50px;
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
        }
    }

    getSandboxParameters() {
        let name = this.props.name;
        let extension = '.js';
        let extDependencies = this.props.dependencies || {};
        let [sourceType, sourceValue] = Object.entries(this.props.sources);

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
${sourceValue.content}
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

        return this.createSandboxParameters(`${name}${extension}`, _files, extDependencies);
    }

    componentDidMount() {
        if (this.props.editorType === 'codesandbox') {
            this.postSandboxParameters(this.getSandboxParameters());
        }
    }

    renderSandboxSource() {
        if (this.state.showCodeHighlight) {
            return (
                <CodeHighlight lang="js">
                    {this.props.sources[1].content}
                </CodeHighlight>
            );
        }

        return (
            <iframe title="PrimeReact Demo"
                src={`https://codesandbox.io/embed/${this.state.sandbox_id}?theme=light&fontsize=14`}
                style={{'width':'100%', 'height':'600px', 'border':'0', 'overflow':'hidden'}}
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        );
    }

    renderElements() {
        if (this.props.editorType === 'codesandbox') {
            return this.renderSandboxSource();
        }

        return null;
    }

    render() {
        //let elements = this.renderElements();

        return (
            <CodeHighlight lang="js">
                {this.props.sources['class'].content}
            </CodeHighlight>
        )
    }
}
