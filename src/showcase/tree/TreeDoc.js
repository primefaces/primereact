import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class TreeDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
        this.expandAll = this.expandAll.bind(this);
        this.collapseAll = this.collapseAll.bind(this);
        this.expandNode = this.expandNode.bind(this);
    }

    expandAll() {
        let expandedKeys = {};
        for (let node of this.state.nodes) {
            this.expandNode(node, expandedKeys);
        }

        this.setState({ expandedKeys });
    }

    collapseAll() {
        this.setState({ expandedKeys: {} });
    }

    expandNode(node, expandedKeys) {
        if (node.children && node.children.length) {
            expandedKeys[node.key] = true;

            for (let child of node.children) {
                this.expandNode(child, expandedKeys);
            }
        }
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <Tree value={this.state.nodes} />

                    <h5>Programmatic Control</h5>
                    <div className="p-mb-4">
                        <Button type="button" icon="pi pi-plus" label="Expand All" onClick={this.expandAll} className="p-mr-2" />
                        <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={this.collapseAll} />
                    </div>
                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({ expandedKeys: e.value })} />
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
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const nodeService = new NodeService();

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    }

    const collapseAll = () => {
        setExpandedKeys({});
    }

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Tree value={nodes} />

                <h5>Programmatic Control</h5>
                <div className="p-mb-4">
                    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
                    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
                </div>
                <Tree value={nodes} expandedKeys={expandedKeys}
                    onToggle={e => setExpandedKeys(e.value)} />
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
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const nodeService = new NodeService();

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    }

    const collapseAll = () => {
        setExpandedKeys({});
    }

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Tree value={nodes} />

                <h5>Programmatic Control</h5>
                <div className="p-mb-4">
                    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="p-mr-2" />
                    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
                </div>
                <Tree value={nodes} expandedKeys={expandedKeys}
                    onToggle={e => setExpandedKeys(e.value)} />
            </div>
        </div>
    );
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
import { Tree } from 'primereact/tree';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Tree component requires an array of TreeNode objects as its <i>value</i>.</p>

                        <h5>TreeNode API</h5>
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
                                        <td>draggable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether the node is draggable when dragdrop is enabled.</td>
                                    </tr>
                                    <tr>
                                        <td>droppable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether the node is droppable when dragdrop is enabled.</td>
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

<CodeHighlight>
{`
<Tree value={data} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
const data: [
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
        "icon": "pi pi-fw pi-star",
        "children": [{
            "key": "2-0",
            "icon": "pi pi-fw pi-star",
            "label": "Al Pacino",
            "data": "Pacino Movies",
            "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]
        },
        {
            "key": "2-1",
            "label": "Robert De Niro",
            "icon": "pi pi-fw pi-star",
            "data": "De Niro Movies",
            "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]
        }]
    }
]
`}
</CodeHighlight>

                        <h5>Controlled vs Uncontrolled</h5>
                        <p>Tree expansion state is managed in two ways, in uncontrolled mode only initial expanded state of a node can be defined using <i>expandedKeys</i> property whereas in controlled mode <i>expandedKeys</i>
                            property along with <i>onToggle</i> properties are used for full control over the state. If you need to expand or collapse the state of nodes programmatically then controlled mode should be used. Example below demonstrates
                            both cases;</p>

<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export const TreeDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});

    useEffect(() => {
        nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, [])

    const toggleMovies = () => {
        let expandedKeys = {...expandedKeys};
        if (expandedKeys['2'])
            delete expandedKeys['2'];
        else
            expandedKeys['2'] = true;

        setExpandedKeys(expandedKeys);
    }

    return (
        <div>
            <h3 className="first">Uncontrolled</h5>
            <Tree value={nodes} />

            <h5>Controlled</h5>
            <Button onClick={toggleMovies} label="Toggle Movies" />
            <Tree value={nodes} expandedKeys={expandedKeys}
                onToggle={e => setExpandedKeys(e.value)} style={{marginTop: '.5em'}} />
        </div>
    )
}
`}
</CodeHighlight>

                        <h5>Selection</h5>
                        <p>Tree supports single, multiple and checkbox selection modes. Define <i>selectionMode</i>, <i>selectionKeys</i> and <i>onSelectionChange</i> properties to control the selection. In single mode, selectionKeys should
            be a single value whereas in multiple or checkbox modes an array is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
            in touch enabled devices, Tree does not require metaKey.</p>
<CodeHighlight lang="js">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export const TreeSelectionDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey] = useState(null);
    const [selectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2] = useState(null);
    const [selectedNodeKeys3] = useState(null);

    useEffect(() => {
        nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, [])

    return (
        <div>
            <h5>Single Selection</h5>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)} />

            <h5>Multiple Selection with MetaKey</h5>
            <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} />

            <h5>Multiple Selection without MetaKey</h5>
            <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} />

            <h5>Checkbox Selection</h5>
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)} />
        </div>
    )
}
`}
</CodeHighlight>

                        <h5>Lazy</h5>
                        <p>Lazy loading is implemented using the <i>onExpand</i> event by adding children to the expanded node. <i>leaf</i> property should be enabled to indicate the node has children but not yet loaded. Here is a in-memory demo
            that loads generated nodes on expand event to imitate a remote call with a timeout. Notice the usage of <i>loading</i> property as well to give users a feedback about the loading process.</p>
