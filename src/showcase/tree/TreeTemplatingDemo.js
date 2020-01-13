import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: this.createNavigation()
        };

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    createNavigation() {
        return [
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
                    <Tree value={this.state.nodes} nodeTemplate={this.nodeTemplate} />
                </div>

                <TreeTemplatingDemoDoc />
            </div>
        )
    }
}

export class TreeTemplatingDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: this.createNavigation()
        };

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    createNavigation() {
        return [
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
                    <div className="feature-intro">
                        <h1>Tree - Templating</h1>
                        <p>Tree nodes can be customized to display custom content.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Navigation</h3>
                    <Tree value={this.state.nodes} nodeTemplate={this.nodeTemplate} />
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>

                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
