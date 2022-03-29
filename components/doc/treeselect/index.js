import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';

const TreeSelectDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../service/NodeService';
import './TreeSelectDemo.css';

export class TreeSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            selectedNodeKey1: null,
            selectedNodeKey2: null,
            selectedNodeKey3: '0-1',
            selectedNodeKeys1: null,
            selectedNodeKeys2: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div className="treeselect-demo">
                <div className="card">
                    <h5>Single</h5>
                    <TreeSelect value={this.state.selectedNodeKey1} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey1: e.value })} placeholder="Select Item"></TreeSelect>

                    <h5>Multiple</h5>
                    <TreeSelect value={this.state.selectedNodeKeys1} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKeys1: e.value })} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                    <h5>Checkbox</h5>
                    <TreeSelect value={this.state.selectedNodeKeys2} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKeys2: e.value })} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                    <h5>Filter</h5>
                    <TreeSelect value={this.state.selectedNodeKey2} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey2: e.value })} filter placeholder="Select Items"></TreeSelect>

                    <h5>Initial Value</h5>
                    <TreeSelect value={this.state.selectedNodeKey3} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey3: e.value })} placeholder="Select Item"></TreeSelect>
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
import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../service/NodeService';
import './TreeSelectDemo.css';

const TreeSelectDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState('0-1');
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="treeselect-demo">
            <div className="card">
                <h5>Single</h5>
                <TreeSelect value={selectedNodeKey1} options={nodes} onChange={(e) => setSelectedNodeKey1(e.value)} placeholder="Select Item"></TreeSelect>

                <h5>Multiple</h5>
                <TreeSelect value={selectedNodeKeys1} options={nodes} onChange={(e) => setSelectedNodeKeys1(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                <h5>Checkbox</h5>
                <TreeSelect value={selectedNodeKeys2} options={nodes} onChange={(e) => setSelectedNodeKeys2(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                <h5>Filter</h5>
                <TreeSelect value={selectedNodeKey2} options={nodes} onChange={(e) => setSelectedNodeKey2(e.value)} filter placeholder="Select Items"></TreeSelect>

                <h5>Initial Value</h5>
                <TreeSelect value={selectedNodeKey3} options={nodes} onChange={(e) => setSelectedNodeKey3(e.value)} placeholder="Select Item"></TreeSelect>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../service/NodeService';
import './TreeSelectDemo.css';

const TreeSelectDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState('0-1');
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="treeselect-demo">
            <div className="card">
                <h5>Single</h5>
                <TreeSelect value={selectedNodeKey1} options={nodes} onChange={(e) => setSelectedNodeKey1(e.value)} placeholder="Select Item"></TreeSelect>

                <h5>Multiple</h5>
                <TreeSelect value={selectedNodeKeys1} options={nodes} onChange={(e) => setSelectedNodeKeys1(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                <h5>Checkbox</h5>
                <TreeSelect value={selectedNodeKeys2} options={nodes} onChange={(e) => setSelectedNodeKeys2(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                <h5>Filter</h5>
                <TreeSelect value={selectedNodeKey2} options={nodes} onChange={(e) => setSelectedNodeKey2(e.value)} filter placeholder="Select Items"></TreeSelect>

                <h5>Initial Value</h5>
                <TreeSelect value={selectedNodeKey3} options={nodes} onChange={(e) => setSelectedNodeKey3(e.value)} placeholder="Select Item"></TreeSelect>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./TreeSelectDemo.css" />
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/treeselect/treeselect.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { TreeSelect } = primereact.treeselect;

const TreeSelectDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState('0-1');
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="treeselect-demo">
            <div className="card">
                <h5>Single</h5>
                <TreeSelect value={selectedNodeKey1} options={nodes} onChange={(e) => setSelectedNodeKey1(e.value)} placeholder="Select Item"></TreeSelect>

                <h5>Multiple</h5>
                <TreeSelect value={selectedNodeKeys1} options={nodes} onChange={(e) => setSelectedNodeKeys1(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                <h5>Checkbox</h5>
                <TreeSelect value={selectedNodeKeys2} options={nodes} onChange={(e) => setSelectedNodeKeys2(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                <h5>Filter</h5>
                <TreeSelect value={selectedNodeKey2} options={nodes} onChange={(e) => setSelectedNodeKey2(e.value)} filter placeholder="Select Items"></TreeSelect>

                <h5>Initial Value</h5>
                <TreeSelect value={selectedNodeKey3} options={nodes} onChange={(e) => setSelectedNodeKey3(e.value)} placeholder="Select Item"></TreeSelect>
            </div>
        </div>
    );
}
                `
        }
    };

    const extFiles = {
        'demo/TreeSelectDemo.css': {
            content: `
.treeselect-demo .p-treeselect {
    width: 20rem;
}
@media screen and (max-width: 640px) {
    .treeselect-demo .p-treeselect {
        width: 100%;
    }
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { TreeSelect } from 'primereact/treeselect';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/treeselect/treeselect.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>TreeSelect component requires an array of TreeNode objects as its <i>options</i> and keys of the nodes as its value.</p>

<CodeHighlight>
{`
<TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>
`}
</CodeHighlight>

                    <p>In example below, nodes are retrieved from a remote data source.</p>
<CodeHighlight lang="js">
{`
export const TreeSelectDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        let nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []);

    return (
        <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>
    )
}
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
export class NodeService {

    getTreeNodes() {
        return fetch('data/treenodes.json').then(res => res.json()).then(d => d.root);
    }

}
`}
</CodeHighlight>

                    <p>The json response sample would be as following.</p>
<CodeHighlight lang="js">
{`
{
    "root": [
        {
            "key": "0",
            "label": "Documents",
            "data": "Documents Folder",
            "icon": "pi pi-fw pi-inbox",
            "children": [{
                "key": "0-0",
                "label": "Work",
                "data": "Work Folder",
                "icon": "pi pi-fw pi-cog",
                "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]
            },
            {
                "key": "0-1",
                "label": "Home",
                "data": "Home Folder",
                "icon": "pi pi-fw pi-home",
                "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]
            }]
        },
        {
            "key": "1",
            "label": "Events",
            "data": "Events Folder",
            "icon": "pi pi-fw pi-calendar",
            "children": [
                { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },
                { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },
                { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]
        },
        {
            "key": "2",
            "label": "Movies",
            "data": "Movies Folder",
            "icon": "pi pi-fw pi-star-fill",
            "children": [{
                "key": "2-0",
                "icon": "pi pi-fw pi-star-fill",
                "label": "Al Pacino",
                "data": "Pacino Movies",
                "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
            },
            {
                "key": "2-1",
                "label": "Robert De Niro",
                "icon": "pi pi-fw pi-star-fill",
                "data": "De Niro Movies",
                "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
            }]
        }
    ]
}
`}
</CodeHighlight>

                    <h5>TreeNode API utilized by the TreeSelect</h5>
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

                    <h5>Selection</h5>
                    <p>TreeSelect supports "single", "multiple" and "checkbox" selection modes. Define <i>selectionMode</i>, <i>value</i> and <i>onChange</i> properties to control the selection. In single mode, selectionKeys should
        be a single value whereas in multiple or checkbox modes an object is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
        in touch enabled devices, Tree does not require metaKey.</p>
<CodeHighlight lang="js">
{`
import React, {Component} from 'react';
import {TreeSelect} from 'primereact/treeselect';
import {NodeService} from '../service/NodeService';

export const TreeSelectionDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState(null);

    useEffect(() => {
        let nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, [])

    return (
        <div>
            <h5>Single Selection</h5>
            <TreeSelect value={selectedNodeKey1} options={nodes} selectionMode="single" onChange={e => setSelectedNodeKey1(e.value)} />

            <h5>Multiple Selection</h5>
            <TreeSelect value={selectedNodeKey2} options={nodes} selectionMode="multiple" onChange={e => setSelectedNodeKey2(e.value)} />

            <h5>Checkbox Selection</h5>
            <TreeSelect value={selectedNodeKey3} options={nodes} selectionMode="checkbox" onChange={e => setSelectedNodeKey3(e.value)} />
        </div>
    )
}
`}
</CodeHighlight>

                    <h5>Value Format</h5>
                    <p>Value passed to and from the TreeSelect via the value property should be a an object with key-value pairs where key is the node key and
                        value is a boolean to indicate selection. On the other hand
                    in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node. Best way to clarify it is prepopulating a TreeSelect with an existing value.</p>

<CodeHighlight lang="js">
{`
data() {
    return {
        selectedNodeKey1: '2-1',
        selectedNodeKey2: {'1-1': true, '0-0-0': true},
        selectedNodeKey3: {'1': {checked: true, partialChecked: true}, '1-0': {checked: true}}
        nodes: null
    }
},
`}
</CodeHighlight>

                    <h5>Chips Display</h5>
                    <p>A comma separated list is used by default to display selected items whereas alternative chip mode is provided using the <i>display</i> property to visualize the items as tokens.</p>
<CodeHighlight>
{`
<TreeSelect value={selectedNodeKeys} display="chip" options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} selectionMode="multiple" placeholder="Select Items" />
`}
</CodeHighlight>

                    <h5>Templating</h5>
                    <p>Label of an option is used as the display text of an item by default, for custom content support define a <i>valueTemplate</i> that gets the selected nodes as a parameter.
                    In addition <i>header</i>, <i>footer</i> and <i>emptyMessage</i> templates are provided for further customization.</p>
<CodeHighlight>
{`
<TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} valueTemplate={<span>Custom Content</span>} placeholder="Select Items" />
`}
</CodeHighlight>

                    <h5>Filtering</h5>
                    <p>Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node
                    is used to compare against the value in the text field, in order to customize which field(s) should be used during search define <i>filterBy</i> property.</p>

                    <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
                    in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>

<CodeHighlight lang="js">
{`
<TreeSelect options={nodes} filter />

<TreeSelect options={nodes} filter filterBy="data.name,data.age" />

<TreeSelect options={nodes} filter filterMode="strict" />
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
                                    <td>any</td>
                                    <td>null</td>
                                    <td>A single or an object of keys to control the selection state.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the input element.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
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
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>options</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>An array of options to display.</td>
                                </tr>
                                <tr>
                                    <td>scrollHeight</td>
                                    <td>string</td>
                                    <td>400px</td>
                                    <td>Maximum height of the options panel.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Hint text for the input field.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabel</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Used to define a string that labels the component.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabelledBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Contains the element IDs of labels.</td>
                                </tr>
                                <tr>
                                    <td>selectionMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines the selection mode, valid values "single", "multiple", and "checkbox".</td>
                                </tr>
                                <tr>
                                    <td>panelClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the overlay panel element.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>emptyMessage</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text to display when there is no data.</td>
                                </tr>
                                <tr>
                                    <td>display</td>
                                    <td>string</td>
                                    <td>comma</td>
                                    <td>Defines how the selected items are displayed, valid values are "comma" and "chip".</td>
                                </tr>
                                <tr>
                                    <td>metaKeySelection</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item
                                        can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.</td>
                                </tr>
                                <tr>
                                    <td>valueTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of selected values.</td>
                                </tr>
                                <tr>
                                    <td>panelHeaderTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of header.</td>
                                </tr>
                                <tr>
                                    <td>panelFooterTemplate</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>The template of footer.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                                <tr>
                                    <td>dropdownIcon</td>
                                    <td>string</td>
                                    <td>pi pi-chevron-down</td>
                                    <td>Icon class of the dropdown icon.</td>
                                </tr>
                                <tr>
                                    <td>filter</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified, displays an input field to filter the items.</td>
                                </tr>
                                <tr>
                                    <td>filterValue</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>When filtering is enabled, the value of input field.</td>
                                </tr>
                                <tr>
                                    <td>filterBy</td>
                                    <td>string</td>
                                    <td>label</td>
                                    <td>When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.</td>
                                </tr>
                                <tr>
                                    <td>filterMode</td>
                                    <td>string</td>
                                    <td>lenient</td>
                                    <td>Mode for filtering valid values are "lenient" and "strict". Default is lenient.</td>
                                </tr>
                                <tr>
                                    <td>filterPlaceholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Placeholder text to show when filter input is empty.</td>
                                </tr>
                                <tr>
                                    <td>filterLocale</td>
                                    <td>string</td>
                                    <td>undefined</td>
                                    <td>Locale to use in filtering. The default locale is the host environment's current locale.</td>
                                </tr>
                                <tr>
                                    <td>filterInputAutoFocus</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When the panel is opened, it specifies that the filter input should focus automatically.</td>
                                </tr>
                                <tr>
                                    <td>resetFilterOnHide</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Clears the filter value when hiding the dropdown.</td>
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
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when the overlay is shown.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when the overlay is hidden.</td>
                                </tr>
                                <tr>
                                    <td>onChange</td>
                                    <td>event.originalEvent: browser event <br />
                                    event.value: Selected node key(s).</td>
                                    <td>Callback to invoke when selection changes.</td>
                                </tr>
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
                                    <td>onFilterValueChange</td>
                                    <td>event.originalEvent: Browser event <br/>
                                        event.value: the filtered value <br/>
                                    </td>
                                    <td>Callback to invoke when filter value changes.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Methods</h5>
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
                                    <td>filter</td>
                                    <td>value: the filter value</td>
                                    <td>Filters the data.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
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
                                    <td>p-treeselect</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>p-treeselect-label-container</td>
                                    <td>Container of the label to display selected items.</td>
                                </tr>
                                <tr>
                                    <td>p-treeselect-label</td>
                                    <td>Label to display selected items.</td>
                                </tr>
                                <tr>
                                    <td>p-treeselect-trigger</td>
                                    <td>Dropdown button.</td>
                                </tr>
                                <tr>
                                    <td>p-treeselect-panel</td>
                                    <td>Overlay panel for items.</td>
                                </tr>
                                <tr>
                                    <td>p-treeselect-items-wrapper</td>
                                    <td>List container of items.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </div>

                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TreeSelectDemo', sources: sources, service: 'NodeService', data: 'treenodes', extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default TreeSelectDoc;