<CodeHighlight lang="js">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export const TreeLazyDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        nodeService = new NodeService();
        setTimeout(() => {
            nodeService.getTreeNodes().then(data => {
                setNodes(data);
                setLoading(false);
            });
        }, 2000);
    }, [])

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true)

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 500);
        }
    }

    return (
        <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
    )
}
`}
</CodeHighlight>

                        <h5>Templating</h5>
                        <p><i>label</i> property of a node is used to display as the content by default. Templating is supported as well with the <i>nodeTemplate</i> callback that gets the node instance and returns JSX. Example
            below is a sample tree based navigation of React docs.</p>
<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';

export const TreeTemplatingDemo = () => {

    const [nodes, setNodes] = useState(createNavigation());

    const createNavigation = () => {
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

    const nodeTemplate = (node) => {
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

    return (
        <Tree value={nodes} nodeTemplate={nodeTemplate} />
    )
}
`}
</CodeHighlight>

                        <h5>DragDrop</h5>
                        <p>Tree nodes can be reordered using dragdrop by setting <i>dragdropScope</i> property to a unique variable and updating the new value at <i>onDragDrop</i> callback. The value of the dragdropScope must be unique to provide
            intervention from other draggable elements on the page.</p>
<CodeHighlight lang="js">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export const TreeDragDropDemo = () => {

    const [nodes, setNodes] = useState(null);

    useEffect(() => {
        nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, [])

    return (
        <div>
            <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
        </div>
    )
}
`}
</CodeHighlight>

                        <h5>Filtering</h5>
                        <p>Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node
            is used to compare against the value in the text field, in order to customize which field(s) should be used during search define <i>filterBy</i> property.</p>

                        <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
                 in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>

<CodeHighlight lang="js">
{`
<Tree value={nodes} filter />

<Tree value={nodes} filter filterBy="data.name,data.age" />

<Tree value={nodes} filter filterMode="strict" />
`}
</CodeHighlight>

                        <h5>ContextMenu</h5>
                        <p>One or more ContextMenu instances can be attached to nodes. Similar to selection, separate <i>contextMenuSelectionKey</i> and <i>onContextMenuSelectionChange</i> properties are necesary to manage the selected node with
            right click. In addition, a context menu can either be displayed at <i>onContextMenu</i> event. Since this event also passes the node instance, you may choose to display a different context menu for a particular node.</p>

<CodeHighlight lang="js">
{`
import React, { Component } from 'react';
import {Tree} from 'primereact/tree'
import {ContextMenu} from 'primereact/contextmenu';
import {Toast} from 'primereact/toast';
import {NodeService} from '../service/NodeService';

export const TreeContextMenuDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({severity: 'success', summary: 'Node Key', detail: selectedNodeKey});
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let expandedKeys = {...expandedKeys};
                if (expandedKeys[selectedNodeKey])
                    delete expandedKeys[selectedNodeKey];
                else
                    expandedKeys[selectedNodeKey] = true;
                setExpandedKeys(expandedKeys);
            }
        }
    ];

    useEffect(() => {
        nodeService = new NodeService();
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, [])

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} />

            <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedkeys(e.value)}
                onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                onContextMenu={event => cm.current.show(event.originalEvent)} />
        </div>
    )
}
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
                                        <td>An array of treenodes.</td>
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
                                        <td>expandedKeys</td>
                                        <td>array</td>
                                        <td>null</td>
                                        <td>An array of keys to represent the state of the tree expansion state in controlled mode.</td>
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
                                        <td>contentStyle</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Inline style of the tree content.</td>
                                    </tr>
                                    <tr>
                                        <td>contentClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the tree content.</td>
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
                                    <tr>
                                        <td>loading</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Whether to display loading indicator.</td>
                                    </tr>
                                    <tr>
                                        <td>loadingIcon</td>
                                        <td>string</td>
                                        <td>pi pi-spin</td>
                                        <td>Icon to display when tree is loading.</td>
                                    </tr>
                                    <tr>
                                        <td>dragdropScope</td>
                                        <td>string</td>
                                        <td>false</td>
                                        <td>Unique key to enable dragdrop functionality.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaLabel</td>
                                        <td>string</td>
                                        <td>false</td>
                                        <td>Used to define a string that labels the component.</td>
                                    </tr>
                                    <tr>
                                        <td>ariaLabelledBy</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Contains the element IDs of labels.</td>
                                    </tr>
                                    <tr>
                                        <td>nodeTemplate</td>
                                        <td>function</td>
                                        <td>false</td>
                                        <td>Function that gets a TreeNode instance and returns the content for it.</td>
                                    </tr>
                                    <tr>
                                        <td>filter</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When specified, displays an input field to filter the items.</td>
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
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
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
                                        <td>onToggle</td>
                                        <td>event.originalEvent: browser event <br />
                                event.node: Toggled node instance.</td>
                                        <td>Callback to invoke when a node is toggled.</td>
                                    </tr>
                                    <tr>
                                        <td>onDragDrop</td>
                                        <td>event.originalEvent: browser event <br />
                                event.value: New value after the dragdrop.</td>
                                        <td>Callback to invoke when a node is selected.</td>
                                    </tr>
                                    <tr>
                                        <td>onContextMenu</td>
                                        <td>event.originalEvent: browser event <br />
                                event.node: Selected node instance.</td>
                                        <td>Callback to invoke when a node is selected with a context menu.</td>
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
                                        <td>Toggle element</td>
                                    </tr>
                                    <tr>
                                        <td>p-treenode-toggler-icon</td>
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

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>

                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'TreeDemo', sources: this.sources, service: 'NodeService', data: 'treenodes' })
                    }
                </TabView>
            </div>
        );
    }
}
