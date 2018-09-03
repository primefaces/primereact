import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {Button} from '../../components/button/Button';
import {Growl} from '../../components/growl/Growl';
import {NodeService} from '../service/NodeService';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            nodes: null,
            lazyNodes: this.createLazyNodes(),
            navigation: this.createNavigation(),  
            expandedKeys: {},
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
    }

    render() {
        return (
            <div>
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

                <TreeDoc />
            </div>
        )
    }
}

export class TreeDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Tree} from 'primereact/tree';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>

            <h3>TreeNode API</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>label</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Label of the node.</td>
                        </tr>
                        <tr>
                            <td>data</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Data represented by the node.</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon of the node to display next to content.</td>
                        </tr>
                        <tr>
                            <td>expandedIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon to use in expanded state.</td>
                        </tr>
                        <tr>
                            <td>collapsedIcon</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Icon to use in collapsed state.</td>
                        </tr>
                        <tr>
                            <td>children</td>
                            <td>TreeNode[]</td>
                            <td>null</td>
                            <td>An array of treenodes as children.</td>
                        </tr>
                        <tr>
                            <td>leaf</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>Specifies if the node has children. Used in lazy loading.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the node.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the node.</td>
                        </tr>
                        <tr>
                            <td>expanded</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>Whether the node is in an expanded or collapsed state.</td>
						</tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the style class for the node element.</td>
                        </tr>
                        <tr>
                            <td>selectable</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>Used to disable selection of a particular node.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <CodeHighlight className="language-jsx">
{`
<Tree value={data} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
const data = [
    {
        "label": "Documents",
        "data": "Documents Folder",
        "icon": "pi pi-fw pi-inbox",
        "children": [{
            "label": "Work",
            "data": "Work Folder",
            "icon": "pi pi-fw pi-cog",
            "children": [{ "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
        },
        {
            "label": "Home",
            "data": "Home Folder",
            "icon": "pi pi-fw pi-home",
            "children": [{ "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
        }]
    },
    {
        "label": "Events",
        "data": "Videos Folder",
        "icon": "pi pi-fw pi-calendar",
        "children": [
            { "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
            { "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
            { "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
    },
    {
        "label": "Movies",
        "data": "Movies Folder",
        "icon": "pi pi-fw pi-star",
        "children": [{
            "label": "Al Pacino",
            "data": "Pacino Movies",
            "children": [{ "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
        },
        {
            "label": "Robert De Niro",
            "data": "De Niro Movies",
            "children": [{ "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
        }]
    }
];

`}
</CodeHighlight>

            <h3>Selection</h3>
            <p>Tree supports single, multiple and checkbox selection modes. Define <i>selectionMode</i>, <i>selection</i> and <i>selectionChange</i> properties to control the selection.</p>
            <CodeHighlight className="language-jsx">
{`
<Tree value={data} layout="horizontal" selectionMode="single" selection={this.state.selectedNode} selectionChange={(e) => this.setState({selectedNode: e.selection})} />

`}
</CodeHighlight>

            <h3>Horizontal Orientation</h3>
            <p>Horizontal mode is the alternative <i>layout</i> option.</p>

