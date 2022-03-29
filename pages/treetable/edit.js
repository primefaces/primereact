import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { InputText } from '../../components/lib/inputtext/InputText';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Edit</title>
                <meta name="description" content="Incell editing provides a quick and user friendly way to manipulate data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Edit</span></h1>
                    <p>Incell editing provides a quick and user friendly way to manipulate data.</p>
                </div>

                <DocActions github="treetable/edit.js" />
            </div>

            <div className="content-section implementation treetable-editing-demo">
                <div className="card">
                    <TreeTable value={nodes}>
                        <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                        <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                        <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableEditDemoDoc />
        </div>
    )
}

export default TreeTableEditDemo;

const TreeTableEditDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

export class TreeTableEditDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();

        this.sizeEditor = this.sizeEditor.bind(this);
        this.typeEditor = this.typeEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    onEditorValueChange(options, value) {
        let newNodes = JSON.parse(JSON.stringify(this.state.nodes));
        let editedNode = this.findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        this.setState({
            nodes: newNodes
        });
    }

    findNodeByKey(nodes, key) {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    inputTextEditor(options) {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => this.onEditorValueChange(options, e.target.value)} />
        );
    }

    sizeEditor(options) {
        return this.inputTextEditor(options);
    }

    typeEditor(options) {
        return this.inputTextEditor(options);
    }

    requiredValidator(e) {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <TreeTable value={this.state.nodes}>
                        <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                        <Column field="size" header="Size" editor={this.sizeEditor} cellEditValidator={this.requiredValidator} style={{ height: '3.5em' }}></Column>
                        <Column field="type" header="Type" editor={this.typeEditor} style={{ height: '3.5em' }}></Column>
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
import './TreeTableDemo.css';

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
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
import { InputText } from 'primereact/inputtext';
import { NodeService } from '../service/NodeService';
import './TreeTableDemo.css';

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
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
    <link rel="stylesheet" href="./TreeTableDemo.css" />
    <script src="./NodeService.js"></script>

    <script src="https://unpkg.com/primereact/api/api.min.js"></script>
    <script src="https://unpkg.com/primereact/core/core.min.js"></script>
    <script src="https://unpkg.com/primereact/column/column.min.js"></script>
    <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>
    <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;
const { InputText } = primereact.inputtext;

const TreeTableEditDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onEditorValueChange = (options, value) => {
        let newNodes = JSON.parse(JSON.stringify(nodes));
        let editedNode = findNodeByKey(newNodes, options.node.key);
        editedNode.data[options.field] = value;

        setNodes(newNodes);
    }

    const findNodeByKey = (nodes, key) => {
        let path = key.split('-');
        let node;

        while (path.length) {
            let list = node ? node.children : nodes;
            node = list[parseInt(path[0], 10)];
            path.shift();
        }

        return node;
    }

    const inputTextEditor = (options) => {
        return (
            <InputText type="text" value={options.rowData[options.field]}
                onChange={(e) => onEditorValueChange(options, e.target.value)} />
        );
    }

    const sizeEditor = (options) => {
        return inputTextEditor(options);
    }

    const typeEditor = (options) => {
        return inputTextEditor(options);
    }

    const requiredValidator = (e) => {
        let props = e.columnProps;
        let value = props.node.data[props.field];

        return value && value.length > 0;
    }

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes}>
                    <Column field="name" header="Name" expander style={{ height: '3.5em' }}></Column>
                    <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: '3.5em' }}></Column>
                    <Column field="type" header="Type" editor={typeEditor} style={{ height: '3.5em' }}></Column>
                </TreeTable>
            </div>
        </div>
    );
}
                `
        }
    }

    const extFiles = {
        'demo/TreeTableDemo.css': {
            content: `
.treetable-editing-demo .p-treetable .p-treetable-tbody > tr > td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'TreeTableEditDemo', sources: sources, service: 'NodeService', data: 'treetablenodes', extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})
