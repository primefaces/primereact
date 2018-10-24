import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from './TreeTableSubmenu';

export class TreeTableScrollDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Vertical</h3>
                    <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>

                    <h3>Horizontal</h3>
                    <TreeTable value={this.state.nodes} scrollable style={{width: '600px'}}>
                        <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                        <Column field="size" header="Size" style={{width:'350px'}}></Column>
                        <Column field="type" header="Type" style={{width:'350px'}}></Column>
                    </TreeTable>

                    <h3>Horizontal and Vertical</h3>
                    <TreeTable value={this.state.nodes} scrollable style={{width: '600px'}} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{width:'350px'}}></Column>
                        <Column field="size" header="Size" style={{width:'350px'}}></Column>
                        <Column field="type" header="Type" style={{width:'350px'}}></Column>
                    </TreeTable>

                    <h3>Frozen Columns</h3>
                    <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{width:'250px'}}></Column>
                        <Column field="size" header="Size" style={{width:'250px'}}></Column>
                        <Column field="type" header="Type" style={{width:'250px'}}></Column>
                        <Column field="size" header="Size" style={{width:'250px'}}></Column>
                        <Column field="type" header="Type" style={{width:'250px'}}></Column>
                        <Column field="size" header="Size" style={{width:'250px'}}></Column>
                        <Column field="type" header="Type" style={{width:'250px'}}></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}