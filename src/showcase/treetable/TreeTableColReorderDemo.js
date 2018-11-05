import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';

export class TreeTableColReorderDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Column Reorder</h1>
                        <p>Order of the columns can be changed using drag and drop.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} reorderableColumns>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}