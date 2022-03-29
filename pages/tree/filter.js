import React, { useState, useEffect, memo } from 'react';
import { Tree } from '../../components/lib/tree/Tree';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeFilterDemo = () => {

    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React Tree Component - Filter</title>
                <meta name="description" content="Filtering updates the node based on the constraints." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tree <span>Filter</span></h1>
                    <p>Filtering updates the node based on the constraints.</p>
                </div>

                <DocActions github="tree/filter.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Lenient Filter</h5>
                    <Tree value={nodes} filter filterMode="lenient"></Tree>

                    <h5>Strict Filter</h5>
                    <Tree value={nodes} filter filterMode="strict"></Tree>
                </div>
            </div>

            <TreeFilterDemoDoc />
        </div>
    )
}

export default TreeFilterDemo;

export const TreeFilterDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

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
                <div className="card">
                    <h5>Lenient Filter</h5>
                    <Tree value={this.state.nodes} filter filterMode="lenient"></Tree>

                    <h5>Strict Filter</h5>
                    <Tree value={this.state.nodes} filter filterMode="strict"></Tree>
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

const TreeFilterDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Lenient Filter</h5>
                <Tree value={nodes} filter filterMode="lenient"></Tree>

                <h5>Strict Filter</h5>
                <Tree value={nodes} filter filterMode="strict"></Tree>
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
            <Tree value={nodes1} filter />

            <h3>Strict Filter Mode</h3>
            <Tree value={nodes2} filter filterMode="strict" />
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

const TreeFilterDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Lenient Filter</h5>
                <Tree value={nodes} filter filterMode="lenient"></Tree>

                <h5>Strict Filter</h5>
                <Tree value={nodes} filter filterMode="strict"></Tree>
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
                    useLiveEditorTabs({ name: 'TreeFilterDemo', sources: sources, service: 'NodeService', data: 'treenodes' })
                }
            </TabView>
        </div>
    );
})
