import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { Growl } from '../../components/growl/Growl';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeEventsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            selectedNodeKey: null
        };

        this.nodeService = new NodeService();

        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    onExpand(event) {
        this.growl.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    }

    onCollapse(event) {
        this.growl.show({ severity: 'success', summary: 'Node Collapsed', detail: event.node.label });
    }

    onSelect(event) {
        this.growl.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    onUnselect(event) {
        this.growl.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree <span>Events</span></h1>
                        <p>An event is provided each type of user interaction such as expand, collapse and selection.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <div className="card">
                        <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({ selectedNodeKey: e.value })}
                            onExpand={this.onExpand} onCollapse={this.onCollapse} onSelect={this.onSelect} onUnselect={this.onUnselect} />
                    </div>
                </div>

                <TreeEventsDemoDoc />
            </div>
        )
    }
}

export class TreeEventsDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { Growl } from 'primereact/growl';
import { NodeService } from '../service/NodeService';

export class TreeEventsDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            selectedNodeKey: null
        };

        this.nodeService = new NodeService();

        this.onExpand = this.onExpand.bind(this);
        this.onCollapse = this.onCollapse.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onUnselect = this.onUnselect.bind(this);
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    onExpand(event) {
        this.growl.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    }

    onCollapse(event) {
        this.growl.show({ severity: 'success', summary: 'Node Collapsed', detail: event.node.label });
    }

    onSelect(event) {
        this.growl.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    onUnselect(event) {
        this.growl.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />

                <div className="card">
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({ selectedNodeKey: e.value })}
                        onExpand={this.onExpand} onCollapse={this.onCollapse} onSelect={this.onSelect} onUnselect={this.onUnselect} />
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
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeEventsDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const nodeService = new NodeService();
    let growl = useRef(null);

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onExpand = (event) => {
        growl.current.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    };

    const onCollapse = (event) => {
        growl.current.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    };

    const onSelect = (event) => {
        growl.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    const onUnselect = (event) => {
        growl.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3 className="first">Events</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import {Tree} from 'primereact/tree';
import {Growl} from 'primereact/growl';
import {NodeService} from '../service/NodeService';

const TreeEventsDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>(null);
    const nodeService = new NodeService();
    let growl = useRef<any>(null);

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onExpand = (event: any) => {
        growl.current.show({severity: 'success', summary: 'Node Expanded', detail: event.node.label});
    };

    const onCollapse = (event: any) => {
        growl.current.show({severity: 'success', summary: 'Node Collapsed', detail: event.node.label});
    };

    const onSelect = (event: any) => {
        growl.current.show({severity: 'info', summary: 'Node Selected', detail: event.node.label});
    }

    const onUnselect = (event: any) => {
        growl.current.show({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
    };

    return (
        <div>
            <Growl ref={growl} />

            <h3 className="first">Events</h3>
            <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} />
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
                        <LiveEditor name="TreeEventsDemo" sources={this.sources} service="NodeService" data="treenodes" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
