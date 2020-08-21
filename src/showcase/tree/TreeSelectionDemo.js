import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            selectedKey: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null
        };

        this.nodeService = new NodeService();
        this.onNodeSelect = this.onNodeSelect.bind(this);
        this.onNodeUnselect = this.onNodeUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    onNodeSelect(node) {
        this.toast.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    onNodeUnselect(node) {
        this.toast.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree <span>Selection</span></h1>
                        <p>Tree supports "single", "multiple" and "checkbox" as selection modes.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Single Selection</h5>
                        <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedKey1} onSelectionChange={e => this.setState({ selectedKey1: e.value })} />

                        <h5>Multiple Selection with MetaKey</h5>
                        <Tree value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedKeys1} onSelectionChange={e => this.setState({ selectedKeys1: e.value })} />

                        <h5>Multiple Selection without MetaKey</h5>
                        <Tree value={this.state.nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={this.state.selectedKeys2} onSelectionChange={e => this.setState({ selectedKeys2: e.value })} />

                        <h5>Checkbox Selection</h5>
                        <Tree value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedKeys3} onSelectionChange={e => this.setState({ selectedKeys3: e.value })} />
                    </div>
                </div>
                <TreeSelectionDemoDoc />
            </div>
        )
    }
}

export class TreeSelectionDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export class TreeSelectionDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            selectedKey: null,
            selectedKeys1: null,
            selectedKeys2: null,
            selectedKeys3: null
        };

        this.nodeService = new NodeService();
        this.onNodeSelect = this.onNodeSelect.bind(this);
        this.onNodeUnselect = this.onNodeUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    onNodeSelect(node) {
        this.toast.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    onNodeUnselect(node) {
        this.toast.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Single Selection</h5>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedKey1} onSelectionChange={e => this.setState({ selectedKey1: e.value })} />

                    <h5>Multiple Selection with MetaKey</h5>
                    <Tree value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedKeys1} onSelectionChange={e => this.setState({ selectedKeys1: e.value })} />

                    <h5>Multiple Selection without MetaKey</h5>
                    <Tree value={this.state.nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={this.state.selectedKeys2} onSelectionChange={e => this.setState({ selectedKeys2: e.value })} />

                    <h5>Checkbox Selection</h5>
                    <Tree value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedKeys3} onSelectionChange={e => this.setState({ selectedKeys3: e.value })} />
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
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeSelectionDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState(null);

    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Selection</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)} />

            <h3>Multiple Selection with MetaKey</h3>
            <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} />

            <h3>Multiple Selection without MetaKey</h3>
            <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} />

            <h3>Checkbox Selection</h3>
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeSelectionDemo = () => {
    const [nodes, setNodes] = useState<any>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const [selectedNodeKeys3, setSelectedNodeKeys3] = useState(null);

    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3>Single Selection</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)} />

            <h3>Multiple Selection with MetaKey</h3>
            <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys1} onSelectionChange={e => setSelectedNodeKeys1(e.value)} />

            <h3>Multiple Selection without MetaKey</h3>
            <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedNodeKeys2} onSelectionChange={e => setSelectedNodeKeys2(e.value)} />

            <h3>Checkbox Selection</h3>
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys3} onSelectionChange={e => setSelectedNodeKeys3(e.value)} />
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
                        <LiveEditor name="TreeSelectionDemo" sources={this.sources} service="NodeService" data="treenodes" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
