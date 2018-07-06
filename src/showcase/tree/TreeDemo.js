import React, { Component } from 'react';
import {Tree} from '../../components/tree/Tree';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

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
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Expenses.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Resume Document" }]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Invoices.txt", "icon": "fa fa-fw fa-file-word-o", "data": "Invoices for this month" }]
                }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeUI Logo" }]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{ "label": "Scarface", "icon": "fa fa-fw fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa fa-fw fa-file-video-o", "data": "Serpico Movie" }]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{ "label": "Goodfellas", "icon": "fa fa-fw fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa fa-fw fa-file-video-o", "data": "Untouchables Movie" }]
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
            <div className="content-section source">
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
        "expandedIcon": "fa fa-fw fa-folder-open",
        "collapsedIcon": "fa fa-fw fa-folder",
        "children": [{
            "label": "Work",
            "data": "Work Folder",
            "expandedIcon": "fa fa-fw fa-folder-open",
            "collapsedIcon": "fa fa-fw fa-folder",
            "children": [{ "label": "Expenses.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Resume Document" }]
        },
        {
            "label": "Home",
            "data": "Home Folder",
            "expandedIcon": "fa fa-fw fa-folder-open",
            "collapsedIcon": "fa fa-fw fa-folder",
            "children": [{ "label": "Invoices.txt", "icon": "fa fa-fw fa-file-word-o", "data": "Invoices for this month" }]
        }]
    },
    {
        "label": "Pictures",
        "data": "Pictures Folder",
        "expandedIcon": "fa fa-fw fa-folder-open",
        "collapsedIcon": "fa fa-fw fa-folder",
        "children": [
            { "label": "barcelona.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "Barcelona Photo" },
            { "label": "logo.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeFaces Logo" },
            { "label": "primeui.png", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeUI Logo" }]
    },
    {
        "label": "Movies",
        "data": "Movies Folder",
        "expandedIcon": "fa fa-fw fa-folder-open",
        "collapsedIcon": "fa fa-fw fa-folder",
        "children": [{
            "label": "Al Pacino",
            "data": "Pacino Movies",
            "children": [{ "label": "Scarface", "icon": "fa fa-fw fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa fa-fw fa-file-video-o", "data": "Serpico Movie" }]
        },
        {
            "label": "Robert De Niro",
            "data": "De Niro Movies",
            "children": [{ "label": "Goodfellas", "icon": "fa fa-fw fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa fa-fw fa-file-video-o", "data": "Untouchables Movie" }]
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
                            <td>ui-tree</td>
                            <td>Main container element</td>
                        </tr>
                        <tr>
                            <td>ui-tree-horizontal</td>
                            <td>Main container element in horizontal mode</td>
                        </tr>
                        <tr>
                            <td>ui-tree-container</td>
                            <td>Container of nodes</td>
                        </tr>
                        <tr>
                            <td>ui-treenode</td>
                            <td>A treenode element</td>
                        </tr>
                        <tr>
                            <td>ui-treenode-content</td>
                            <td>Content of a treenode</td>
                        </tr>
                        <tr>
                            <td>ui-treenode-toggler</td>
                            <td>Toggle icon</td>
                        </tr>
                        <tr>
                            <td>ui-treenode-icon</td>
                            <td>Icon of a treenode</td>
                        </tr>
                        <tr>
                            <td>ui-treenode-label</td>
                            <td>Label of a treenode</td>
                        </tr>
                        <tr>
                            <td>ui-treenode-children</td>
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
                    <i className="fa fa-github"></i>
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
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Expenses.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "fa fa-fw fa-file-word-o", "data": "Resume Document" }]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "fa fa-fw fa-folder-open",
                    "collapsedIcon": "fa fa-fw fa-folder",
                    "children": [{ "label": "Invoices.txt", "icon": "fa fa-fw fa-file-word-o", "data": "Invoices for this month" }]
                }]
            },
            {
                "label": "Pictures",
                "data": "Pictures Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [
                    { "label": "barcelona.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "Barcelona Photo" },
                    { "label": "logo.jpg", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeFaces Logo" },
                    { "label": "primeui.png", "icon": "fa fa-fw fa-file-image-o", "data": "PrimeUI Logo" }]
            },
            {
                "label": "Movies",
                "data": "Movies Folder",
                "expandedIcon": "fa fa-fw fa-folder-open",
                "collapsedIcon": "fa fa-fw fa-folder",
                "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{ "label": "Scarface", "icon": "fa fa-fw fa-file-video-o", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "fa fa-fw fa-file-video-o", "data": "Serpico Movie" }]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{ "label": "Goodfellas", "icon": "fa fa-fw fa-file-video-o", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "fa fa-fw fa-file-video-o", "data": "Untouchables Movie" }]
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
