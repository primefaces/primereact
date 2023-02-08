import pkg from '../../../../package.json';
import { services } from './services';

const PrimeReact = {
    version: '^8.0.0', // latest
    description:
        'PrimeReact is an open source UI library for React featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.'
};

const app_dependencies = pkg ? pkg.dependencies : {};
const core_dependencies = {
    '@types/react': '18.0.26', // For stackblitz
    react: app_dependencies['react'] || 'latest',
    'react-dom': app_dependencies['react-dom'] || 'latest',
    'react-transition-group': app_dependencies['react-transition-group'] || 'latest',
    primereact: PrimeReact.version || 'latest', // latest
    primeflex: app_dependencies['primeflex'] || 'latest',
    primeicons: app_dependencies['primeicons'] || 'latest'
};
const ts_dependencies = {
    '@types/node': '18.11.17',
    '@types/react': '18.0.26',
    '@types/react-dom': '18.0.9',
    typescript: '4.9.4'
};

// create-react-app -> https://create-react-app.dev/
const getCRA = (props = {}, template = 'javascript') => {
    const path = 'src/';
    const { code: sources, title = 'primereact_demo', description = '', dependencies: pDependencies = {} } = props;
    const isTypeScript = template === 'typescript';
    const dependencies = { ...(isTypeScript ? ts_dependencies : {}), ...core_dependencies, ...pDependencies, 'react-scripts': '5.0.1' };
    const fileExtension = isTypeScript ? '.tsx' : '.js';
    const sourceFileName = `${path}demo${fileExtension}`;

    let extFiles = {};

    sources.extFiles &&
        Object.entries(sources.extFiles).forEach(([key, value]) => {
            extFiles[`${path + key}`] = {
                content: value
            };
        });

    const files = {
        'package.json': {
            content: {
                name: title.toLowerCase().replaceAll(' ', '_'),
                description: `**${description}** ${PrimeReact.description}`,
                scripts: {
                    start: 'react-scripts start',
                    build: 'react-scripts build',
                    test: 'react-scripts test',
                    eject: 'react-scripts eject'
                },
                dependencies,
                eslintConfig: {
                    extends: ['react-app']
                },
                browserslist: {
                    production: ['>0.2%', 'not dead', 'not op_mini all'],
                    development: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version']
                }
            }
        },
        [`${path}index${fileExtension}`]: {
            content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import './index.css';
import Demo from './demo';

const root = ReactDOM.createRoot(document.getElementById('root')${isTypeScript ? ' as HTMLElement' : ''});
root.render(
    <React.StrictMode>
        <Demo />
    </React.StrictMode>
);`
        },
        [`${path}index.css`]: {
            content: `html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
`
        },
        'public/index.html': {
            content: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="**${description}** ${PrimeReact.description}" />
        <!-- Added to show icons in the editor -->
        <link rel="stylesheet" href="https://unpkg.com/primeicons@${dependencies['primeicons'].replace(/[\^|~]/gi, '')}/primeicons.css">
        <title>PrimeReact App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>`
        },
        [`${sourceFileName}`]: {
            content: sources[template]
        },
        ...extFiles
    };

    if (props.service) {
        props.service.forEach((name) => {
            files[`${path}service/${name}${fileExtension}`] = {
                content: services[name]
            };
        });
    }

    isTypeScript &&
        (files['tsconfig.json'] = {
            content: `
{
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
        "noFallthroughCasesInSwitch": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
    },
    "include": [
        "src"
    ]
}
        `
        });

    return { files, dependencies, sourceFileName };
};

// next.js -> https://nextjs.org/
const getNextJS = (props = {}, template = 'javascript') => {
    const path = 'pages/';
    const { code: sources, title = 'primereact_demo', description = '', dependencies: pDependencies = {} } = props;
    const isTypeScript = template === 'typescript';
    const dependencies = { ...(isTypeScript ? ts_dependencies : {}), ...core_dependencies, ...pDependencies, next: '^13.0.7' };
    const fileExtension = isTypeScript ? '.tsx' : '.js';
    const sourceFileName = `${path}index${fileExtension}`;

    let extFiles = {};

    sources.extFiles &&
        Object.entries(sources.extFiles).forEach(([key, value]) => {
            extFiles[`${path + key}`] = {
                content: value
            };
        });

    const files = {
        'package.json': {
            content: {
                name: title.toLowerCase().replaceAll(' ', '_'),
                description: `**${description}** ${PrimeReact.description}`,
                scripts: {
                    dev: 'next dev',
                    build: 'next build',
                    start: 'next start',
                    lint: 'next lint'
                },
                dependencies,
                browserslist: {
                    production: ['>0.2%', 'not dead', 'not op_mini all'],
                    development: ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version']
                }
            }
        },
        [`${path}_app${fileExtension}`]: {
            content: `import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import '../styles/globals.css'
${isTypeScript ? 'import type { AppProps } from "next/app"' : ''}

export default function App({ Component, pageProps }${isTypeScript ? ': AppProps' : ''}) {
    return <Component {...pageProps} />
}`
        },
        [`${path}_document${fileExtension}`]: {
            content: `import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
    <Html lang="en">
        <Head />
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
    )
}`
        },
        ['styles/globals.css']: {
            content: `html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background: var(--surface-card);
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
`
        },
        '.babelrc': {
            content: `
{
    "presets": ["next/babel"]
}`
        },
        [`${sourceFileName}`]: {
            content: sources[template]
        },
        ...extFiles
    };

    if (props.service) {
        props.service.forEach((name) => {
            files[`service/${name}${fileExtension}`] = {
                content: services[name]
            };
        });
    }

    isTypeScript &&
        (files['tsconfig.json'] = {
            content: `
{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true
    },
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
    "exclude": ["node_modules"]
}
        `
        }) &&
        (files['next-env.d.ts'] = {
            content: `
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
        `
        });

    return { files, dependencies, sourceFileName };
};

export { getCRA, getNextJS };
