import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { NodeService } from '../service/NodeService';
import { TreeSubmenu } from './TreeSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeDragDropDemo extends Component {

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
                <TreeSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree - DragDrop</h1>
                        <p>Nodes can be reordered using drag and drop.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("tree")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Tree value={this.state.nodes} dragdropScope="demo" onDragDrop={event => this.setState({ nodes: event.value })} />
                </div>

                <TreeDragDropDemoDoc />
            </div>
        )
    }
}

export class TreeDragDropDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
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
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {Tree} from 'primereact/tree';
import {NodeService} from '../service/NodeService';

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
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
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="TreeDragDropDemo" sources={[key, value]} service="NodeService" data="treenodes" />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        );
    }
}
