import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TreeSubmenu } from './TreeSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Selection</h1>
                        <p>Tree supports "single", "multiple" and "checkbox" as selection modes.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Selection</h3>
                    <Tree value={this.state.nodes} selectionMode="single" selectionKeys={this.state.selectedNodeKey} onSelectionChange={e => this.setState({ selectedNodeKey: e.value })} />

                    <h3>Multiple Selection with MetaKey</h3>
                    <Tree value={this.state.nodes} selectionMode="multiple" selectionKeys={this.state.selectedNodeKeys1} onSelectionChange={e => this.setState({ selectedNodeKeys1: e.value })} />

                    <h3>Multiple Selection without MetaKey</h3>
                    <Tree value={this.state.nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={this.state.selectedNodeKeys2} onSelectionChange={e => this.setState({ selectedNodeKeys2: e.value })} />

                    <h3>Checkbox Selection</h3>
                    <Tree value={this.state.nodes} selectionMode="checkbox" selectionKeys={this.state.selectedNodeKeys3} onSelectionChange={e => this.setState({ selectedNodeKeys3: e.value })} />
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="TreeSelectionDemo" sources={[key, value]} service="NodeService" data="treenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
