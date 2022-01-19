import React, { Component } from 'react';
import { Tree } from '../../components/lib/tree/Tree';
import { Button } from '../../components/lib/button/Button';
import { NodeService } from '../../service/NodeService';
import { TreeDoc } from '../../components/doc/tree';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class TreeDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            expandedKeys: {}
        };

        this.nodeService = new NodeService();
        this.expandAll = this.expandAll.bind(this);
        this.collapseAll = this.collapseAll.bind(this);
        this.expandNode = this.expandNode.bind(this);
    }

    expandAll() {
        let expandedKeys = {};
        for (let node of this.state.nodes) {
            this.expandNode(node, expandedKeys);
        }

        this.setState({ expandedKeys });
    }

    collapseAll() {
        this.setState({ expandedKeys: {} });
    }

    expandNode(node, expandedKeys) {
        if (node.children && node.children.length) {
            expandedKeys[node.key] = true;

            for (let child of node.children) {
                this.expandNode(child, expandedKeys);
            }
        }
    }

    componentDidMount() {
        this.nodeService.getTreeNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React Tree Component</title>
                    <meta name="description" content="Tree is used to display hierarchical data." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tree</h1>
                        <p>Tree is used to display hierarchical data.</p>
                    </div>

                    <DocActions github="tree/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <Tree value={this.state.nodes} />

                        <h5>Programmatic Control</h5>
                        <div className="mb-4">
                            <Button type="button" icon="pi pi-plus" label="Expand All" onClick={this.expandAll} className="mr-2" />
                            <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={this.collapseAll} />
                        </div>
                        <Tree value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                            onToggle={e => this.setState({ expandedKeys: e.value })} />
                    </div>
                </div>

                <TreeDoc />
            </div>
        )
    }
}
