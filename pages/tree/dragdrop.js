import React, { useState, useEffect, memo } from 'react';
import { Tree } from '../../components/lib/tree/Tree';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeDragDropDemo = () => {

    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React Tree Component - DragDrop</title>
                <meta name="description" content="Nodes can be reordered using drag and drop." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tree <span>DragDrop</span></h1>
                    <p>Nodes can be reordered using drag and drop.</p>
                </div>
                <DocActions github="tree/dragdrop.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
                </div>
            </div>

            <TreeDragDropDemoDoc />
        </div>
    )
}

export default TreeDragDropDemo;

export const TreeDragDropDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

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
                <div className="card">
                    <Tree value={this.state.nodes} dragdropScope="demo" onDragDrop={event => this.setState({ nodes: event.value })} />
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
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
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
        <script src="https://unpkg.com/primereact/tree/tree.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Tree } = primereact.tree;

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
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
                    useLiveEditorTabs({ name: 'TreeDragDropDemo', sources: sources, service: 'NodeService', data: 'treenodes' })
                }
            </TabView>
        </div>
    );
})
