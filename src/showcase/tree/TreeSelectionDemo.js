import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { Toast } from '../../components/toast/Toast';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
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
                    <Toast ref={(el) => this.toast = el} />
                    <div className="card">
                        <h5>Single Selection</h5>
                        <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedKey} onSelectionChange={e => this.setState({ selectedKey: e.value })} onSelect={this.onNodeSelect} onUnselect={this.onNodeUnselect}/>

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
import { Toast } from 'primereact/toast';
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
                <Toast ref={(el) => this.toast = el} />
                <div className="card">
                    <h5>Single Selection</h5>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedKey} onSelectionChange={e => this.setState({ selectedKey: e.value })} onSelect={this.onNodeSelect} onUnselect={this.onNodeUnselect}/>

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
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from '../service/NodeService';

const TreeSelectionDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const [selectedKeys1, setSelectedKeys1] = useState(null);
    const [selectedKeys2, setSelectedKeys2] = useState(null);
    const [selectedKeys3, setSelectedKeys3] = useState(null);
    const toast = useRef(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onNodeSelect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    const onNodeUnselect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <h5>Single Selection</h5>
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect}/>

                <h5>Multiple Selection with MetaKey</h5>
                <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedKeys1} onSelectionChange={e => setSelectedKeys1(e.value)} />

                <h5>Multiple Selection without MetaKey</h5>
                <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKeys2} onSelectionChange={e => setSelectedKeys2(e.value)} />

                <h5>Checkbox Selection</h5>
                <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys3} onSelectionChange={e => setSelectedKeys3(e.value)} />
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
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from '../service/NodeService';

const TreeSelectionDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const [selectedKeys1, setSelectedKeys1] = useState(null);
    const [selectedKeys2, setSelectedKeys2] = useState(null);
    const [selectedKeys3, setSelectedKeys3] = useState(null);
    const toast = useRef(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onNodeSelect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    const onNodeUnselect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />
            <div className="card">
                <h5>Single Selection</h5>
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect}/>

                <h5>Multiple Selection with MetaKey</h5>
                <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedKeys1} onSelectionChange={e => setSelectedKeys1(e.value)} />

                <h5>Multiple Selection without MetaKey</h5>
                <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKeys2} onSelectionChange={e => setSelectedKeys2(e.value)} />

                <h5>Checkbox Selection</h5>
                <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys3} onSelectionChange={e => setSelectedKeys3(e.value)} />
            </div>
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
                    {
                        useLiveEditorTabs({ name: 'TreeSelectionDemo', sources: this.sources, service: 'NodeService', data: 'treenodes' })
                    }
                </TabView>
            </div>
        );
    }
}
