import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {Button} from '../../components/button/Button';
import {Growl} from '../../components/growl/Growl';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nodes: null,
            lazyNodes: this.createLazyNodes(),
            delayedNodes: null,
            navigation: this.createNavigation(),  
            expandedKeys: {},
            loading: true,
            selectedNodeKey1: null, 
            selectedNodeKey2: null, 
            selectedNodeKeys1: null, 
            selectedNodeKeys2: null, 
            selectedNodeKeys3: null  
        };

        this.nodeService = new NodeService();

        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
        this.loadOnExpand = this.loadOnExpand.bind(this);
        this.toggleMovies = this.toggleMovies.bind(this);
        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    createNavigation() {
        return [
            {
                label: 'Insallation',
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

    createLazyNodes() {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    onExpand(event) {
        this.growl.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    }

    onCollapse(event) {
        this.growl.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    }

    onSelect(event) {
        this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    onUnselect(event) {
        this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    }

    loadOnExpand(event) {
        let node = {...event.node};
        node.children = [];

        for (let i = 0; i < 3; i++) {
            node.children.push({
                key: node.key + '-' + i,
                label: 'Lazy ' + node.label + '-' + i
            });
        }
        
        let value = [...this.state.lazyNodes];
        value[parseInt(event.node.key)] = node; 
        this.setState({
            lazyNodes: value
        })
    }

    toggleMovies() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['2'])
            delete expandedKeys['2'];
        else
            expandedKeys['2'] = true;

        this.setState({expandedKeys: expandedKeys});
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

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));

        setTimeout(() => {
            this.nodeService.getTreeNodes().then(data => this.setState({
                delayedNodes: data,
                loading: false
            }));
        }, 3000);
    }

    render() {
        return (
            <div>
                <TreeSubmenu />
                
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree</h1>
                        <p>Tree is used to display hierarchical data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3 className="first">Uncontrolled</h3>
                    <Tree value={this.state.nodes} />

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleMovies} label="Toggle Movies" />
                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} 
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}} />

                    <h3>Loading Status</h3>
                    <Tree value={this.state.delayedNodes} loading={this.state.loading} l/>

                    <h3>Single Selection</h3>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey1} onSelectionChange={e => this.setState({selectedNodeKey1: e.value})} />

                    <h3>Multiple Selection with MetaKey</h3>
                    <Tree value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({selectedNodeKeys1: e.value})} />

                    <h3>Multiple Selection without MetaKey</h3>
                    <Tree value={this.state.nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({selectedNodeKeys2: e.value})} />

                    <h3>Checkbox Selection</h3>
                    <Tree value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({selectedNodeKeys3: e.value})} />

                    <h3>Events</h3>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey2} onSelectionChange={e => this.setState({selectedNodeKey2: e.value})} 
                            onExpand={this.onExpand} onCollapse={this.onCollapse} onSelect={this.onSelect} onUnselect={this.onUnselect} />

                    <h3>Lazy Loading</h3>
                    <Tree value={this.state.lazyNodes} onExpand={this.loadOnExpand} />

                    <h3>Templating</h3>
                    <Tree value={this.state.navigation} nodeTemplate={this.nodeTemplate} />
                </div>

                <TreeContextMenuDemoDoc />
            </div>
        )
    }
}

export class TreeContextMenuDemoDoc extends Component {

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


`}
</CodeHighlight>

                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
