import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { InputText } from '../../components/lib/inputtext/InputText';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableFilterDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter1, setGlobalFilter1] = useState(null);
    const [globalFilter2, setGlobalFilter2] = useState(null);
    const nodeservice = new NodeService();

    const treeTableFuncMap = {
        'globalFilter1': setGlobalFilter1,
        'globalFilter2': setGlobalFilter2
    };

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = (globalFilterKey) => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => treeTableFuncMap[`${globalFilterKey}`](e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    let header1 = getHeader('globalFilter1');
    let header2 = getHeader('globalFilter2');

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Filter</title>
                <meta name="description" content="Filtering is enabled by setting the filter property as true in column object." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Filter</span></h1>
                    <p>Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode
                        property of column object that also accepts "contains", "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword.
                        By default input fields are generated as filter elements and using templating any component can be used as a filter.</p>
                </div>

                <DocActions github="treetable/filter.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Lenient Filter</h5>
                    <TreeTable value={nodes} globalFilter={globalFilter1} header={header1}>
                        <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                        <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                        <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Strict Filter</h5>
                    <TreeTable value={nodes} globalFilter={globalFilter2} header={header2} filterMode="strict">
                        <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                        <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                        <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableFilterDoc />
        </div>
    )
}

export default TreeTableFilterDemo;

const TreeTableFilterDoc = memo(() => {

    const sources = {
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
            <div className="text-right">
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
                        <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                        <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                        <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Strict Filter</h5>
                    <TreeTable value={this.state.nodes} globalFilter={this.state.globalFilter2} header={header2} filterMode="strict">
                        <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                        <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                        <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
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
    const [globalFilter1, setGlobalFilter1] = useState(null);
    const [globalFilter2, setGlobalFilter2] = useState(null);
    const nodeservice = new NodeService();

    const treeTableFuncMap = {
        'globalFilter1': setGlobalFilter1,
        'globalFilter2': setGlobalFilter2
    };

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = (globalFilterKey) => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => treeTableFuncMap[\`\${globalFilterKey}\`](e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    let header1 = getHeader('globalFilter1');
    let header2 = getHeader('globalFilter2');

    return (
        <div>
            <div className="card">
                <h5>Lenient Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter1} header={header1}>
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Strict Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter2} header={header2} filterMode="strict">
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>
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
    const [globalFilter1, setGlobalFilter1] = useState(null);
    const [globalFilter2, setGlobalFilter2] = useState(null);
    const nodeservice = new NodeService();

    const treeTableFuncMap = {
        'globalFilter1': setGlobalFilter1,
        'globalFilter2': setGlobalFilter2
    };

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = (globalFilterKey) => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => treeTableFuncMap[\`\${globalFilterKey}\`](e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    let header1 = getHeader('globalFilter1');
    let header2 = getHeader('globalFilter2');

    return (
        <div>
            <div className="card">
                <h5>Lenient Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter1} header={header1}>
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Strict Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter2} header={header2} filterMode="strict">
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;
const { InputText } = primereact.inputtext;

const TreeTableFilterDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [globalFilter1, setGlobalFilter1] = useState(null);
    const [globalFilter2, setGlobalFilter2] = useState(null);
    const nodeservice = new NodeService();

    const treeTableFuncMap = {
        'globalFilter1': setGlobalFilter1,
        'globalFilter2': setGlobalFilter2
    };

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = (globalFilterKey) => {
        return (
            <div className="text-right">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => treeTableFuncMap[\`\${globalFilterKey}\`](e.target.value)} placeholder="Global Search" size="50" />
                </div>
            </div>
        );
    }

    let header1 = getHeader('globalFilter1');
    let header2 = getHeader('globalFilter2');

    return (
        <div>
            <div className="card">
                <h5>Lenient Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter1} header={header1}>
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Strict Filter</h5>
                <TreeTable value={nodes} globalFilter={globalFilter2} header={header2} filterMode="strict">
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeTableFilterDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
