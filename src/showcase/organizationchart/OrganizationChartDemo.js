import React, {Component} from 'react';
import {OrganizationChart} from '../../components/organizationchart/OrganizationChart';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import './OrganizationChartCustomStyle.css';

export class OrganizationChartDemo extends Component {
        
    constructor(props) {
        super(props);
        this.state = {selections: []};
        this.onSelectionChange = this.onSelectionChange.bind(this);
    }

    onSelectionChange(_selections) {
        this.setState({selections:_selections});
    }

    nodeTemplate(node) {
        if(node.type === "person") {
            return (<div>
                    <div className="node-header ui-corner-top">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={`showcase/resources/demo/images/organization/${node.data.avatar}`} style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>);
        }

        if(node.type === "department") {    
            return node.label;
        }
    }

    render() {
        var data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'ui-person',
            expanded: true,
            data: {name:'Walter White', 'avatar': 'walter.jpg'},
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                    children:[{
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
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                    children:[{
                        label: 'Operations',
                        className: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                    children:[{
                        label: 'Development',
                        className: 'department-cto',
                        expanded: true,
                        children:[{
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
        var data2 = [{
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
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>OrganizationChart</h1>
                        <p>OrganizationChart visualized hierarchical organization data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Advanced</h3>
                    <p>Organization with advanced customization.</p>
                    <OrganizationChart value={data1} nodeTemplate={this.nodeTemplate.bind(this)} selectionMode="multiple" selectionChange={this.onSelectionChange} className="company"></OrganizationChart>
                    <ul>
                    {
                        this.state.selections && this.state.selections.map((item, index) => {
                            return <li key={index}>{item.label}</li> 
                        })
                    }
                    </ul>

                    <h3>Basic</h3>
                    <p>Hierarchical data with zero configuration.</p>
                    <OrganizationChart value={data2}></OrganizationChart>
                </div>
                <OrganizationChartDoc></OrganizationChartDoc>
            </div>
        )
    }
}

export class OrganizationChartDoc extends Component {

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
import {OrganizationChart} from 'primereact/components/organizationchart/OrganizationChart';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>OrganizationChart requires a model of TreeNode as its value and onSelectionChange method for selection mode.</p>
<CodeHighlight className="html">
{`
<OrganizationChart value={data}></OrganizationChart>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
var data = [{
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

`}
</CodeHighlight>

            <h3>Templating</h3>
            <p>Label of the treenode is displayed inside the node content by default and templating enables enhanced customization.</p>
               
<CodeHighlight className="html">
{`
<OrganizationChart value={data1} nodeTemplate={this.nodeTemplate.bind(this)}></OrganizationChart>

nodeTemplate(node) {
    if(node.type === "person") {
        return (<div>
            <div className="node-header ui-corner-top">{node.label}</div>
                <div className="node-content">
                    <img alt={node.data.avatar} src={\`showcase/resources/demo/images/organization/\${node.data.avatar}\`} style={{ width: '32px' }}/>
                <div>{node.data.name}</div>
            </div>
        </div>);
    }

    if(node.type === "department") {    
        return node.label;
    }
}
`}
</CodeHighlight>

            <h3>Expand/Collapse State</h3>
            <p>In order to display a treenode as expanded by default, set "expanded" property as true in your model.</p>

            <h3>Selection</h3>
            <p>OrganizationChart supports 2 selection methods; single or multiple. Selection is enabled by setting selectionMode property and providing a single TreeNode or an array of TreeNodes to reference the selections depending on the selection mode.</p>
<CodeHighlight className="html">
{`
<OrganizationChart value={data} selectionMode="multiple" selectionChange={this.onSelectionChange}></OrganizationChart>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
var data = [{
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

constructor(props) {
    super(props);
    this.state = {selections: []};
    this.onSelectionChange = this.onSelectionChange.bind(this);
}

onSelectionChange(_selections) {
    this.setState({selections:_selections});
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
                                <td>null</td>
                                <td>TreeNode[]</td>
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
                                <td>onSelectionChange</td>
                                <td>selections: selected nodes </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Styling</h3>
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
                                <td>ui-organizationchart</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-table</td>
                                <td>Table container of a node.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-lines</td>
                                <td>Connector lines container.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-nodes</td>
                                <td>Contained of node children.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-line-right</td>
                                <td>Right side line of a node connector.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-line-left</td>
                                <td>Left side line of a node connector.</td>
                            </tr>
                            <tr>
                                <td>ui-organizationchart-line-top</td>
                                <td>Top side line of a node connector.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Dependencies</h3>
                <p>None.</p>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/organizationchart" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
export class OverlayPanelDemo extends Component {
        
    constructor(props) {
        super(props);
        this.state = {selections: []};
        this.onSelectionChange = this.onSelectionChange.bind(this);
    }

    onSelectionChange(_selections) {
        this.setState({selections:_selections});
    }

    nodeTemplate(node) {
        if(node.type === "person") {
            return (<div>
                    <div className="node-header ui-corner-top">{node.label}</div>
                    <div className="node-content">
                        <img alt={node.data.avatar} src={\`showcase/resources/demo/images/organization/\${node.data.avatar}\`} style={{ width: '32px' }}/>
                        <div>{node.data.name}</div>
                    </div>
                </div>);
        }

        if(node.type === "department") {    
            return node.label;
        }
    }

    render() {
        var data1 = [{
            label: 'CEO',
            type: 'person',
            className: 'ui-person',
            expanded: true,
            data: {name:'Walter White', 'avatar': 'walter.jpg'},
            children: [
                {
                    label: 'CFO',
                    type: 'person',
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Saul Goodman', 'avatar': 'saul.jpg'},
                    children:[{
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
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Mike E.', 'avatar': 'mike.jpg'},
                    children:[{
                        label: 'Operations',
                        className: 'department-coo'
                    }]
                },
                {
                    label: 'CTO',
                    type: 'person',
                    className: 'ui-person',
                    expanded: true,
                    data: {name:'Jesse Pinkman', 'avatar': 'jesse.jpg'},
                    children:[{
                        label: 'Development',
                        className: 'department-cto',
                        expanded: true,
                        children:[{
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
        var data2 = [{
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
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>OrganizationChart</h1>
                        <p>OrganizationChart visualized hierarchical organization data.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Advanced</h3>
                    <p>Organization with advanced customization.</p>
                    <OrganizationChart value={data1} nodeTemplate={this.nodeTemplate.bind(this)} selectionMode="multiple" selectionChange={this.onSelectionChange} className="company"></OrganizationChart>
                    <ul>
                    {
                        this.state.selections && this.state.selections.map((item, index) => {
                            return <li key={index}>{item.label}</li> 
                        })
                    }
                    </ul>

                    <h3>Basic</h3>
                    <p>Hierarchical data with zero configuration.</p>
                    <OrganizationChart value={data2}></OrganizationChart>
                </div>
                <OrganizationChartDoc></OrganizationChartDoc>
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