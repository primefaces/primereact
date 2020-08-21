import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Toast } from '../../components/toast/Toast';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
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
        this.toast.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    onUnselect(event) {
        this.toast.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Selection</span></h1>
                        <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <h5>Single</h5>
                        <TreeTable value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey1} onSelectionChange={e => this.setState({ selectedNodeKey1: e.value })}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Multiple</h5>
                        <TreeTable value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({ selectedNodeKeys1: e.value })} metaKeySelection={false}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Multiple with MetaKey</h5>
                        <TreeTable value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({ selectedNodeKeys2: e.value })} metaKeySelection>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Events</h5>
                        <TreeTable value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey2} onSelectionChange={e => this.setState({ selectedNodeKey2: e.value })}
                            onSelect={this.onSelect} onUnselect={this.onUnselect}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Checkbox</h5>
                        <TreeTable value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({ selectedNodeKeys3: e.value })}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableSelectionDemoDoc />
            </div>
        )
    }
}

class TreeTableSelectionDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
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
        this.toast.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    onUnselect(event) {
        this.toast.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Single</h5>
                    <TreeTable value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey1} onSelectionChange={e => this.setState({ selectedNodeKey1: e.value })}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple</h5>
                    <TreeTable value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({ selectedNodeKeys1: e.value })} metaKeySelection={false}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple with MetaKey</h5>
                    <TreeTable value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({ selectedNodeKeys2: e.value })} metaKeySelection>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Events</h5>
                    <TreeTable value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey2} onSelectionChange={e => this.setState({ selectedNodeKey2: e.value })}
                        onSelect={this.onSelect} onUnselect={this.onUnselect}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Checkbox</h5>
                    <TreeTable value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({ selectedNodeKeys3: e.value })}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
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
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableSelectionDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const [nodes3, setNodes3] = useState([]);
    const [nodes4, setNodes4] = useState([]);
    const [nodes5, setNodes5] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const nodeservice = new NodeService();
    let toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    const onUnselect = (event) => {
        toast.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
            setNodes3(data);
            setNodes4(data);
            setNodes5(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <h3 className="first">Single</h3>
            <TreeTable value={nodes1} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple</h3>
            <TreeTable value={nodes2} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple with MetaKey</h3>
            <TreeTable value={nodes3} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Events</h3>
            <TreeTable value={nodes4} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                onSelect={onSelect} onUnselect={onUnselect}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Checkbox</h3>
            <TreeTable value={nodes5} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const TreeTableSelectionDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const [nodes3, setNodes3] = useState([]);
    const [nodes4, setNodes4] = useState([]);
    const [nodes5, setNodes5] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const nodeservice = new NodeService();
    let toast = useRef(null);

    const onSelect = (event: any) => {
        toast.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    const onUnselect = (event: any) => {
        toast.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
            setNodes3(data);
            setNodes4(data);
            setNodes5(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <h3 className="first">Single</h3>
            <TreeTable value={nodes1} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple</h3>
            <TreeTable value={nodes2} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Multiple with MetaKey</h3>
            <TreeTable value={nodes3} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Events</h3>
            <TreeTable value={nodes4} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                onSelect={onSelect} onUnselect={onUnselect}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>

            <h3>Checkbox</h3>
            <TreeTable value={nodes5} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
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
                    <TabPanel header="Source">
                        <LiveEditor name="TreeTableSelectionDemo" sources={this.sources} service="NodeService" data="treetablenodes" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