<CodeHighlight className="language-jsx">
{`
<Tree value={data} layout="horizontal" />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`

render() {
        const data = // data array

        var horizontalTreeData = [{
            label: 'Root',
            children: data
        }];

        return <Tree value={horizontalTreeData} layout="horizontal" />
    }

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                         <tr>
                            <td>value</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of treenodes.</td>
                        </tr>
                        <tr>
                            <td>selectionMode</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                        </tr>
                        <tr>
                            <td>selection</td>
                            <td>any</td>
                            <td>null</td>
                            <td>A single treenode instance or an array to refer to the selections.</td>
                        </tr>
                        <tr>
                            <td>layout</td>
                            <td>string</td>
                            <td>vertical</td>
                            <td>Defines the orientation of the tree, valid values are 'vertical' and 'horizontal'.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>metaKeySelection</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                            can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                        </tr>
                        <tr>
                            <td>propagateSelectionUp</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether checkbox selections propagate to ancestor nodes.</td>
                        </tr>
                        <tr>
                            <td>propagateSelectionDown</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether checkbox selections propagate to descendant nodes.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Parameters</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onNodeSelect</td>
                            <td>event.originalEvent: browser event <br />
                                event.node: Selected node instance.</td>
                            <td>Callback to invoke when a node is selected.</td>
                        </tr>
                        <tr>
                            <td>onNodeUnselect</td>
                            <td>event.originalEvent: browser event <br />
                                event.node: Unselected node instance.</td>
                            <td>Callback to invoke when a node is unselected.</td>
                        </tr>
                        <tr>
                            <td>onNodeExpand</td>
                            <td>event.originalEvent: browser event <br />
                                event.node: Expanded node instance.</td>
                            <td>Callback to invoke when a node is expanded.</td>
                        </tr>
                        <tr>
                            <td>onNodeCollapse</td>
                            <td>event.originalEvent: browser event <br />
                                event.node: Collapsed node instance.</td>
                            <td>Callback to invoke when a node is collapsed.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-tree</td>
                            <td>Main container element</td>
                        </tr>
                        <tr>
                            <td>p-tree-horizontal</td>
                            <td>Main container element in horizontal mode</td>
                        </tr>
                        <tr>
                            <td>p-tree-container</td>
                            <td>Container of nodes</td>
                        </tr>
                        <tr>
                            <td>p-treenode</td>
                            <td>A treenode element</td>
                        </tr>
                        <tr>
                            <td>p-treenode-content</td>
                            <td>Content of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-toggler</td>
                            <td>Toggle icon</td>
                        </tr>
                        <tr>
                            <td>p-treenode-icon</td>
                            <td>Icon of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-label</td>
                            <td>Label of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-children</td>
                            <td>Container element for node children</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tree" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primerecat/tree

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            data1: this.generateData(),
            data2: [{
                label: 'Root',
                children: this.generateData()
            }],
            selectedFile1: null, 
            selectedFile2: null,
            selectedFiles1: [], 
            selectedFiles2: []
        };
    }

    generateData() {
        return [
            {
                "label": "Documents",
                "data": "Documents Folder",
                "icon": "pi pi-fw pi-inbox",
                "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "icon": "pi pi-fw pi-cog",
                    "children": [{ "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "icon": "pi pi-fw pi-home",
                    "children": [{ "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
                }]
            },
            {
                "label": "Events",
                "data": "Videos Folder",
                "icon": "pi pi-fw pi-calendar",
                "children": [
                    { "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
                    { "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
                    { "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "icon": "pi pi-fw pi-star",
                "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{ "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{ "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
                }]
            }
        ];
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree</h1>
                        <p>Tree is used to display hierarchical data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <Tree value={this.state.data1} />

                    <h3>Single Selection</h3>
                    <Tree value={this.state.data1} selectionMode="single" selection={this.state.selectedFile1} selectionChange={(e) => this.setState({selectedFile1: e.selection})}></Tree>
                    <div style={{ 'marginTop': '8px' }}>Selected Node: {this.state.selectedFile1 && this.state.selectedFile1.label}</div>

                    <h3>Multiple Selection with Metakey</h3>
                    <Tree value={this.state.data1} selectionMode="multiple" selection={this.state.selectedFiles1} selectionChange={(e) => this.setState({selectedFiles1: e.selection})}></Tree>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles1.map((obj, i) => {
                                return <span key={i}>{i!==0? ",": ""} {obj.label}</span>
                            })
                        }
                    </div>

                    <h3>Multiple Selection with Checkbox</h3>
                    <Tree value={this.state.data1} selectionMode="checkbox" selection={this.state.selectedFile} selectionChange={(e) => this.setState({selectedFile: e.selection})}></Tree>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes: 
                            {
                            this.state.selectedFiles2.map((obj, i) => {
                                return <span key={i}>{i!==0? ",": ""} {obj.label}</span>
                            })
                        }
                    </div>

                    <h3>Horizontal Tree</h3>
                    <Tree value={this.state.data2} layout="horizontal" selectionMode="single" selection={this.state.selectedFile2} selectionChange={(e) => this.setState({selectedFile2: e.selection})}></Tree>
                    <div style={{ 'marginTop': '8px' }}>Selected Node: {this.state.selectedFile2 && this.state.selectedFile2.label}</div>
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
