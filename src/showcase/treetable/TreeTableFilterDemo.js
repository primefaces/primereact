import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { InputText } from '../../components/inputtext/InputText';
import { NodeService } from '../service/NodeService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableFilterDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            globalFilter1: null,
            globalFilter2: null
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    getHeader(globalFilterKey) {
        return (
            <div className="p-text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => this.setState({ [`${globalFilterKey}`]: e.target.value })} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    render() {
        let header1 = this.getHeader('globalFilter1');
        let header2 = this.getHeader('globalFilter2');

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Filter</span></h1>
                        <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                        property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                            By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Lenient Filter</h5>
                        <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter1} header={header1}>
                            <Column field="name" header="Name" expander filter></Column>
                            <Column field="size" header="Size" filter></Column>
                            <Column field="type" header="Type" filter></Column>
                        </TreeTable>
                    </div>

                    <div className="card">
                        <h5>Strict Filter</h5>
                        <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter2} header={header2} filterMode="strict">
                            <Column field="name" header="Name" expander filter></Column>
                            <Column field="size" header="Size" filter></Column>
                            <Column field="type" header="Type" filter></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableFilterDoc />
            </div>
        )
    }
}

class TreeTableFilterDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
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
            globalFilter1: null,
            globalFilter2: null
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    getHeader(globalFilterKey) {
        return (
            <div className="p-text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => this.setState({ [\`\${globalFilterKey}\`]: e.target.value })} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    render() {
        let header1 = this.getHeader('globalFilter1');
        let header2 = this.getHeader('globalFilter2');

        return (
            <div>
                <div className="card">
                    <h5>Lenient Filter</h5>
                    <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter1} header={header1}>
                        <Column field="name" header="Name" expander filter></Column>
                        <Column field="size" header="Size" filter></Column>
                        <Column field="type" header="Type" filter></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Strict Filter</h5>
                    <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter2} header={header2} filterMode="strict">
                        <Column field="name" header="Name" expander filter></Column>
                        <Column field="size" header="Size" filter></Column>
                        <Column field="type" header="Type" filter></Column>
                    </TreeTable>
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const TreeTableFilterDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let header = <div style={{'textAlign':'left'}}>
                    <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" size="50"/>
                </div>;

    return (
        <div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header}>
                <Column field="name" header="Name" expander filter></Column>
                <Column field="size" header="Size" filter></Column>
                <Column field="type" header="Type" filter></Column>
            </TreeTable>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';

const TreeTableFilterDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState<any>(null);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let header = <div style={{'textAlign':'left'}}>
                    <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} placeholder="Global Search" size="50"/>
                </div>;

    return (
        <div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header}>
                <Column field="name" header="Name" expander filter></Column>
                <Column field="size" header="Size" filter></Column>
                <Column field="type" header="Type" filter></Column>
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

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <LiveEditor name="TreeTableFilterDemo" sources={this.sources} service="NodeService" data="treetablenodes" />
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
