import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TreeSubmenu } from './TreeSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes1: data, nodes2: data }));
    }

    render() {
        return (
            <div>
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - Filter</h1>
                        <p>Filtering updates the node based on the constraints.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Lenient Filter Mode</h3>
                    <Tree value={this.state.nodes1} filter={true} />

                    <h3>Strict Filter Mode</h3>
                    <Tree value={this.state.nodes2} filter={true} filterMode="strict" />
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="TreeFilterDemo" sources={[key, value]} service="NodeService" data="treenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
