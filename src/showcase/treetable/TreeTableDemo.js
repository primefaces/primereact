import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { Button } from '../../components/button/Button';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {}
        };
        this.nodeservice = new NodeService();
        this.toggleApplications = this.toggleApplications.bind(this);
    }

    toggleApplications() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Uncontrolled</h3>
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleApplications} label="Toggle Applications" />
                    <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableDoc />
            </div>
        )
    }
}

export class TreeTableDoc extends Component {

    shouldComponentUpdate() {
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
import {TreeTable} from 'primereact/treetable';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>TreeTable component requires an array of TreeNode objects as its <i>value</i> and columns defined with one or more Column components.</p>

                        <h3>TreeNode API</h3>
                        <p>Following properties of the API are currently utilized by the TreeTable.</p>
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
                                        <td>key</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Unique key of the node.</td>
                                    </tr>
                                    <tr>
                                        <td>data</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Data represented by the node.</td>
                                    </tr>
                                    <tr>
                                        <td>children</td>
                                        <td>TreeNode[]</td>
                                        <td>null</td>
                                        <td>An array of treenodes as children.</td>
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
                                        <td>selectable</td>
                                        <td>boolean</td>
                                        <td>null</td>
                                        <td>Whether the node is selectable when selection mode is enabled.</td>
                                    </tr>
                                    <tr>
                                        <td>leaf</td>
                                        <td>boolean</td>
                                        <td>null</td>
                                        <td>Specifies if the node has children. Used in lazy loading.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p>Here is a sample json response to serve as the datasource of the TreeTable.</p>
<div style={{height: '400px', overflow: 'auto'}}>
<CodeHighlight className="language-javascript">
{`
{
    "root":
    [
        {
            "key": "0",
            "data":{
                "name":"Applications",
                "size":"100kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "0-0",
                    "data":{
                        "name":"React",
                        "size":"25kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "0-0-0",
                            "data":{
                                "name":"react.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-1",
                            "data":{
                                "name":"native.app",
                                "size":"10kb",
                                "type":"Application"
                            }
                        },
                        {
                            "key": "0-0-2",
                            "data":{
                                "name":"mobile.app",
                                "size":"5kb",
                                "type":"Application"
                            }
                        }
                    ]
                },
                {
                    "key": "0-1",
                    "data":{
                        "name":"editor.app",
                        "size":"25kb",
                        "type":"Application"
                    }
                },
                {
                    "key": "0-2",
                    "data":{
                        "name":"settings.app",
                        "size":"50kb",
                        "type":"Application"
                    }
                }
            ]
        },
        {
            "key": "1",
            "data":{
                "name":"Cloud",
                "size":"20kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "1-0",
                    "data":{
                        "name":"backup-1.zip",
                        "size":"10kb",
                        "type":"Zip"
                    }
                },
                {
                    "key": "1-1",
                    "data":{
                        "name":"backup-2.zip",
                        "size":"10kb",
                        "type":"Zip"
                    }
                }
            ]
        },
        {
            "key": "2",
            "data": {
                "name":"Desktop",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "2-0",
                    "data":{
                        "name":"note-meeting.txt",
                        "size":"50kb",
                        "type":"Text"
                    }
                },
                {
                    "key": "2-1",
                    "data":{
                        "name":"note-todo.txt",
                        "size":"100kb",
                        "type":"Text"
                    }
                }
            ]
        },
        {
            "key": "3",
            "data":{
                "name":"Documents",
                "size":"75kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "3-0",
                    "data":{
                        "name":"Work",
                        "size":"55kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "3-0-0",
                            "data":{
                                "name":"Expenses.doc",
                                "size":"30kb",
                                "type":"Document"
                            }
                        },
                        {
                            "key": "3-0-1",
                            "data":{
                                "name":"Resume.doc",
                                "size":"25kb",
                                "type":"Resume"
                            }
                        }
                    ]
                },
                {
                    "key": "3-1",
                    "data":{
                        "name":"Home",
                        "size":"20kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "3-1-0",
                            "data":{
                                "name":"Invoices",
                                "size":"20kb",
                                "type":"Text"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "4",
            "data": {
                "name":"Downloads",
                "size":"25kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "4-0",
                    "data": {
                        "name":"Spanish",
                        "size":"10kb",
                        "type":"Folder"
                    },
                    "children":[
                        {
                            "key": "4-0-0",
                            "data":{
                                "name":"tutorial-a1.txt",
                                "size":"5kb",
                                "type":"Text"
                            }
                        },
                        {
                            "key": "4-0-1",
                            "data":{
                                "name":"tutorial-a2.txt",
                                "size":"5kb",
                                "type":"Text"
                            }
                        }
                    ]
                },
                {
                    "key": "4-1",
                    "data":{
                        "name":"Travel",
                        "size":"15kb",
                        "type":"Text"
                    },
                    "children":[
                        {
                            "key": "4-1-0",
                            "data":{
                                "name":"Hotel.pdf",
                                "size":"10kb",
                                "type":"PDF"
                            }
                        },
                        {
                            "key": "4-1-1",
                            "data":{
                                "name":"Flight.pdf",
                                "size":"5kb",
                                "type":"PDF"
                            }
                        }
                    ]
                }
            ]
        },
        {
            "key": "5",
            "data": {
                "name":"Main",
                "size":"50kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "5-0",
                    "data":{
                        "name":"bin",
                        "size":"50kb",
                        "type":"Link"
                    }
                },
                {
                    "key": "5-1",
                    "data":{
                        "name":"etc",
                        "size":"100kb",
                        "type":"Link"
                    }
                },
                {
                    "key": "5-2",
                    "data":{
                        "name":"var",
                        "size":"100kb",
                        "type":"Link"
                    }
                }
            ]
        },
        {
            "key": "6",
            "data":{
                "name":"Other",
                "size":"5kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "6-0",
                    "data":{
                        "name":"todo.txt",
                        "size":"3kb",
                        "type":"Text"
                    }
                },
                {
                    "key": "6-1",
                    "data":{
                        "name":"logo.png",
                        "size":"2kb",
                        "type":"Picture"
                    }
                }
            ]
        },
        {
            "key": "7",
            "data":{
                "name":"Pictures",
                "size":"150kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "7-0",
                    "data":{
                        "name":"barcelona.jpg",
                        "size":"90kb",
                        "type":"Picture"
                    }
                },
                {
                    "key": "7-1",
                    "data":{
                        "name":"primeng.png",
                        "size":"30kb",
                        "type":"Picture"
                    }
                },
                {
                    "key": "7-2",
                    "data":{
                        "name":"prime.jpg",
                        "size":"30kb",
                        "type":"Picture"
                    }
                }
            ]
        },
        {
            "key": "8",
            "data":{
                "name":"Videos",
                "size":"1500kb",
                "type":"Folder"
            },
            "children":[
                {
                    "key": "8-0",
                    "data":{
                        "name":"primefaces.mkv",
                        "size":"1000kb",
                        "type":"Video"
                    }
                },
                {
                    "key": "8-1",
                    "data":{
                        "name":"intro.avi",
                        "size":"500kb",
                        "type":"Video"
                    }
                }
            ]
        }
    ]
}

`}
</CodeHighlight>
</div>

                        <p>Throughout the samples, a NodeService would be used to connect to a server to fetch the nodes with axios.
                        Note that this is only for demo purposes, TreeTable does not have any restrictions on how data is provided.</p>

<CodeHighlight className="language-javascript">
{`
import axios from 'axios';

export class NodeService {

    getTreeTableNodes() {
        return axios.get('showcase/resources/demo/data/treetablenodes.json')
                .then(res => res.data.root);
    }

}

`}
</CodeHighlight>

                        <p>Following sample TreeTable has 3 columns and retrieves the data from the service on componentDidMount. Notice the <i>expander</i> property
                        in the name column to indicate that this column displays an icon to toggle the child nodes.</p>
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <TreeTable value={this.state.nodes}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        );
    }
}

