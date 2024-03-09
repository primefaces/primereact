import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tree } from '@/components/lib/tree/Tree';
import { classNames } from '@/components/lib/utils/Utils';

export function TemplateDoc(props) {
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
            label = (
                <a href={node.url} className="text-700 hover:text-primary" target="_blank" rel="noopener noreferrer">
                    {node.label}
                </a>
            );
        }

        return <span className={options.className}>{label}</span>;
    };

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-tree-toggler p-link" tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    const code = {
        basic: `
<Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        `,
        javascript: `
import React from 'react'; 
import { classNames } from 'primereact/utils';
import { Tree } from 'primereact/tree';

export default function TemplateDemo() {
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
            label = <a href={node.url} className="text-700 hover:text-primary" target="_blank" rel="noopener noreferrer">{node.label}</a>;
        }

        return <span className={options.className}>{label}</span>;
    }

    const togglerTemplate = (node, options) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-tree-toggler p-link" tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { classNames } from 'primereact/utils';
import { Tree, TreeNodeTemplateOptions, TreeTogglerTemplateOptions } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';

export default function TemplateDemo() {
    const nodes: TreeNode[] = [
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

    const nodeTemplate = (node: TreeNode, options: TreeNodeTemplateOptions) => {
        let label = <b>{node.label}</b>;

        if (node.url) {
            label = <a href={node.url} className="text-700 hover:text-primary" target="_blank" rel="noopener noreferrer">{node.label}</a>;
        }

        return <span className={options.className}>{label}</span>;
    }

    const togglerTemplate = (node: TreeNode, options: TreeTogglerTemplateOptions) => {
        if (!node) {
            return;
        }

        const expanded = options.expanded;
        const iconClassName = classNames('p-tree-toggler-icon pi pi-fw', {
            'pi-caret-right': !expanded,
            'pi-caret-down': expanded
        });

        return (
            <button type="button" className="p-tree-toggler p-link" tabIndex={-1} onClick={options.onClick}>
                <span className={iconClassName} aria-hidden="true"></span>
            </button>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom node content instead of a node label is defined with the <i>nodeTemplate</i> property. The toggler can be customized with the <i>togglerTemplate</i> property.
                </p>
            </DocSectionText>

            <div className="card flex justify-content-center">
                <Tree value={nodes} nodeTemplate={nodeTemplate} togglerTemplate={togglerTemplate} className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
