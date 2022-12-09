import { Tree } from '../../lib/tree/Tree';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplatingDoc(props) {
    const nodes = [
        {
            key: '0',
            label: 'Installation',
            children: [
                { key: '0-0', label: 'Getting Started', url: 'https://reactjs.org/docs/getting-started.html' },
                { key: '0-1', label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html' },
                { key: '0-2', label: 'Create an App', url: 'https://reactjs.org/docs/create-a-new-react-app.html' },
                { key: '0-3', label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html' }
            ]
        },
        {
            key: '1',
            label: 'Main Concepts',
            children: [
                { key: '1-0', label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html' },
                { key: '1-1', label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html' },
                { key: '1-2', label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html' },
                { key: '1-3', label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html' },
                { key: '1-4', label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
                { key: '1-5', label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html' }
            ]
        }
    ];

    const nodeTemplate = (node, options) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url}>{node.label}</a>;
        }

        return <span className={options.className}>{label}</span>;
    };

    const code = {
        basic: `
<Tree value={nodes} nodeTemplate={nodeTemplate} />
        `,
        javascript: `
import { Tree } from 'primereact/tree';

export default function TemplatingDoc() {
    const nodes = [
        {
            key: "0",
            label: 'Installation',
            children: [
                { key: "0-0", label: 'Getting Started', url: 'https://reactjs.org/docs/getting-started.html' },
                { key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html' },
                { key: "0-2", label: 'Create an App', url: 'https://reactjs.org/docs/create-a-new-react-app.html' },
                { key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html' }
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                { key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html' },
                { key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html' },
                { key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html' },
                { key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html' },
                { key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
                { key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html' }
            ]
        }
    ];

    const nodeTemplate = (node, options) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url}>{node.label}</a>;
        }

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    return (
        <Tree value={nodes} nodeTemplate={nodeTemplate} />
    )
}
        `,
        typescript: `
import { Tree } from 'primereact/tree';

export default function TemplatingDoc() {
    const nodes = [
        {
            key: "0",
            label: 'Installation',
            children: [
                { key: "0-0", label: 'Getting Started', url: 'https://reactjs.org/docs/getting-started.html' },
                { key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html' },
                { key: "0-2", label: 'Create an App', url: 'https://reactjs.org/docs/create-a-new-react-app.html' },
                { key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html' }
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                { key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html' },
                { key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html' },
                { key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html' },
                { key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html' },
                { key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
                { key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html' }
            ]
        }
    ];

    const nodeTemplate = (node, options) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url}>{node.label}</a>;
        }

        return (
            <span className={options.className}>
                {label}
            </span>
        )
    }

    return (
        <Tree value={nodes} nodeTemplate={nodeTemplate} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tree Templating</p>
            </DocSectionText>

            <div className="card">
                <Tree value={nodes} nodeTemplate={nodeTemplate} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
