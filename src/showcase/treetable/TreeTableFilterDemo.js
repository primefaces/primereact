import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { NodeService } from '../service/NodeService';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            globalFilter: null
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        let header = <div style={{'textAlign':'left'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    </div>;

        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Filter</h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                            property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                            By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter} header={header}>
                        <Column field="name" header="Name" expander filter={true}></Column>
                        <Column field="size" header="Size" filter={true}></Column>
                        <Column field="type" header="Type" filter={true}></Column>
                    </TreeTable>
                </div>

                <TreeTableFilterDoc />
            </div>
        )
    }
}

class TreeTableFilterDoc extends Component {

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
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

export class TreeTableFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            globalFilter: null
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    render() {
        let header = <div style={{'textAlign':'left'}}>
                        <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                        <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
                    </div>;

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Filter</h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                            property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                            By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter} header={header}>
                        <Column field="name" header="Name" expander filter={true}></Column>
                        <Column field="size" header="Size" filter={true}></Column>
                        <Column field="type" header="Type" filter={true}></Column>
                    </TreeTable>
                </div>
            </div>
        )
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
