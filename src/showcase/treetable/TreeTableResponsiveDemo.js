import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';

export class TreeTableResponsiveDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.nameTemplate = this.nameTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    nameTemplate(node) {
        return (
            <React.Fragment>
                <span>{node.data.name}</span>
                <span className="p-col-m">, {node.data.size}</span>
                <span className="p-col-m">, {node.data.type}</span>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Responsive</h1>
                        <p>TreeTable columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} responsive={true} header="Responsive TreeTable"> 
                        <Column field="name" header="Name" body={this.nameTemplate} expander headerClassName="p-col-d"></Column>
                        <Column field="size" header="Size" className="p-col-d"></Column>
                        <Column field="type" header="Type" className="p-col-d"></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}