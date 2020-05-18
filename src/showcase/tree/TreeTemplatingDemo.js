import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.nodes = [
            {
                key: "0",
                label: 'Installation',
                children: [
                    {key: "0-0", label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                    {key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                    {key: "0-2", label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                    {key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
                ]
            },
            {
                key: "1",
                label: 'Main Concepts',
                children: [
                    {key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                    {key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                    {key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                    {key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                    {key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                    {key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
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
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Templating</h1>
                        <p>Tree nodes can be customized to display custom content.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Navigation</h3>
                    <Tree value={this.nodes} nodeTemplate={this.nodeTemplate} />
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
            'app': {
                content: `
import React, { Component } from 'react';
import {Tree} from 'primereact/tree';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.nodes = [
            {
                key: "0",
                label: 'Installation',
                children: [
                    {key: "0-0", label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                    {key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                    {key: "0-2", label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                    {key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
                ]
            },
            {
                key: "1",
                label: 'Main Concepts',
                children: [
                    {key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                    {key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                    {key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                    {key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                    {key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                    {key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
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
                <h3>Navigation</h3>
                <Tree value={this.nodes} nodeTemplate={this.nodeTemplate} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React from 'react';
import {Tree} from 'primereact/tree';

const TreeTemplatingDemo = () => {
    const nodes = [
        {
            key: "0",
            label: 'Installation',
            children: [
                {key: "0-0", label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                {key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                {key: "0-2", label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                {key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                {key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                {key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                {key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                {key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                {key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                {key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
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
    };

    return (
        <div>
            <h3>Navigation</h3>
            <Tree value={nodes} nodeTemplate={nodeTemplate} />
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React from 'react';
import {Tree} from 'primereact/tree';

const TreeTemplatingDemo = () => {
    const nodes = [
        {
            key: "0",
            label: 'Installation',
            children: [
                {key: "0-0", label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                {key: "0-1", label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                {key: "0-2", label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                {key: "0-3", label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
            ]
        },
        {
            key: "1",
            label: 'Main Concepts',
            children: [
                {key: "1-0", label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                {key: "1-1", label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                {key: "1-2", label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                {key: "1-3", label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                {key: "1-4", label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                {key: "1-5", label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
            ]
        }
    ];

    const nodeTemplate = (node: any) => {
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
    };

    return (
        <div>
            <h3>Navigation</h3>
            <Tree value={nodes} nodeTemplate={nodeTemplate} />
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tree" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTemplatingDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
