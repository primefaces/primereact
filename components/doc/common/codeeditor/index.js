import sdk from '@stackblitz/sdk';
import { data, services } from './data';
import { getCRA } from './templates';

const useCodeSandbox = (props) => {
    const getSandboxParameters = (sourceType) => {
        const { code: sources, title, description } = props;
        const content = sources[sourceType];

        if (!content) {
            return null;
        }

        const { path, fileExtension, files, dependencies } = getCRA(sourceType, title, description);
        const sourceFileName = `${path}demo${fileExtension}`;

        files[sourceFileName] = {
            content
        };

        if (props.service) {
            props.service.forEach((name) => {
                files[`${path}service/${name}${fileExtension}`] = {
                    content: services[name]
                };
            });
        }

        if (props.data) {
            props.data.forEach((name) => {
                files[`public/data/${name}.json`] = {
                    content: data[name]
                };
            });
        }

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

const useStackBlitz = (props) => {
    const getStackBlitzParameters = (sourceType) => {
        const { code: sources, title, description } = props;
        const content = sources[sourceType];

        if (!content) {
            return null;
        }

        const { path, fileExtension, files, dependencies } = getCRA(sourceType, title, description);
        const sourceFileName = `${path}demo${fileExtension}`;

        files[sourceFileName] = {
            content
        };

        if (props.service) {
            props.service.forEach((name) => {
                files[`${path}service/${name}${fileExtension}`] = {
                    content: services[name]
                };
            });
        }

        if (props.data) {
            props.data.forEach((name) => {
                files[`public/data/${name}.json`] = {
                    content: data[name]
                };
            });
        }

        return { files, dependencies, sourceFileName };
    };

    return (sourceType, errorCallback) => {
        const stackBlitzParameters = getStackBlitzParameters(sourceType);

        if (!stackBlitzParameters) {
            errorCallback && errorCallback({ summary: 'Not Available', detail: 'That code sandbox demonstration is not available!' });

            return;
        }

        let files = {};

        Object.entries(stackBlitzParameters.files).forEach(([k, v]) => (files[`${k}`] = typeof v.content === 'object' ? JSON.stringify(v.content, null, 2) : v.content));

        sdk.openProject(
            {
                title: props.title || 'PrimeReact Demo',
                template: 'create-react-app',
                description:
                    '**' +
                    (props.description || '') +
                    '**\n PrimeReact is an open source UI library for React featuring a rich set of 80+ components, a theme designer, various theme alternatives such as Material, Bootstrap, Tailwind, premium templates and professional support. In addition, it integrates with PrimeBlock, which has 370+ ready to use UI blocks to build spectacular applications in no time.',
                dependencies: stackBlitzParameters.dependencies,
                files
            },
            {
                newWindow: true,
                openFile: [stackBlitzParameters.sourceFileName]
            }
        );
    };
};

export const useCodeEditor = (props) => {
    const openCodeSandbox = useCodeSandbox(props);
    const openStackBlitz = useStackBlitz(props);

    return {
        openCodeSandbox,
        openStackBlitz
    };
};
