import React, { Component } from 'react';
import { Tree } from '../../components/tree/Tree';
import { Button } from '../../components/button/Button';
import { NodeService } from '../service/NodeService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { TreeDoc } from './TreeDoc';

export class TreeDemo extends Component {

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
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="tree">
                        <h1>Tree</h1>
                        <p>Tree is used to display hierarchical data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <Tree value={this.state.nodes} />

                        <h5>Programmatic Control</h5>
                        <div className="p-mb-4">
                            <Button type="button" icon="pi pi-plus" label="Expand All" onClick={this.expandAll} className="p-mr-2" />
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
