import React, { Component } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { Button } from '../../components/lib/button/Button';
import { NodeService } from '../../service/NodeService';
import { TreeTableDoc } from '../../components/doc/treetable';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class TreeTableDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            expandedKeys: {}
        };
        this.nodeservice = new NodeService();
        this.toggleApplications = this.toggleApplications.bind(this);
    }

    toggleApplications() {
        let expandedKeys = { ...this.state.expandedKeys };
        if (expandedKeys['0'])
            delete expandedKeys['0'];
        else
            expandedKeys['0'] = true;

        this.setState({ expandedKeys: expandedKeys });
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React TreeTable Component</title>
                    <meta name="description" content="TreeTable is used to display hierarchical data in tabular format." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable</h1>
                        <p>TreeTable is used to display hierarchical data in tabular format.</p>
                    </div>

                    <DocActions github="treetable/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Basic</h5>
                        <TreeTable value={this.state.nodes}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Programmatic</h5>
                        <Button onClick={this.toggleApplications} label="Toggle Applications" />
                        <TreeTable value={this.state.nodes} expandedKeys={this.state.expandedKeys}
                            onToggle={e => this.setState({ expandedKeys: e.value })} style={{ marginTop: '.5em' }}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableDoc />
            </div>
        )
    }
}
