import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import {Column} from "../../components/column/Column";
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: null, selectedFiles1: [], selectedFiles2: [] };
    }

    onSelectionChange(e) {
        this.setState({ selectedFile: e.selection });
    }

    onMultiMetaKeySelectionChange(e) {
        this.setState({ selectedFiles1: e.selection });
    }

    onCheckboxSelectionChange(e) {
        this.setState({ selectedFiles2: e.selection });
    }

    render() {
        var data = [
            {
                "data": {
                    "name": "Documents",
                    "size": "75kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Work",
                            "size": "55kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Expenses.doc",
                                    "size": "30kb",
                                    "type": "Document"
                                }
                            },
                            {
                                "data": {
                                    "name": "Resume.doc",
                                    "size": "25kb",
                                    "type": "Resume"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Home",
                            "size": "20kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Invoices",
                                    "size": "20kb",
                                    "type": "Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Pictures",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "barcelona.jpg",
                            "size": "90kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "primeui.png",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "optimus.jpg",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    }
                ]
            }
        ];

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <TreeTable value={data} header="Basic">
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Single Selection</h3>
                    <TreeTable value={data} selectionMode="single" header="Single Selection" selectionChange={this.onSelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>Selected Node: {this.state.selectedFile && this.state.selectedFile.data.name}</div>

                    <h3>Multiple Selection with Metakey</h3>
                    <TreeTable value={data} selectionMode="multiple" header="Multiple Selection with MetaKey" selectionChange={this.onMultiMetaKeySelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles1.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>

                    <h3>Multiple Selection with Checkbox</h3>
                    <TreeTable value={data} selectionMode="checkbox" header="Checkbox Selection" selectionChange={this.onCheckboxSelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles2.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>
                </div>

                <TreeTableDoc />
            </div>
        )
    }
}

export class TreeTableDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {TreeTable} from 'primereact/components/treetable/TreeTable';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>TreeTable component requires an array of TreeNode objects as its value. TreeTable requires a value, selectionChange callback(for selectable TreeTable).</p>

                        TreeNode:
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
                                        <td>Icon of the node to display next to content. Not used by TreeTable.</td>
                                    </tr>
                                    <tr>
                                        <td>expandedIcon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon to use in expanded state. Not used by TreeTable.</td>
                                    </tr>
                                    <tr>
                                        <td>collapsedIcon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon to use in collapsed state. Not used by TreeTable.</td>
                                    </tr>
                                    <tr>
                                        <td>children</td>
                                        <td>any</td>
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
                                </tbody>
                            </table>
                        </div>
<CodeHighlight className="html">
{`
<TreeTable value={data} />

`}
</CodeHighlight>

<CodeHighlight className="javascript">
{`

render() {
        var data = [
            {
                "data": {
                    "name": "Documents",
                    "size": "75kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Work",
                            "size": "55kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Expenses.doc",
                                    "size": "30kb",
                                    "type": "Document"
                                }
                            },
                            {
                                "data": {
                                    "name": "Resume.doc",
                                    "size": "25kb",
                                    "type": "Resume"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Home",
                            "size": "20kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Invoices",
                                    "size": "20kb",
                                    "type": "Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Pictures",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "barcelona.jpg",
                            "size": "90kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "primeui.png",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "optimus.jpg",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    }
                ]
            }
        ];

        return <TreeTable value={data} />
    }

`}
</CodeHighlight>

                        <h3>Column Component</h3>
                        <p>TreeTable utilizes the following options defined by a column component.</p>
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
                                        <td>field</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property of a row data.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Header text of a column.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Footer text of a column.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the column.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

<CodeHighlight className="javascript">
{`
import {Column} from 'primereact/components/column/Column';

`}
</CodeHighlight>

<CodeHighlight className="html">
{`
<Column field="name" header="Name"></Column>

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
                                        <td>labelExpand</td>
                                        <td>string</td>
                                        <td>Expand</td>
                                        <td>Tooltip and screenreader text for expand icon.</td>
                                    </tr>
                                    <tr>
                                        <td>labelCollapse</td>
                                        <td>string</td>
                                        <td>Collapse</td>
                                        <td>Tooltip and screenreader text for collapse icon.</td>
                                    </tr>
                                    <tr>
                                        <td>selectionMode</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the selection mode, valid values "single", "multiple" and "checkbox".</td>
                                    </tr>
                                    <tr>
                                        <td>selection</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>A single treenode instance or an array to refer to the selections.</td>
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
                                        <td>header</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Label of header.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Label of footer.</td>
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
                                    <tr>
                                        <td>selectionChange</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Selected node instance.</td>
                                        <td>Callback to invoke when a node is selected. <br />
                                            TreeTable requires selectionChange callback (for selectable TreeTable)</td>
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
                                        <td>ui-treetable</td>
                                        <td>Main container element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-treetable-header</td>
                                        <td>Header element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-treetable-tablewrapper</td>
                                        <td>Container of table</td>
                                    </tr>
                                    <tr>
                                        <td>ui-treetable-footer</td>
                                        <td>Footer element</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
<CodeHighlight className="javascript">
                            {`
export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: null, selectedFiles1: [], selectedFiles2: [] };
    }

    onSelectionChange(e) {
        this.setState({ selectedFile: e.selection });
    }

    onMultiMetaKeySelectionChange(e) {
        this.setState({ selectedFiles1: e.selection });
    }

    onCheckboxSelectionChange(e) {
        this.setState({ selectedFiles2: e.selection });
    }

    render() {
        var data = [
            {
                "data": {
                    "name": "Documents",
                    "size": "75kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "Work",
                            "size": "55kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Expenses.doc",
                                    "size": "30kb",
                                    "type": "Document"
                                }
                            },
                            {
                                "data": {
                                    "name": "Resume.doc",
                                    "size": "25kb",
                                    "type": "Resume"
                                }
                            }
                        ]
                    },
                    {
                        "data": {
                            "name": "Home",
                            "size": "20kb",
                            "type": "Folder"
                        },
                        "children": [
                            {
                                "data": {
                                    "name": "Invoices",
                                    "size": "20kb",
                                    "type": "Text"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "name": "Pictures",
                    "size": "150kb",
                    "type": "Folder"
                },
                "children": [
                    {
                        "data": {
                            "name": "barcelona.jpg",
                            "size": "90kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "primeui.png",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    },
                    {
                        "data": {
                            "name": "optimus.jpg",
                            "size": "30kb",
                            "type": "Picture"
                        }
                    }
                ]
            }
        ];

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <TreeTable value={data} header="Basic">
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Single Selection</h3>
                    <TreeTable value={data} selectionMode="single" header="Single Selection" selectionChange={this.onSelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>Selected Node: {this.state.selectedFile && this.state.selectedFile.data.name}</div>

                    <h3>Multiple Selection with Metakey</h3>
                    <TreeTable value={data} selectionMode="multiple" header="Multiple Selection with MetaKey" selectionChange={this.onMultiMetaKeySelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles1.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>

                    <h3>Multiple Selection with Checkbox</h3>
                    <TreeTable value={data} selectionMode="checkbox" header="Checkbox Selection" selectionChange={this.onCheckboxSelectionChange.bind(this)}>
                        <Column field="name" header="Name"></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                    <div style={{ 'marginTop': '8px' }}>
                        Selected Nodes:
                            {
                            this.state.selectedFiles2.map((obj, i) => {
                                return <span key={i}>{i !== 0 ? "," : ""} {obj.data.name}</span>
                            })
                        }
                    </div>
                </div>

                 <TreeTableDoc />
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

