import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [], data2: [] };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        //Single Sort
        this.nodeservice.getNodes().then(data => this.setState({ data: data }));

        //Multiple Sort
        this.nodeservice.getNodes().then(data => {
            let _data = [...data];
            _data[0].children[0].children.push({
                "data": {
                    "name": "Expenses.doc",
                    "size": "40kb",
                    "type": "Document - 2"
                }
            });
            _data[0].children[1].children.push({
                "data": {
                    "name": "Invoices",
                    "size": "2kb",
                    "type": "Text - 2"
                }
            });
            _data[0].children[1].children.push({
                "data": {
                    "name": "Invoices",
                    "size": "20kb",
                    "type": "Text - 3"
                }
            });
            this.setState({ data2: _data })
        });
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Sort</h1>
                        <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and
                            used with metaKey.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column</h3>
                    <TreeTable value={this.state.data}>
                        <Column field="name" header="Name" sortable={true}></Column>
                        <Column field="size" header="Size" sortable={true}></Column>
                        <Column field="type" header="Type" sortable={true}></Column>
                    </TreeTable>

                    <h3>Multiple Columns</h3>
                    <TreeTable value={this.state.data2} sortMode="multiple">
                        <Column field="name" header="Name" sortable={true}></Column>
                        <Column field="size" header="Size" sortable={true}></Column>
                        <Column field="type" header="Type" sortable={true}></Column>
                    </TreeTable>
                </div>

                <TreeTableSortDemoDoc></TreeTableSortDemoDoc>
            </div>
        );
    }
}

export class TreeTableSortDemoDoc extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [], data2: [] };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        //Single Sort
        this.nodeservice.getNodes().then(data => this.setState({ data: data }));

        //Multiple Sort
        this.nodeservice.getNodes().then(data => {
            let _data = [...data];
            _data[0].children[0].children.push({
                "data": {
                    "name": "Expenses.doc",
                    "size": "40kb",
                    "type": "Document - 2"
                }
            });
            _data[0].children[1].children.push({
                "data": {
                    "name": "Invoices",
                    "size": "2kb",
                    "type": "Text - 2"
                }
            });
            _data[0].children[1].children.push({
                "data": {
                    "name": "Invoices",
                    "size": "20kb",
                    "type": "Text - 3"
                }
            });
            this.setState({ data2: _data })
        });
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Sort</h1>
                        <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and
                            used with metaKey.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column</h3>
                    <TreeTable value={this.state.data}>
                        <Column field="name" header="Name" sortable={true}></Column>
                        <Column field="size" header="Size" sortable={true}></Column>
                        <Column field="type" header="Type" sortable={true}></Column>
                    </TreeTable>

                    <h3>Multiple Columns</h3>
                    <TreeTable value={this.state.data2} sortMode="multiple">
                        <Column field="name" header="Name" sortable={true}></Column>
                        <Column field="size" header="Size" sortable={true}></Column>
                        <Column field="type" header="Type" sortable={true}></Column>
                    </TreeTable>
                </div>

                <TreeTableSortDemoDoc></TreeTableSortDemoDoc>
            </div>
        );
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