`}
</CodeHighlight>

                        <p>Dynamic columns are also possible by creating the column component dynamically.</p>
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        let cols = [
            {field: 'name', header: 'Name'},
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        let dynamicColumns = cols.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <TreeTable value={this.state.nodes}>
                {dynamicColumns}
            </TreeTable>
        );
    }
}

`}
</CodeHighlight>
                        <h3>Column Component</h3>
                        <p>Column component defines various options that are utilized by the TreeTable to specify corresponding features.</p>

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
                                        <td>columnKey</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Identifier of a column if field property is not defined. Only utilized by reorderableColumns feature at the moment.</td>
                                    </tr>
                                    <tr>
                                        <td>field</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property of a row data.</td>
                                    </tr>
                                    <tr>
                                        <td>sortField</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Property of a row data used for sorting, defaults to field.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Header content of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>body</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Body content of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer content of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>sortable</td>
                                        <td>any</td>
                                        <td>false</td>
                                        <td>Defines if a column is sortable.</td>
                                    </tr>
                                    <tr>
                                        <td>sortFunction</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Sort function for custom sorting.</td>
                                    </tr>
                                    <tr>
                                        <td>filter</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if a column can be filtered.</td>
                                    </tr>
                                    <tr>
                                        <td>filterMatchMode</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines filterMatchMode; "startsWith", "contains", "endsWidth", "equals", "notEquals", "in" and "custom".</td>
                                    </tr>
                                    <tr>
                                        <td>filterType</td>
                                        <td>string</td>
                                        <td>text</td>
                                        <td>Type of the filter input field.</td>
                                    </tr>
                                    <tr>
                                        <td>filterPlaceholder</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines placeholder of the input fields.</td>
                                    </tr>
                                    <tr>
                                        <td>filterMaxlength</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Specifies the maximum number of characters allowed in the filter element.</td>
                                    </tr>
                                    <tr>
                                        <td>filterElement</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Element for custom filtering.</td>
                                    </tr>
                                    <tr>
                                        <td>filterFunction</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Custom filter function.</td>
                                    </tr>
                                    <tr>
                                        <td>filterHeaderStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the filter column header.</td>
                                    </tr>
                                    <tr>
                                        <td>filterHeaderClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the filter header column.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>headerStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>headerClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>bodyStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>bodyClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>footerStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>footerClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the column.</td>
                                    </tr>
                                    <tr>
                                        <td>expander</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Displays an icon to toggle expansion of children.</td>
                                    </tr>
                                    <tr>
                                        <td>frozen</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether the column is fixed in horizontal scrolling or not.</td>
                                    </tr>
                                    <tr>
                                        <td>colSpan</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of columns to span for grouping.</td>
                                    </tr>
                                    <tr>
                                        <td>rowSpan</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of rows to span for grouping.</td>
                                    </tr>
                                    <tr>
                                        <td>editor</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Function to provide the cell editor input.</td>
                                    </tr>
                                    <tr>
                                        <td>editorValidator</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Validator function to validate the cell input value.</td>
                                    </tr>
                                    <tr>
                                        <td>reorderable</td>
                                        <td>boolean</td>
                                        <td>null</td>
                                        <td>Used to defined reorderableColumns per column when reorderableColumns of table is enabled, defaults to value of reorderableColumns.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Controlled vs Uncontrolled</h3>
                        <p>Expansion state is managed in two ways, in uncontrolled mode only initial expanded state of a node can be defined using <i>expandedKeys</i> property whereas in controlled mode <i>expandedKeys</i>
                        property along with <i>onToggle</i> properties are used for full control over the state. If you need to expand or collapse the state of nodes programmatically then controlled mode should be used. Example below demonstrates
                        both cases;</p>

                    <CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: []
        };
        this.nodeservice = new NodeService();
        this.toggleApplications = this.toggleApplications.bind(this);
    }

    toggleApplications() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <h3>Uncontrolled</h3>
                <TreeTable value={this.state.nodes}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>

                <h3>Controlled</h3>
                <Button onClick={this.toggleApplications} label="Toggle Applications" />
                <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                    onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Table Layout</h3>
                        <p>Default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents
                            set <i>autoLayout</i> property to true. Note that auto layout cannot be supported in Scrollable or Resizable columns.
                        </p>

                        <h3>Templates</h3>
                        <p>Field data of a corresponding row is displayed as the cell content by default, this can be customized using templating where current row data and column properties are passed to the body template.
                            On the other hand, <i>header</i> and <i>footer</i> properties of a column are used to define the content of these sections by accepting either simple string values or JSX for advanced content. Similarly TreeTable itself
                            also provides <i>header</i> and <i>footer</i> properties for the main header and footer of the table.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeTableTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    actionTemplate(node, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{marginRight: '.5em'}}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    render() {
        const header = "File Viewer";
        const footer = <div style={{textAlign:'left'}}><Button icon="pi pi-refresh" tooltip="Reload"/></div>;

        return (
            <TreeTable value={this.state.nodes} header={header} footer={footer}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
                <Column body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Column Group</h3>
                        <p>Columns can be grouped at header and footer sections by defining a ColumnGroup component as the <i>headerColumnGroup</i> and <i>footerColumnGroup</i> properties.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { NodeService } from '../service/NodeService';

export class TreeTableColGroupDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    getSales() {
        return [
            {
                key: '0',
                data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342'},
                children: [
                    {
                        key: '0-0',
                        data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
                        children: [
                            {
                                key: '0-0-0',
                                data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' },
                            },
                            {
                                key: '0-0-1',
                                data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' },
                            }
                        ]
                    },
                    {
                        key: '0-1',
                        data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' },
                    }
                ]
            },
            {
                key: '1',
                data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
                children: [
                    {
                        key: '1-0',
                        data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' },
                    },
                    {
                        key: '1-1',
                        data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' },
                    }
                ]
            },
            {
                key: '2',
                data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
                children: [
                    {
                        key: '2-0',
                        data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' },
                    },
                    {
                        key: '2-1',
                        data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' },
                    }
                ]
            },
            {
                key: '3',
                data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
                children: [
                    {
                        key: '3-0',
                        data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' },
                    },
                    {
                        key: '3-1',
                        data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' },
                    }
                ]
            },
            {
                key: '4',
                data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
                children: [
                    {
                        key: '4-0',
                        data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' },
                    },
                    {
                        key: '4-1',
                        data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' },
                    }
                ]
            },
            {
                key: '5',
                data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
                children: [
                    {
                        key: '5-0',
                        data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' },
                    },
                    {
                        key: '5-1',
                        data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' },
                    }
                ]
            },
            {
                key: '6',
                data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
                children: [
                    {
                        key: '6-0',
                        data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' },
                    },
                    {
                        key: '6-1',
                        data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' },
                    }
                ]
            },
            {
                key: '7',
                data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
                children: [
                    {
                        key: '7-0',
                        data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' },
                    },
                    {
                        key: '7-1',
                        data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' },
                    }
                ]
            },
            {
                key: '8',
                data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
                children: [
                    {
                        key: '8-0',
                        data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' },
                    },
                    {
                        key: '8-1',
                        data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' },
                    }
                ]
            },
            {
                key: '9',
                data:  { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
                children: [
                    {
                        key: '9-0',
                        data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' },
                    },
                    {
                        key: '9-1',
                        data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' },
                    }
                ]
            }
        ];
    }

    componentDidMount() {
        this.setState({
            nodes: this.getSales()
        });
    }

    render() {
        const headerGroup = (
            <ColumnGroup>
                <Row>
                    <Column header="Brand" rowSpan={3} />
                    <Column header="Sale Rate" colSpan={4} />
                </Row>
                <Row>
                    <Column header="Sales" colSpan={2} />
                    <Column header="Profits" colSpan={2} />
                </Row>
                <Row>
                    <Column header="Last Year" />
                    <Column header="This Year" />
                    <Column header="Last Year" />
                    <Column header="This Year" />
                </Row>
            </ColumnGroup>
        );

        const footerGroup = (
            <ColumnGroup>
                <Row>
                    <Column footer="Totals:" colSpan={3} />
                    <Column footer="$506,202" />
                    <Column footer="$531,020" />
                </Row>
            </ColumnGroup>
        );

        return (
            <TreeTable value={this.state.nodes} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup}>
                <Column field="brand" expander />
                <Column field="lastYearSale" />
                <Column field="thisYearSale" />
                <Column field="lastYearProfit" />
                <Column field="thisYearProfit" />
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Pagination</h3>
                        <p>Pagination is enabled by setting <i>paginator</i> property to true, <i>rows</i> property defines the number of rows per page and optionally <i>pageLinks</i> specify the the number of page links to display.
                        See <Link to="/paginator">paginator</Link> component for more information about further customization options such as <i>paginatorTemplate</i>.</p>

                        <p>Pagination can either be used in <b>Controlled</b> or <b>Uncontrolled</b> manner. In controlled mode, <i>first</i> and <i>onPage</i> properties need to be defined to control the paginator state.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";

export class TreeTablePageDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            first: 0
        };
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <TreeTable value={this.state.nodes} paginator={true} rows={10}
                first={this.state.first} onPage={e => this.setState({first: e.first})}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <p>In uncontrolled mode, only <i>paginator</i> and <i>rows</i> need to be enabled. Index of the first record can be still be provided using the <i>first</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the paginator state, prefer to use the component as controlled.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";

export class TreeTablePageDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <TreeTable value={this.state.nodes} paginator={true} rows={10}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <p>Elements of the paginator can be customized using the <i>paginatorTemplate</i> by the TreeTable. Refer to the template section of the <Link to="/paginator"> paginator documentation</Link> for further options.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} paginator={true} rows={10}
    paginatorTemplate="RowsPerPageDropdown PageLinks FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

`}
</CodeHighlight>

                        <h3>Sorting</h3>
                        <p>Enabling <i>sortable</i> property at column component would be enough to make a column sortable. The property to use when sorting is <i>field</i> by default and can be customized using <i>sortField</i>.</p>

<CodeHighlight className="language-jsx">
{`
<Column field="vin" header="Vin" sortable />

`}
</CodeHighlight>

                        <p>By default sorting is executed on the clicked column only. To enable multiple field sorting, set <i>sortMode</i> property to "multiple" and use metakey when clicking on another column.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} sortMode="multiple">

`}
</CodeHighlight>

                        <p>In case you'd like to display the table as sorted per a single column by default on mount, use <i>sortField</i> and <i>sortOrder</i> properties in <b>Controlled</b> or <b>Uncontrolled</b> manner.
                        In controlled mode, <i>sortField</i>, <i>sortOrder</i> and <i>onSort</i> properties need to be defined to control the sorting state.</p>

<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} sortField={this.state.sortField} sortOrder={this.state.sortOrder} onSort={(e) => this.setState({sortField: e.sortField, sortOrder: e.sortOrder})}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>In multiple mode, use the <i>multiSortMeta</i> property and bind an array of SortMeta objects instead.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} multiSortMeta={multiSortMeta} onSort={(e) => this.setState({multiSortMeta: e.multiSortMeta})}>
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
let multiSortMeta = [];
multiSortMeta.push({field: 'year', order: 1});
multiSortMeta.push({field: 'brand', order: -1});

