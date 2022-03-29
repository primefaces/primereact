import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { Button } from '../../components/lib/button/Button';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableTemplatingDemo = () => {

    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Templating</title>
                <meta name="description" content="Custom content at header, body and footer sections are supported via templating." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Templating</span></h1>
                    <p>Custom content at header, body and footer sections are supported via templating.</p>
                </div>

                <DocActions github="treetable/templating.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <TreeTable value={nodes} header={header} footer={footer}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                        <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                    </TreeTable>
                </div>
            </div>

            <TreeTableTemplatingDemoDoc />
        </div>
    )
}

export default TreeTableTemplatingDemo;

const TreeTableTemplatingDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

export class TreeTableTemplatingDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.actionTemplate = this.actionTemplate.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    actionTemplate(node, column) {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    render() {
        const header = "File Viewer";
        const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

        return (
            <div>
                <div className="card">
                    <TreeTable value={this.state.nodes} header={header} footer={footer}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                        <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
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
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeTableTemplatingDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from '../service/NodeService';

const TreeTableTemplatingDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="./NodeService.js"></script>

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;
const { Button } = primereact.button;

const TreeTableTemplatingDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const actionTemplate = (node, column) => {
        return <div>
            <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
            <Button type="button" icon="pi pi-pencil" className="p-button-warning"></Button>
        </div>;
    }

    const header = "File Viewer";
    const footer = <div style={{ textAlign: 'left' }}><Button icon="pi pi-refresh" tooltip="Reload" /></div>;

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} header={header} footer={footer}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                    <Column body={actionTemplate} style={{ textAlign: 'center', width: '10rem' }} />
                </TreeTable>
            </div>
        </div>
    );
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeTableTemplatingDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
