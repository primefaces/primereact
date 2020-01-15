import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes1: data}));
        this.nodeservice.getTreeTableNodes().then(data => {
            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2: nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Sort</h1>
                        <p>TreeTable supports both single column and multiple column sorting.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column Sorting</h3>
                    <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>

                    <h3>Multiple Column Sorting</h3>
                    <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>

                <TreeTableSortDemoDoc />
            </div>
        );
    }
}

class TreeTableSortDemoDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
<CodeHighlight className="language-javascript">
{`
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';

export class TreeTableSortDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes1: [],
            nodes2: []
        };

        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes1: data}));
        this.nodeservice.getTreeTableNodes().then(data => {
            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2: nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Sort</h1>
                        <p>TreeTable supports both single column and multiple column sorting.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Single Column Sorting</h3>
                    <TreeTable value={this.state.nodes1} defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>

                    <h3>Multiple Column Sorting</h3>
                    <TreeTable value={this.state.nodes2} sortMode="multiple" defaultSortOrder={-1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>
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
