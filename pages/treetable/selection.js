import React, { useState, useEffect, useRef, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Toast } from '../../components/lib/toast/Toast';
import { Column } from '../../components/lib/column/Column';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableSelectionDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const toast = useRef(null);
    const nodeservice = new NodeService();

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Selection</title>
                <meta name="description" content="TreeTable supports single, multiple and checkbox based selection modes." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Selection</span></h1>
                    <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
                </div>

                <DocActions github="treetable/selection.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <div className="card">
                    <h5>Single</h5>
                    <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple</h5>
                    <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple with MetaKey</h5>
                    <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Events</h5>
                    <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                        onSelect={onSelect} onUnselect={onUnselect}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Checkbox</h5>
                    <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
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

export default TreeTableSelectionDemo;

const TreeTableSelectionDemoDoc = memo(() => {

    const sources = {
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
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const toast = useRef(null);
    const nodeservice = new NodeService();

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple with MetaKey</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Events</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                    onSelect={onSelect} onUnselect={onUnselect}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>
                <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
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
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const toast = useRef(null);
    const nodeservice = new NodeService();

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple with MetaKey</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Events</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                    onSelect={onSelect} onUnselect={onUnselect}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>
                <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useEffect, useState, useRef } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;
const { Toast } = primereact.toast;

const TreeTableSelectionDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState([]);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState([]);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState([]);
    const toast = useRef(null);
    const nodeservice = new NodeService();

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    }

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Single</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey1} onSelectionChange={e => setSelectedNodeKey1(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} metaKeySelection={false}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple with MetaKey</h5>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} metaKeySelection>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Events</h5>
                <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey2} onSelectionChange={e => setSelectedNodeKey2(e.value)}
                    onSelect={onSelect} onUnselect={onUnselect}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Checkbox</h5>
                <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeTableSelectionDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
