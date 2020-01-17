import React, {Component} from 'react';
import {Tree} from '../../components/tree/Tree';
import {Button} from '../../components/button/Button';
import {NodeService} from '../service/NodeService';
import {TreeSubmenu} from './TreeSubmenu';
import {TabView, TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
        this.toggleMovies = this.toggleMovies.bind(this);
    }

    toggleMovies() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['2'])
            delete expandedKeys['2'];
        else
            expandedKeys['2'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree</h1>
                        <p>Tree is used to display hierarchical data.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Uncontrolled</h3>
                    <Tree value={this.state.nodes} />

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleMovies} label="Toggle Movies" />
                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}} />
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

            <CodeHighlight className="language-jsx">
{`
<Tree value={data} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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

            <h3>Controlled vs Uncontrolled</h3>
            <p>Tree expansion state is managed in two ways, in uncontrolled mode only initial expanded state of a node can be defined using <i>expandedKeys</i> property whereas in controlled mode <i>expandedKeys</i>
            property along with <i>onToggle</i> properties are used for full control over the state. If you need to expand or collapse the state of nodes programmatically then controlled mode should be used. Example below demonstrates
            both cases;</p>

<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {Button} from 'primereact/button';
import {NodeService} from '../service/NodeService';

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
        this.toggleMovies = this.toggleMovies.bind(this);
    }

    toggleMovies() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['2'])
            delete expandedKeys['2'];
        else
            expandedKeys['2'] = true;

        this.setState({expandedKeys: expandedKeys});
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <h3 className="first">Uncontrolled</h3>
                <Tree value={this.state.nodes} />

                <h3>Controlled</h3>
                <Button onClick={this.toggleMovies} label="Toggle Movies" />
                <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                    onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}} />
            </div>
        )
    }
}

`}
</CodeHighlight>

            <h3>Selection</h3>
            <p>Tree supports single, multiple and checkbox selection modes. Define <i>selectionMode</i>, <i>selectionKeys</i> and <i>onSelectionChange</i> properties to control the selection. In single mode, selectionKeys should
            be a single value whereas in multiple or checkbox modes an array is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
            in touch enabled devices, Tree does not require metaKey.</p>
            <CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            selectedNodeKey: null,
            selectedNodeKeys1: null,
            selectedNodeKeys2: null,
            selectedNodeKeys3: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <h3>Single Selection</h3>
                <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({selectedNodeKey: e.value})} />

                <h3>Multiple Selection with MetaKey</h3>
                <Tree value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({selectedNodeKeys1: e.value})} />

                <h3>Multiple Selection without MetaKey</h3>
                <Tree value={this.state.nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({selectedNodeKeys2: e.value})} />

                <h3>Checkbox Selection</h3>
                <Tree value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({selectedNodeKeys3: e.value})} />
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
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            loading: true,
        };

        this.nodeService = new NodeService();

        this.loadOnExpand = this.loadOnExpand.bind(this);
    }

    loadOnExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                let node = {...event.node};
                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...this.state.nodes];
                value[parseInt(event.node.key, 10)] = node;
                this.setState({
                    nodes: value,
                    loading: false
                });
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.nodeService.getTreeNodes().then(data => this.setState(
                {
                    nodes: data,
                    loading: false
                }
            ));
        }, 2000);
    }

    render() {
        return (
            <Tree value={this.state.nodes} onExpand={this.loadOnExpand} loading={this.state.loading} />
        )
    }
}

`}
</CodeHighlight>

            <h3>Templating</h3>
            <p><i>label</i> property of a node is used to display as the content by default. Templating is supported as well with the <i>nodeTemplate</i> callback that gets the ndoe instance and returns JSX. Example
            below is a sample tree based navigation of React docs.</p>
            <CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';

export class TreeTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: this.createNavigation()
        };

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

    render() {
        return (
            <Tree value={this.state.nodes} nodeTemplate={this.nodeTemplate} />
        )
    }
}

`}
</CodeHighlight>

            <h3>DragDrop</h3>
            <p>Tree nodes can be reordered using dragdrop by setting <i>dragdropScope</i> property to a unique variable and updating the new value at <i>onDragDrop</i> callback. The value of the dragdropScope must be unique to provide
            intervention from other draggable elements on the page.</p>
            <CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeDragDropDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <Tree value={this.state.nodes} dragdropScope="demo" onDragDrop={event => this.setState({nodes: event.value})} />
            </div>
        )
    }
}

`}
</CodeHighlight>

            <h3>Filtering</h3>
            <p>Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node
            is used to compare against the value in the text field, in order to customize which field(s) should be used during search define <i>filterBy</i> property.</p>

            <p>In addition <i>filterMode</i> specifies the filtering strategy. In <b>lenient</b> mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand,
                 in <b>strict</b> mode when the query matches a node, filtering continues on all descendants.</p>

<CodeHighlight className="language-javascript">
{`
<Tree value={this.state.nodes} filter={true} />

<Tree value={this.state.nodes} filter={true} filterBy="data.name,data.age" />

<Tree value={this.state.nodes} filter={true} filterMode="strict" />

`}
</CodeHighlight>

            <h3>ContextMenu</h3>
            <p>One or more ContextMenu instances can be attached to nodes. Similar to selection, separate <i>contextMenuSelectionKey</i> and <i>onContextMenuSelectionChange</i> properties are necesary to manage the selected node with
            right click. In addition, a context menu can either be displayed at <i>onContextMenu</i> event. Since this event also passes the node instance, you may choose to display a different context menu for a particular node.</p>

<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import {Tree} from 'primereact/tree'
import {ContextMenu} from 'primereact/contextmenu';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

export class TreeContextMenuDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
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

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <ContextMenu model={this.state.menu} ref={el => this.cm = el} />

                <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys} onToggle={e => this.setState({expandedKeys: e.value})}
                    onContextMenuSelectionChange={event => this.setState({selectedNodeKey: event.value})}
                    onContextMenu={event => this.cm.show(event.originalEvent)} />
            </div>
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
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
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
import {Tree} from 'primereact/tree';
import {Button} from 'primereact/button';
import {NodeService} from '../service/NodeService';

export class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
        this.toggleMovies = this.toggleMovies.bind(this);
    }

    toggleMovies() {
        let expandedKeys = {...this.state.expandedKeys};
        if (expandedKeys['2'])
            delete expandedKeys['2'];
        else
            expandedKeys['2'] = true;

        this.setState({expandedKeys: expandedKeys});
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
                    <h3 className="first">Uncontrolled</h3>
                    <Tree value={this.state.nodes} />

                    <h3>Controlled</h3>
                    <Button onClick={this.toggleMovies} label="Toggle Movies" />
                    <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                        onToggle={e => this.setState({expandedKeys: e.value})} style={{marginTop: '.5em'}} />
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
