import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
                label: 'Installation',
                children: [
                    {label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                    {label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                    {label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                    {label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
                ]
            },
            {
                label: 'Main Concepts',
                children: [
                    {label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                    {label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                    {label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                    {label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                    {label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                    {label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
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
                label: 'Installation',
                children: [
                    {label: 'Getting Started', url:'https://reactjs.org/docs/getting-started.html'},
                    {label: 'Add React', url: 'https://reactjs.org/docs/add-react-to-a-website.html'},
                    {label: 'Create an App', url:'https://reactjs.org/docs/create-a-new-react-app.html'},
                    {label: 'CDN Links', url: 'https://reactjs.org/docs/cdn-links.html'}
                ]
            },
            {
                label: 'Main Concepts',
                children: [
                    {label: 'Hello World', url: 'https://reactjs.org/docs/hello-world.html'},
                    {label: 'Introducing JSX', url: 'https://reactjs.org/docs/introducing-jsx.html'},
                    {label: 'Rendering Elements', url: 'https://reactjs.org/docs/rendering-elements.html'},
                    {label: 'Components and Props', url: 'https://reactjs.org/docs/components-and-props.html'},
                    {label: 'State and LifeCycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html'},
                    {label: 'Handling Events', url: 'https://reactjs.org/docs/handling-events.html'}
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
