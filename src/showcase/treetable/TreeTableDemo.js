import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { Button } from '../../components/button/Button';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

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
                <TreeTableSubmenu />

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

<CodeHighlight className="language-javascript">
{`

`}
</CodeHighlight>

                    </TabPanel>
                    <TabPanel header="Source">
                        <h3>Import</h3>
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