`}
</CodeHighlight>

                        <p>In uncontrolled mode, no additional properties need to be enabled. Initial sort field can be still be provided using the <i>sortField</i> property in uncontrolled mode however
                        it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the sorting state, prefer to use the component as controlled.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} sortField="year">
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>To customize sorting algorithm, set sortable option to custom and define a sortFunction that sorts the list.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} sortField="year">
    <Column field="name" header="Name" expander sortable></Column>
    <Column field="size" header="Size" sortable="custom" sortFunction={this.mysort}></Column>
    <Column field="type" header="Type" sortable></Column>
</TreeTable>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
mysort(event) {
    //event.field = Field to sort
    //event.order = Sort order
}

`}
</CodeHighlight>

                        <h3>Filtering</h3>
                        <p>Filtering is enabled by setting the <i>filter</i> property on a column. <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
                        in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>

<CodeHighlight className="language-javascript">
{`
<TreeTable value={this.state.nodes}>
    <Column field="name" header="Name" expander filter={true}></Column>
    <Column field="size" header="Size" filter={true}></Column>
    <Column field="type" header="Type" filter={true}></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>An optional global filter feature is available to search all fields with the same keyword,
                                        to implement this place an input component whose value is bound to the globalFilter property of the TreeTable.</p>
<CodeHighlight className="language-javascript">
{`
export class TreeTableFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            globalFilter: null
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        let header = <div style={{'textAlign':'left'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    </div>;

        return (
            <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter} header={header}>
                <Column field="name" header="Name" expander filter={true}></Column>
                <Column field="size" header="Size" filter={true}></Column>
                <Column field="type" header="Type" filter={true}></Column>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <p>By default, input fields are used as filter elements and this can be customized using the <i>filterElement</i> property of the Column that calls the filter function of the table instance by passing the value, field and the match mode.</p>
<CodeHighlight className="language-javascript">
{`
export class TreeTableCustomFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            nodes: [],
            brand: null,
            colors: null
        };
        this.nodeservice = new NodeService();
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onBrandChange(event) {
        this.tt.filter(event.value, 'brand', 'equals');
        this.setState({brand: event.value});
    }

    onColorChange(event) {
        this.tt.filter(event.value, 'color', 'in');
        this.setState({colors: event.value});
    }

    render() {
        let brands = [
                {label: 'All Brands', value: null},
                {label: 'Audi', value: 'Audi'},
                {label: 'BMW', value: 'BMW'},
                {label: 'Fiat', value: 'Fiat'},
                {label: 'Honda', value: 'Honda'},
                {label: 'Jaguar', value: 'Jaguar'},
                {label: 'Mercedes', value: 'Mercedes'},
                {label: 'Renault', value: 'Renault'},
                {label: 'VW', value: 'VW'},
                {label: 'Volvo', value: 'Volvo'}
            ];

        let brandFilter = <Dropdown style={{width: '100%'}} className="ui-column-filter"
                value={this.state.brand} options={brands} onChange={this.onBrandChange}/>

        let colors = [
            {label: 'White', value: 'White'},
            {label: 'Green', value: 'Green'},
            {label: 'Silver', value: 'Silver'},
            {label: 'Black', value: 'Black'},
            {label: 'Red', value: 'Red'},
            {label: 'Maroon', value: 'Maroon'},
            {label: 'Brown', value: 'Brown'},
            {label: 'Orange', value: 'Orange'},
            {label: 'Blue', value: 'Blue'}
        ];

        let colorFilter = <MultiSelect style={{width:'100%'}} className="ui-column-filter"
            value={this.state.colors} options={colors} onChange={this.onColorChange}/>

        return (
            <TreeTable ref={(el) => this.tt = el} value={this.state.nodes}>
                <Column field="vin" header="Vin" filter={true} expander />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} filterElement={brandFilter} />
                <Column field="color" header="Color" filter={true} filterElement={colorFilter} />
            </TreeTable>
        );
    }
}

`}
</CodeHighlight>

                        <p>In case you'd like to display the table as filtered by default on mount, use <i>filters</i> property in <b>Controlled</b> or <b>Uncontrolled</b> manner.
                                    In controlled mode, <i>filters</i> and <i>onFilter</i> properties need to be defined to control the filtering state.</p>

<CodeHighlight className="language-javascript">
{`
export class TreeTableDefaultFilteredDemo extends Component {

    constructor() {
        super();
        this.state = {
            nodes: [],
            filters: {
                'brand': {
                    value: 'BMW'
                }
            }
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <TreeTable value={this.state.nodes} filters={this.state.filters} onFilter={(e) => this.setState({filters: e.filters})}>
                <Column field="vin" header="Vin" filter={true} expander />
                <Column field="year" header="Year" filter={true} />
                <Column field="brand" header="Brand" filter={true} />
                <Column field="color" header="Color" filter={true}  />
            </TreeTable>
        );
    }
}

`}
</CodeHighlight>
                    <p>In uncontrolled filtering, no additional properties need to be enabled. Initial filtering can be still be provided using the <i>filters</i> property in uncontrolled mode however
                                it is evaluated at initial rendering and ignored in further updates. If you programmatically need to update the filtering state, prefer to use the component as controlled.</p>

                    <p>Custom filtering is implemented by setting the <i>filterMatchMode</i> property as "custom" and providing a function that takes the data value along with the filter value to return a boolean.</p>
            <CodeHighlight className="language-javascript">
{`
export class TreeTableFilterDemo extends Component {

    constructor() {
        super();
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.yearFilter = this.yearFilter.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    yearFilter(value, filter) {
        return filter > value;
    }

    render() {
        return (
            <TreeTable value={this.state.cars}>
                <Column field="vin" header="Vin" filter={true} expander />
                <Column field="year" header="Year" filter={true} filterMatchMode="custom" filterFunction={this.yearFilter}/>
                <Column field="brand" header="Brand" filter={true} />
                <Column field="color" header="Color" filter={true}  />
            </TreeTable>
        );
    }
}

`}
</CodeHighlight>


                        <h3>Selection</h3>
                        <p>TreeTable supports single, multiple and checkbox selection modes. Define <i>selectionMode</i>, <i>selectionKeys</i> and <i>onSelectionChange</i> properties to control the selection. In single mode, selectionKeys should
                        be a single value whereas in multiple or checkbox modes an array is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
                        in touch enabled devices, TreeTable does not require metaKey.</p>

                        <p>Example below demonstrates all cases along with the available callbacks to listen events such as node selection.</p>

                        <CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { Growl } from 'primereact/growl';
import { NodeService } from '../service/NodeService';

export class TreeTableSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: [],
            nodes3: [],
            nodes4: [],
            nodes5: [],
            selectedNodeKey1: null,
            selectedNodeKey2: null,
            selectedNodeKeys1: [],
            selectedNodeKeys2: [],
            selectedNodeKeys3: []
        };

        this.nodeservice = new NodeService();
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    onSelect(event) {
        this.growl.show({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    onUnselect(event) {
        this.growl.show({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes1: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes2: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes3: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes4: data}));
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes5: data}));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Selection</h1>
                        <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3 className="first">Single</h3>
                    <TreeTable value={this.state.nodes1} selectionMode="single" selectionKeys={this.state.selectedNodeKey1} onSelectionChange={e => this.setState({selectedNodeKey1: e.value})}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Multiple</h3>
                    <TreeTable value={this.state.nodes2} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({selectedNodeKeys1: e.value})} metaKeySelection={false}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Multiple with MetaKey</h3>
                    <TreeTable value={this.state.nodes3} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({selectedNodeKeys2: e.value})} metaKeySelection={true}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Events</h3>
                    <TreeTable value={this.state.nodes4} selectionMode="single" selectionKeys={this.state.selectedNodeKey2} onSelectionChange={e => this.setState({selectedNodeKey2: e.value})}
                        onSelect={this.onSelect} onUnselect={this.onUnselect}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Checkbox</h3>
                    <TreeTable value={this.state.nodes5} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({selectedNodeKeys3: e.value})}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Lazy</h3>
                        <p>Lazy loading is implemented using the <i>onExpand</i> event by adding children to the expanded node. <i>leaf</i> property should be enabled to indicate the node has children but not yet loaded. Here is a in-memory demo
                        that loads generated nodes on expand event to imitate a remote call with a timeout. Notice the usage of <i>loading</i> property as well to give users a feedback about the loading process.</p>

                        <CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";

