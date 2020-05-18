import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TreeTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);
        let columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.colOptions = [];
        for (let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        this.state = {
            nodes: [],
            cols: columns
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
                <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle}
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

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

export class TreeTableColTogglerDemo extends Component {

    constructor(props) {
        super(props);
        let columns = [
            {field: 'size', header: 'Size'},
            {field: 'type', header: 'Type'}
        ];

        this.colOptions = [];
        for (let col of columns) {
            this.colOptions.push({label: col.header, value: col});
        }

        this.state = {
            nodes: [],
            cols: columns
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
                <MultiSelect value={this.state.cols} options={this.colOptions} onChange={this.onColumnToggle}
                        style={{width:'250px'}}/>
            </div>
        );

        const columns = this.state.cols.map((col, i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
                <TreeTable value={this.state.nodes} header={header}>
                    <Column key="name" field="name" header="Name" expander />
                    {columns}
                </TreeTable>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

const TreeTableColTogglerDemo = () => {
    let columns = [
        {field: 'size', header: 'Size'},
        {field: 'type', header: 'Type'}
    ];

    let colOptions = [];
    for (let col of columns) {
        colOptions.push({label: col.header, value: col});
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        setCols(event.value);
    }

    const header = (
        <div style={{textAlign:'left'}}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                    style={{width:'250px'}}/>
        </div>
    );

    const activeColumns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <TreeTable value={nodes} header={header}>
                <Column key="name" field="name" header="Name" expander />
                {activeColumns}
            </TreeTable>
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";
import { NodeService } from '../service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

const TreeTableColTogglerDemo = () => {
    let columns = [
        {field: 'size', header: 'Size'},
        {field: 'type', header: 'Type'}
    ];

    let colOptions = [];
    for (let col of columns) {
        colOptions.push({label: col.header, value: col});
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event: any) => {
        setCols(event.value);
    }

    const header = (
        <div style={{textAlign:'left'}}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                    style={{width:'250px'}}/>
        </div>
    );

    const activeColumns = cols.map((col: any, i: number) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
        <div>
            <TreeTable value={nodes} header={header}>
                <Column key="name" field="name" header="Name" expander />
                {activeColumns}
            </TreeTable>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTableColTogglerDemo" sources={this.sources} service="NodeService" data="treetablenodes" />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
