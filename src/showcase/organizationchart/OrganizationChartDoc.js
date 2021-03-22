import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class OrganizationChartDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './OrganizationChartDemo.css';

export class OrganizationChartDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: []
        };

        this.data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'p-person',
            expanded: true,
            data: { name: 'Walter White', 'avatar': 'walter.jpg' },
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                    children: [{
                        label: 'Tax',
                        className: 'department-cfo'
                    },
                    {
                        label: 'Legal',
                        className: 'department-cfo'
                    }],
                },
                {
                    label: 'COO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                    children: [{
                        label: 'Operations',
                        className: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'p-person',
                    expanded: true,
                    data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                    children: [{
                        label: 'Development',
                        className: 'department-cto',
                        expanded: true,
                        children: [{
                            label: 'Analysis',
                            className: 'department-cto'
                        },
                        {
                            label: 'Front End',
                            className: 'department-cto'
                        },
                        {
                            label: 'Back End',
                            className: 'department-cto'
                        }]
                    },
                    {
                        label: 'QA',
                        className: 'department-cto'
                    },
                    {
                        label: 'R&D',
                        className: 'department-cto'
                    }]
                }
            ]
        }];

        this.data2 = [{
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'F.C Barcelona',
                    expanded: true,
                    children: [
                        {
                            label: 'Chelsea FC'
                        },
                        {
                            label: 'F.C. Barcelona'
                        }
                    ]
                },
                {
                    label: 'Real Madrid',
                    expanded: true,
                    children: [
                        {
                            label: 'Bayern Munich'
                        },
                        {
                            label: 'Real Madrid'
                        }
                    ]
                }
            ]
        }];

        this.nodeTemplate = this.nodeTemplate.bind(this);
    }

    nodeTemplate(node) {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    render() {
        return (
            <div className="organizationchart-demo">
                <div className="card">
                    <h5>Advanced</h5>
                    <OrganizationChart value={this.data1} nodeTemplate={this.nodeTemplate} selection={this.state.selection} selectionMode="multiple"
                        onSelectionChange={event => this.setState({ selection: event.data })} className="company"></OrganizationChart>

                    <h5>Basic</h5>
                    <OrganizationChart value={this.data2}></OrganizationChart>
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
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './OrganizationChartDemo.css';

const OrganizationChartDemo = () => {
    const [selection, setSelection] = useState([]);
    const data1 = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: { name: 'Walter White', 'avatar': 'walter.jpg' },
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                children: [{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                children: [{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                children: [{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const data2 = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    return (
        <div className="organizationchart-demo">
            <div className="card">
                <h5>Advanced</h5>
                <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                    onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>

                <h5>Basic</h5>
                <OrganizationChart value={data2}></OrganizationChart>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import './OrganizationChartDemo.css';

const OrganizationChartDemo = () => {
    const [selection, setSelection] = useState([]);
    const data1 = [{
        label: 'CEO',
        type: 'person',
        className: 'p-person',
        expanded: true,
        data: { name: 'Walter White', 'avatar': 'walter.jpg' },
        children: [
            {
                label: 'CFO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Saul Goodman', 'avatar': 'saul.jpg' },
                children: [{
                    label: 'Tax',
                    className: 'department-cfo'
                },
                {
                    label: 'Legal',
                    className: 'department-cfo'
                }],
            },
            {
                label: 'COO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Mike E.', 'avatar': 'mike.jpg' },
                children: [{
                    label: 'Operations',
                    className: 'department-coo'
                }]
            },
            {
                label: 'CTO',
                type: 'person',
                className: 'p-person',
                expanded: true,
                data: { name: 'Jesse Pinkman', 'avatar': 'jesse.jpg' },
                children: [{
                    label: 'Development',
                    className: 'department-cto',
                    expanded: true,
                    children: [{
                        label: 'Analysis',
                        className: 'department-cto'
                    },
                    {
                        label: 'Front End',
                        className: 'department-cto'
                    },
                    {
                        label: 'Back End',
                        className: 'department-cto'
                    }]
                },
                {
                    label: 'QA',
                    className: 'department-cto'
                },
                {
                    label: 'R&D',
                    className: 'department-cto'
                }]
            }
        ]
    }];

    const data2 = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    const nodeTemplate = (node) => {
        if (node.type === "person") {
            return (
                <div>
                    <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} style={{ width: '32px' }} />
                        <div>{node.data.name}</div>
                    </div>
                </div>
            );
        }

        if (node.type === "department") {
            return node.label;
        }
    }

    return (
        <div className="organizationchart-demo">
            <div className="card">
                <h5>Advanced</h5>
                <OrganizationChart value={data1} nodeTemplate={nodeTemplate} selection={selection} selectionMode="multiple"
                    onSelectionChange={event => setSelection(event.data)} className="company"></OrganizationChart>

                <h5>Basic</h5>
                <OrganizationChart value={data2}></OrganizationChart>
            </div>
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'src/demo/OrganizationChartDemo.css': {
                content: `
.organizationchart-demo .p-organizationchart .p-person {
    padding: 0;
    border: 0 none;
}

.organizationchart-demo .p-organizationchart .node-header, .organizationchart-demo .p-organizationchart .node-content {
    padding: .5em .7rem;
}

.organizationchart-demo .p-organizationchart .node-header {
    background-color: #495ebb;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .node-content {
    text-align: center;
    border: 1px solid #495ebb;
}

.organizationchart-demo .p-organizationchart .node-content img {
    border-radius: 50%;
}

.organizationchart-demo .p-organizationchart .department-cfo {
    background-color: #7247bc;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .department-coo {
    background-color: #a534b6;
    color: #ffffff;
}

.organizationchart-demo .p-organizationchart .department-cto {
    background-color: #e9286f;
    color: #ffffff;
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
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { OrganizationChart } from 'primereact/organizationchart';
`}
</CodeHighlight>


                        <h5>Getting Started</h5>
                        <p>OrganizationChart requires a model of TreeNode as its value.</p>
<CodeHighlight lang="js">
{`
export const OrganizationChartDemo = () => {

    const data = [{
        label: 'F.C Barcelona',
        expanded: true,
        children: [
            {
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'Chelsea FC'
                    },
                    {
                        label: 'F.C. Barcelona'
                    }
                ]
            },
            {
                label: 'Real Madrid',
                expanded: true,
                children: [
                    {
                        label: 'Bayern Munich'
                    },
                    {
                        label: 'Real Madrid'
                    }
                ]
            }
        ]
    }];

    return (
        <OrganizationChart value={data}></OrganizationChart>
    )
}
`}
</CodeHighlight>

                        <h5>Templating</h5>
                        <p>Label of the treenode is displayed inside the node content by default and templating enables further customization.</p>

<CodeHighlight>
{`
<OrganizationChart value={data} nodeTemplate={nodeTemplate}></OrganizationChart>
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`

const nodeTemplate = (node) => {
    if (node.type === "person") {
        return (
            <div>
                <div className="node-header">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/demo/images/organization/\${node.data.avatar}\`} style={{ width: '32px' }}/>
                    <div>{node.data.name}</div>
                </div>
            </div>
        );
    }

    if (node.type === "department") {
        return node.label;
    }
}
`}
</CodeHighlight>

                        <h5>Expand/Collapse State</h5>
                        <p>In order to display a treenode as expanded by default, set "expanded" property as true in your model.</p>

                        <h5>Selection</h5>
                        <p>OrganizationChart supports two selection methods; single or multiple. Selection is enabled by setting <i>selectionMode</i> property to the corresponding mode, defining <i>selection</i> property along with <i>selectionChange</i> callback.</p>
<CodeHighlight>
{`
<OrganizationChart value={data} selectionMode="single" selection={selectedNode} onSelectionChange={event => setSelectedNode(event.data)}></OrganizationChart>
`}
</CodeHighlight>

                        <h5>Properties</h5>
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
                                        <td>An array of nested TreeNodes.</td>
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
                                        <td>selectionMode</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Defines the selection mode, valid values "single" and "multiple".</td>
                                    </tr>
                                    <tr>
                                        <td>selection</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>A single treenode instance or an array to refer to the selections.</td>
                                    </tr>
                                    <tr>
                                        <td>nodeTemplate</td>
                                        <td>function</td>
                                        <td>null</td>
                                        <td>Template function that gets a node as a parameter and returns a content.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
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
                                        <td>onSelectionChange</td>
                                        <td>event.originalEvent: browser event <br />
                                    event.data: New selection.</td>
                                        <td>Callback to invoke when node selection changes.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes.</p>
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
                                        <td>p-organizationchart</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-table</td>
                                        <td>Table container of a node.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-lines</td>
                                        <td>Connector lines container.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-nodes</td>
                                        <td>Contained of node children.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-right</td>
                                        <td>Right side line of a node connector.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-left</td>
                                        <td>Left side line of a node connector.</td>
                                    </tr>
                                    <tr>
                                        <td>p-organizationchart-line-top</td>
                                        <td>Top side line of a node connector.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'OrganizationChartDemo', sources: this.sources, extFiles: this.extFiles })
                    }
                </TabView>
            </div>
        );
    }
}
