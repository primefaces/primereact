import sdk from '@stackblitz/sdk';
import { getCRA, getNextJS } from './templates';

const useCodeSandbox = (props) => {
    const getSandboxParameters = (sourceType) => {
        const { files, dependencies, sourceFileName } = props.template === 'cra' ? getCRA(props, sourceType) : getNextJS(props, sourceType);

        files['sandbox.config.json'] = {
            content: {
                infiniteLoopProtection: false
            }
        };

        return { files, dependencies, sourceFileName };
    };

    return (sourceType, errorCallback) => {
        const sandboxParameters = getSandboxParameters(sourceType);

        if (!sandboxParameters) {
            errorCallback && errorCallback({ summary: 'Not Available', detail: 'That code sandbox demonstration is not available!' });

            return;
        }

        fetch('https://codesandbox.io/api/v1/sandboxes/define?json=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(sandboxParameters)
        })
            .then((response) => response.json())
            .then((data) => window.open(`https://codesandbox.io/s/${data.sandbox_id}`, '_blank'));
    };
};

export const useStackBlitz = (props) => {
    const getStackBlitzParameters = (sourceType) => (props.template === 'cra' ? getCRA(props, sourceType) : getNextJS(props, sourceType));

    return (sourceType, errorCallback) => {
        const stackBlitzParameters = getStackBlitzParameters(sourceType);

        if (!stackBlitzParameters) {
            errorCallback && errorCallback({ summary: 'Not Available', detail: 'That code sandbox demonstration is not available!' });

            return;
        }

        let files = {};

        Object.entries(stackBlitzParameters.files).forEach(([k, v]) => (files[`${k}`] = typeof v.content === 'object' ? JSON.stringify(v.content, null, 2) : v.content));

        const primereactproject = {
            title: props.title || 'PrimeReact Demo',
            template: props.template === 'cra' ? 'create-react-app' : 'node',
            description: props.embedded
                ? "This example demonstrates how to style components with Tailwind CSS using PrimeReact's unstyled property. As mentioned in the PrimeReact documentation, components can be styled or have HTML attributes added using a global or inline pass through approach. In this example, we utilize the global PT approach with Tailwind CSS."
                : '**' +
                  (props.description || '') +
                  '**\n PrimeReact is an open source UI library for React featuring a rich set of 90+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.',
            dependencies: stackBlitzParameters.dependencies,
            files
        };

        if (props.embedded) {
            sdk.embedProject('embed', primereactproject, {
                openFile: 'src/App.js',
                view: 'default',
                height: '800px'
            });
        } else {
            sdk.openProject(primereactproject, {
                newWindow: true,
                openFile: [stackBlitzParameters.sourceFileName]
            });
        }
    };
};

/**
 * @todo Write the documentation.
 * @param {string} props.template - valid values are 'cra' and 'nextjs'.
 * @returns
 */
export const useCodeEditor = (props) => {
    const openCodeSandbox = useCodeSandbox(props);
    const openStackBlitz = useStackBlitz(props);

    return {
        openCodeSandbox,
        openStackBlitz
    };
};