export class TreeTableLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            first: 0,
            rows: 10,
            totalRecords: 0,
            loading: true
        };

        this.onPage = this.onPage.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                nodes: this.loadNodes(this.state.first, this.state.first + this.state.rows),
                totalRecords: 1000
            });
        }, 1000);
    }

    loadNodes(start, end) {
        let nodes = [];

        for(let i = start; i < end; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + (start + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (start + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    }

    onExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                this.loading = false;
                let lazyNode = {...event.node};

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        },
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let nodes = [...this.state.nodes];
                nodes[event.node.key] = lazyNode;

                this.setState({
                    loading: false,
                    nodes: nodes
                });
            }, 250);
        }
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            this.setState({
                first: event.first,
                rows: event.rows,
                nodes: this.loadNodes(event.first, event.first + event.rows),
                loading: false
            });
        }, 1000);
    }

    render() {
        return (
            <TreeTable value={this.state.nodes} lazy={true} paginator={true} totalRecords={this.state.totalRecords}
                first={this.state.first} rows={this.state.rows} onPage={this.onPage} onExpand={this.onExpand} loading={this.state.loading}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Incell Editing</h3>
                        <p>Incell editing feature provides a way to quickly edit data inside the table. A cell editor is defined using the <i>editor</i> property
                        that refers to a function to return an input element for the editing. Clicking outside the cell or hitting enter key closes the cell, however this may not be desirable if the input is invalid. In order
                        to decide whether to keep the cell open or not, provide a <i>editorValidator</i> function that validates the value.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext;
import { NodeService } from '../service/NodeService';

export class TreeTableEditDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();

        this.sizeEditor = this.sizeEditor.bind(this);
        this.typeEditor = this.typeEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onEditorValueChange(props, value) {
        let newNodes = JSON.parse(JSON.stringify(this.state.nodes));
        let editedNode = this.findNodeByKey(newNodes, props.node.key);
        editedNode.data[props.field] = value;

        this.setState({
            nodes: newNodes
        });
    }

    findNodeByKey(nodes, key) {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    inputTextEditor(props, field, width) {
        return (
            <InputText type="text" value={props.node.data[field]} style={{'width': width, 'padding': 0}}
                    onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
        );
    }

    sizeEditor(props) {
        return this.inputTextEditor(props, 'size', '100%');
    }

    typeEditor(props) {
        return this.inputTextEditor(props, 'type', '100%');
    }

    requiredValidator(props) {
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    render() {
        return (
            <TreeTable value={this.state.nodes}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" editor={this.sizeEditor} editorValidator={this.requiredValidator}></Column>
                <Column field="type" header="Type" editor={this.typeEditor}></Column>
            </TreeTable>
        )
    }
}

`}
</CodeHighlight>

                        <h3>ContextMenu</h3>
                        <p>One or more ContextMenu instances can be attached to nodes. Similar to selection, separate <i>contextMenuSelectionKey</i> and <i>onContextMenuSelectionChange</i> properties are necesary to manage the selected node with
                        right click. In addition, a context menu can either be displayed at <i>onContextMenu</i> event. Since this event also passes the node instance, you may choose to display a different context menu for a particular node.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { ContextMenu } from 'primereact/contextmenu';
import { Growl } from 'primereact/growl';
import { NodeService } from '../service/NodeService';

export class TreeTableContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {},
            selectedNodeKey: null,
            menu: [
                {
                    label: 'View Key',
                    icon: 'pi pi-search',
                    command: () => {
                        this.growl.show({severity: 'success', summary: 'Node Key', detail: this.state.selectedNodeKey});
                    }
                },
                {
                    label: 'Toggle',
                    icon: 'pi pi-cog',
                    command: () => {
                        let expandedKeys = {...this.state.expandedKeys};
                        if (expandedKeys[this.state.selectedNodeKey])
                            delete expandedKeys[this.state.selectedNodeKey];
                        else
                            expandedKeys[this.state.selectedNodeKey] = true;

                        this.setState({expandedKeys: expandedKeys});
                    }
                }
            ]
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <ContextMenu model={this.state.menu} ref={el => this.cm = el} onHide={() => this.setState({selectedNodeKey: null})}/>

                <TreeTable value={this.state.nodes}  expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                    contextMenuSelectionKey={this.state.selectedNodeKey} onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                    onContextMenu={event => this.cm.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
        </div>
        )
    }
}

`}
</CodeHighlight>

                        <h3>Column Resize</h3>
                        <p>Columns can be resized using drag drop by setting the <i>resizableColumns</i> to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized.
                            In "expand" mode, table width also changes along with the column width. <i>onColumnResizeEnd</i> is a callback that passes the resized column header as a parameter.</p>
<CodeHighlight className="language-jsx">
{`
<h3>Fit Mode</h3>
<TreeTable value={this.state.nodes} resizableColumns={true} columnResizeMode="fit">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

<h3>Expand Mode</h3>
<TreeTable value={this.state.nodes} resizableColumns={true} columnResizeMode="expand">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} resizableColumns={true}>
    <Column field="name" header="Name" expander style={{width:'50%'}}></Column>
    <Column field="size" header="Size" style={{width:'30%'}}></Column>
    <Column field="type" header="Type" style={{width:'20%'}}></Column>
</TreeTable>

`}
</CodeHighlight>

                        <h3>Column Reorder</h3>
                        <p>Columns can be reordered using drag drop by setting the <i>reorderableColumns</i> to true. <i>onColReorder</i> is a callback that is invoked when a column is reordered.
                        TreeTable keeps the column order state internally using keys that identifies a column using the <i>field</i> property. If the column has no field, use columnKey instead.</p>

<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} reorderableColumns>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

`}
</CodeHighlight>

                        <h3>Scrolling</h3>
                        <p>TreeTable supports both horizontal and vertical scrolling as well as frozen columns. Vertical scrolling is enabled using <i>scrollable</i> property and <i>scrollHeight</i> to define the viewport height.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>Horizontal Scrolling requires a width of DataTable to be defined and explicit widths on columns.</p>
<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} scrollable style={{width: '600px'}}>
    <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
    <Column field="size" header="Size" style={{width:'350px'}}></Column>
    <Column field="type" header="Type" style={{width:'350px'}}></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>Certain columns can be frozen by using the <i>frozen</i> property of the column component. Widths of the frozen section is specified by the <i>frozenWidth</i> property.</p>

<CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
    <Column field="name" header="Name" expander frozen style={{width:'250px'}}></Column>
    <Column field="size" header="Size" style={{width:'250px'}}></Column>
    <Column field="type" header="Type" style={{width:'250px'}}></Column>
    <Column field="size" header="Size" style={{width:'250px'}}></Column>
    <Column field="type" header="Type" style={{width:'250px'}}></Column>
    <Column field="size" header="Size" style={{width:'250px'}}></Column>
    <Column field="type" header="Type" style={{width:'250px'}}></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>Note that frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. Provide fixed height to cells to avoid alignment issues.</p>
            <CodeHighlight className="language-jsx">
{`
<TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
    <Column field="name" header="Name" expander frozen style={{width:'250px', height: '25px'}}></Column>
    <Column field="size" header="Size" style={{width:'250px', height: '25px'}}></Column>
    <Column field="type" header="Type" style={{width:'250px', height: '25px'}}></Column>
</TreeTable>

`}
</CodeHighlight>

                        <p>When using frozen columns with column grouping, use <i>frozenHeaderColumnGroup</i> and <i>frozenFooterColumnGroup</i> properties along with
                        <i>headerColumnGroup</i> and <i>footerColumnGroup</i>.</p>

                        <h3>Responsive</h3>
                        <p>TreeTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. Here is a sample implementation;</p>

<CodeHighlight className="language-css">
{`
.p-col-d {
    display: table-cell;
}

.p-col-m {
    display: none;
}

@media screen and (max-width: 64em) {
    .p-col-d {
        display: none;
    }

    .p-col-m {
        display: inline-block;
    }
}

`}
</CodeHighlight>

                        <CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.nameTemplate = this.nameTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    nameTemplate(node) {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="p-col-m">, {node.data.size}</span>
                <span className="p-col-m">, {node.data.type}</span>
            </React.Fragment>
        )
    }

    render() {
        return (
            <TreeTable value={this.state.nodes} responsive={true} header="Responsive TreeTable">
                <Column field="name" header="Name" body={this.nameTemplate} expander headerClassName="p-col-d"></Column>
                <Column field="size" header="Size" className="p-col-d"></Column>
                <Column field="type" header="Type" className="p-col-d"></Column>
            </TreeTable>
        )
    }
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
                                        <td>An array of treenodes to display.</td>
                                    </tr>
                                    <tr>
                                        <td>header</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Header content of the table.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer content of the table.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Style class of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>tableStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the table element.</td>
                                    </tr>
                                    <tr>
                                        <td>tableClassName</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Style class of the table element.</td>
                                    </tr>
                                    <tr>
                                        <td>expandedKeys</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of keys to represent the state of the tree expansion state in controlled mode.</td>
                                    </tr>
                                    <tr>
                                        <td>paginator</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified as true, enables the pagination.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorPosition</td>
                                        <td>string</td>
                                        <td>bottom</td>
                                        <td>Position of the paginator, options are "top","bottom" or "both".</td>
                                    </tr>
                                    <tr>
                                        <td>alwaysShowPaginator</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether to show it even there is only one page.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorTemplate</td>
                                        <td>string</td>
                                        <td>FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown</td>
                                        <td>Template of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorLeft</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Content for the left side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>paginatorRight</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Content for the right side of the paginator.</td>
                                    </tr>
                                    <tr>
                                        <td>pageLinkSize</td>
                                        <td>number</td>
                                        <td>5</td>
                                        <td>Number of page links to display.</td>
                                    </tr>
                                    <tr>
                                        <td>rowsPerPageOptions</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>Array of integer values to display inside rows per page dropdown.</td>
                                    </tr>
                                    <tr>
                                        <td>currentPageReportTemplate</td>
                                        <td>string</td>
                                        <td>(&123;currentPage&125; of &123;totalPages&125;)</td>
                                        <td>Template of the current page report element. Available placeholders are
                                        &123;currentPage&125;,&123;totalPages&125;,&123;rows&125;,&123;first&125;,&123;last&125; and &123;totalRecords&125;
                                    </td>
                                    </tr>
                                    <tr>
                                        <td>first</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Index of the first row to be displayed.</td>
                                    </tr>
                                    <tr>
                                        <td>rows</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of rows to display per page.</td>
                                    </tr>
                                    <tr>
                                        <td>totalRecords</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Number of total records, defaults to length of value when not defined.</td>
                                    </tr>
                                    <tr>
                                        <td>lazy</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Defines if data is loaded and interacted with in lazy manner.</td>
                                    </tr>
                                    <tr>
                                        <td>sortField</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the field to sort data by default.</td>
                                    </tr>
                                    <tr>
                                        <td>sortOrder</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Order to sort the data by default.</td>
                                    </tr>
                                    <tr>
                                        <td>multiSortMeta</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>
                                    </tr>
                                    <tr>
                                        <td>sortMode</td>
                                        <td>string</td>
                                        <td>single</td>
                                        <td>Defines whether sorting works on single column or on multiple columns.</td>
                                    </tr>
                                    <tr>
                                        <td>defaultSortOrder</td>
                                        <td>number</td>
                                        <td>1</td>
                                        <td>Default sort order of an unsorted column.</td>
                                    </tr>
                                    <tr>
                                        <td>selectionMode</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                                    </tr>
                                    <tr>
                                        <td>selectionKeys</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>A single or an array of keys to control the selection state.</td>
                                    </tr>
                                    <tr>
                                        <td>contextMenuSelectionKey</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>A single key to control the selection with the context menu.</td>
                                    </tr>
                                    <tr>
                                        <td>metaKeySelection</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
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
                                    <tr>
                                        <td>autoLayout</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether the cell widths scale according to their content or not.</td>
                                    </tr>
                                    <tr>
                                        <td>rowClassName</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Function that takes the row data and returns an object in "&#123;'styleclass' : condition&#125;" format to define a classname for a particular now.</td>
                                    </tr>
                                    <tr>
                                        <td>loading</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Displays a loader to indicate data load is in progress.</td>
                                    </tr>
                                    <tr>
                                        <td>loadingIcon</td>
                                        <td>string</td>
                                        <td>pi pi-spinner</td>
                                        <td>The icon to show while indicating data load is in progress.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>scrollable</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified, enables horizontal and/or vertical scrolling.</td>
                                    </tr>
                                    <tr>
                                        <td>scrollHeight</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Height of the scroll viewport.</td>
                                    </tr>
                                    <tr>
                                        <td>reorderableColumns</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, columns can be reordered using drag and drop.</td>
                                    </tr>
                                    <tr>
                                        <td>filters</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of FilterMetadata objects to provide external filters.</td>
                                    </tr>
                                    <tr>
                                        <td>globalFilter</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Value of the global filter to use in filtering.</td>
                                    </tr>
                                    <tr>
                                        <td>filterMode</td>
                                        <td>string</td>
                                        <td>lenient</td>
                                        <td>Mode for filtering valid values are lenient and strict. Default is lenient.</td>
                                    </tr>
                                    <tr>
                                        <td>headerColumnGroup</td>
                                        <td>ColumnGroup</td>
                                        <td>null</td>
                                        <td>ColumnCroup component for header.</td>
                                    </tr>
                                    <tr>
                                        <td>footerColumnGroup</td>
                                        <td>ColumnGroup</td>
                                        <td>null</td>
                                        <td>ColumnCroup component for footer.</td>
                                    </tr>
                                    <tr>
                                        <td>frozenHeaderColumnGroup</td>
                                        <td>ColumnGroup</td>
                                        <td>null</td>
                                        <td>ColumnCroup component for header of frozen columns.</td>
                                    </tr>
                                    <tr>
                                        <td>frozenFooterColumnGroup</td>
                                        <td>ColumnGroup</td>
                                        <td>null</td>
                                        <td>ColumnCroup component for footer of frozen columns.</td>
                                    </tr>
                                    <tr>
                                        <td>frozenWidth</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Width of the frozen part in scrollable DataTable.</td>
                                    </tr>
                                    <tr>
                                        <td>resizableColumns</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When enabled, columns can be resized using drag and drop.</td>
                                    </tr>
                                    <tr>
                                        <td>columnResizeMode</td>
                                        <td>string</td>
                                        <td>fit</td>
                                        <td>Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".</td>
                                    </tr>
                                    <tr>
                                        <td>emptyMessage</td>
                                        <td>string</td>
                                        <td>No records found</td>
                                        <td>Text to display when there is no data.</td>
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
                                        <td>onExpand</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Expanded node instance.</td>
                                        <td>Callback to invoke when a node is expanded.</td>
                                    </tr>
                                    <tr>
                                        <td>onCollapse</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Collapsed node instance.</td>
                                        <td>Callback to invoke when a node is collapsed.</td>
                                    </tr>
                                    <tr>
                                        <td>onToggle</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Toggled node instance.</td>
                                        <td>Callback to invoke when a node is toggled.</td>
                                    </tr>
                                    <tr>
                                        <td>onPage</td>
                                        <td>event.first: Index of the first row. <br />
                                            event.rows: Rows per page.</td>
                                        <td>Callback to invoke on pagination.</td>
                                    </tr>
                                    <tr>
                                        <td>onSort</td>
                                        <td>event.sortField: Field to sort against. <br />
                                            event.sortOrder: Sort order as integer. <br />
                                            event.multiSortMeta: MultiSort metadata.</td>
                                        <td>Callback to invoke on sort.</td>
                                    </tr>
                                    <tr>
                                        <td>onFilter</td>
                                        <td>event.filters: Collection of active filters.</td>
                                        <td>Callback to invoke on filtering.</td>
                                    </tr>
                                    <tr>
                                        <td>onSelect</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Selected node instance.</td>
                                        <td>Callback to invoke when a node is selected.</td>
                                    </tr>
                                    <tr>
                                        <td>onUnselect</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.node: Unselected node instance.</td>
                                        <td>Callback to invoke when a node is unselected.</td>
                                    </tr>
                                    <tr>
                                        <td>onRowClick</td>
                                        <td>event.originalEvent: Browser event <br />
                                            event.data: Clicked row data</td>
                                        <td>Callback to invoke when a row is clicked.</td>
                                    </tr>
                                    <tr>
                                        <td>onSelectionChange</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.value: Selected node key(s).</td>
                                        <td>Callback to invoke when selection changes.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenuSelectionChange</td>
                                        <td>event.originalEvent: browser event <br />
                                            event.value: Selected node key.</td>
                                        <td>Callback to invoke when selection changes with a context menu.</td>
                                    </tr>
                                    <tr>
                                        <td>onColumnResizeEnd</td>
                                        <td>event.element: DOM element of the resized column.
                                            event.column: Properties of the resized column.<br />
                                            event.delta: Change in column width</td>
                                        <td>Callback to invoke when a column is resized.</td>
                                    </tr>
                                    <tr>
                                        <td>onColReorder</td>
                                        <td>event.originalEvent: Browser event <br />
                                            event.dragIndex: Index of the dragged column <br />
                                            event.dropIndex: Index of the dropped column <br />
                                            event.columns: Columns array after reorder.</td>
                                        <td>Callback to invoke when a column is reordered.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenu</td>
                                        <td>event.originalEvent: Original event instance. <br />
                                            event.data: Collapsed row data</td>
                                        <td>Callback to invoke when a context menu is clicked.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-treetable</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-header</td>
                                        <td>Header section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-footer</td>
                                        <td>Footer section.</td>
                                    </tr>
                                    <tr>
                                        <td>p-column-title</td>
                                        <td>Title of a column.</td>
                                    </tr>
                                    <tr>
                                        <td>p-sortable-column</td>
                                        <td>Sortable column header.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-scrollable-header</td>
                                        <td>Container of header in a scrollable table.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-scrollable-body</td>
                                        <td>Container of body in a scrollable table.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-scrollable-footer</td>
                                        <td>Container of footer in a scrollable table.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-emptymessage</td>
                                        <td>Cell containing the empty message.</td>
                                    </tr>
                                    <tr>
                                        <td>p-treetable-toggler</td>
                                        <td>Toggler icon.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>

                    </TabPanel>

                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {}
        };
        this.nodeservice = new NodeService();
        this.toggleApplications = this.toggleApplications.bind(this);
    }

    toggleApplications() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Uncontrolled</h3>
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleApplications} label="Toggle Applications" />
                    <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
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

