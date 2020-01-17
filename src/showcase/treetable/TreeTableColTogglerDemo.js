import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class TreeTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);
        let columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        let colOptions = [];
        for(let col of columns) {
            colOptions.push({label: col.header, value: col});
        }

        this.state = {
            nodes: [],
            cols: columns,
            colOptions: colOptions
        };

        this.nodeservice = new NodeService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.cols} options={this.state.colOptions} onChange={this.onColumnToggle}
                        style={{width:'250px'}}/>
            </div>
        );

        const columns = this.state.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {columns}
                    </TreeTable>
                </div>

                <TreeTableColTogglerDemoDoc />
            </div>
        )
    }
}

class TreeTableColTogglerDemoDoc extends Component {

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
import { MultiSelect } from 'primereact/multiselect';
import { NodeService } from '../service/NodeService';

export class TreeTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);
        let columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        let colOptions = [];
        for(let col of columns) {
            colOptions.push({label: col.header, value: col});
        }

        this.state = {
            nodes: [],
            cols: columns,
            colOptions: colOptions
        };

        this.nodeservice = new NodeService();
        this.onColumnToggle = this.onColumnToggle.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({nodes: data}));
    }

    onColumnToggle(event) {
        this.setState({cols: event.value});
    }

    render() {
        const header = (
            <div style={{textAlign:'left'}}>
                <MultiSelect value={this.state.cols} options={this.state.colOptions} onChange={this.onColumnToggle}
                        style={{width:'250px'}}/>
            </div>
        );

        const columns = this.state.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Column Toggler</h1>
                        <p>MultiSelect component can be used to implement column toggler functionality.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} header={header}>
                        <Column key="name" field="name" header="Name" expander />
                        {columns}
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
