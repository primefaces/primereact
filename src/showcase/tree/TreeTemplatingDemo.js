import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.nodes = [
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

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.url) {
            return (
                <a href={node.url}>{node.label}</a>
            )
        }
        else {
            return (
                <b>{node.label}</b>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree <span>Templating</span></h1>
                        <p>Tree nodes can be customized to display custom content.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Tree value={this.nodes} nodeTemplate={this.nodeTemplate} />
                    </div>
                </div>

                <TreeTemplatingDemoDoc />
            </div>
        )
    }
}

export class TreeTemplatingDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.nodes = [
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

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.url) {
            return (
                <a href={node.url}>{node.label}</a>
            )
        }
        else {
            return (
                <b>{node.label}</b>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <Tree value={this.nodes} nodeTemplate={this.nodeTemplate} />
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { Tree } from 'primereact/tree';

const TreeTemplatingDemo = () => {
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

    const nodeTemplate = (node) => {
        if (node.url) {
            return (
                <a href={node.url}>{node.label}</a>
            )
        }
        else {
            return (
                <b>{node.label}</b>
            )
        }
    }

    return (
        <div>
            <div className="card">
                <Tree value={nodes} nodeTemplate={nodeTemplate} />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Tree } from 'primereact/tree';

const TreeTemplatingDemo = () => {
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

    const nodeTemplate = (node) => {
        if (node.url) {
            return (
                <a href={node.url}>{node.label}</a>
            )
        }
        else {
            return (
                <b>{node.label}</b>
            )
        }
    }

    return (
        <div>
            <div className="card">
                <Tree value={nodes} nodeTemplate={nodeTemplate} />
            </div>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'TreeTemplatingDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
