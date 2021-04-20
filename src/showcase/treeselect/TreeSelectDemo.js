import React, { Component } from 'react';
import { TreeSelect } from '../../components/treeselect/TreeSelect';
import { NodeService } from '../service/NodeService';
import { AppInlineHeader } from '../../AppInlineHeader';
import AppDemoActions from '../../AppDemoActions';
import { TreeSelectDoc } from './TreeSelectDoc';
import './TreeSelectDemo.scss';

export class TreeSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: null,
            selectedNodeKey1: null,
            selectedNodeKey2: null,
            selectedNodeKeys1: null,
            selectedNodeKeys2: null
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
                    <AppInlineHeader changelogText="treeSelect">
                        <h1>TreeSelect</h1>
                        <p>TreeSelect is a form component to choose from hierarchical data.</p>
                    </AppInlineHeader>
                    <AppDemoActions github="treeselect/TreeSelectDemo.js" />
                </div>

                <div className="content-section implementation treeselect-demo">
                    <div className="card">
                        <h5>Single</h5>
                        <TreeSelect value={this.state.selectedNodeKey1} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey1: e.value })} placeholder="Select Item"></TreeSelect>

                        <h5>Multiple</h5>
                        <TreeSelect value={this.state.selectedNodeKeys1} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKeys1: e.value })} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                        <h5>Checkbox</h5>
                        <TreeSelect value={this.state.selectedNodeKeys2} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKeys2: e.value })} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                        <h5>Filter</h5>
                        <TreeSelect value={this.state.selectedNodeKey2} options={this.state.nodes} onChange={(e) => this.setState({ selectedNodeKey2: e.value })} filter placeholder="Select Items"></TreeSelect>
                    </div>
                </div>

                <TreeSelectDoc />
            </div>
        )
    }
}
