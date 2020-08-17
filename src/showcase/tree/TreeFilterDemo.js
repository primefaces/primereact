import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree <span>Filter</span></h1>
                        <p>Filtering updates the node based on the constraints.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Lenient Filter</h5>
                        <Tree value={this.state.nodes} filter filterMode="lenient"></Tree>

                        <h5>Strict Filter</h5>
                        <Tree value={this.state.nodes} filter filterMode="strict"></Tree>
                    </div>
                </div>

                <TreeFilterDemoDoc />
            </div>
        )
    }
}

export class TreeFilterDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

export class TreeFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: null,
            nodes2: null
        };

        this.nodeService = new NodeService();
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({nodes1: data, nodes2: data}));
    }

    render() {
        return (
            <div>
                <h3 className="first">Lenient Filter Mode</h3>
                <Tree value={this.state.nodes1} filter={true} />

                <h3>Strict Filter Mode</h3>
                <Tree value={this.state.nodes2} filter={true} filterMode="strict" />
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

const TreeFilterDemo = () => {
    const [nodes1, setNodes1] = useState(null);
    const [nodes2, setNodes2] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3 className="first">Lenient Filter Mode</h3>
            <Tree value={nodes1} filter={true} />

            <h3>Strict Filter Mode</h3>
            <Tree value={nodes2} filter={true} filterMode="strict" />
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

const TreeFilterDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => {
            setNodes1(data);
            setNodes2(data);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <h3 className="first">Lenient Filter Mode</h3>
            <Tree value={nodes1} filter={true} />

            <h3>Strict Filter Mode</h3>
            <Tree value={nodes2} filter={true} filterMode="strict" />
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
                        <LiveEditor name="TreeFilterDemo" sources={this.sources} service="NodeService" data="treenodes" />
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
