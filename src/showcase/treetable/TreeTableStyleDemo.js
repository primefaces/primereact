import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { NodeService } from '../service/NodeService';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    rowClassName(node) {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Styling</span></h1>
                        <p>Particular rows and cells can be styled based on data.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                        <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableStyleDemoDoc />
            </div>
        )
    }
}

class TreeTableStyleDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableStyleDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
        this.sizeTemplate = this.sizeTemplate.bind(this);
        this.rowClassName = this.rowClassName.bind(this);
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    sizeTemplate(node) {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    rowClassName(node) {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                    <TreeTable value={this.state.nodes} rowClassName={this.rowClassName}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size" body={this.sizeTemplate}></Column>
                        <Column field="type" header="Type"></Column>
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
import { NodeService } from '../service/NodeService';

const TreeTableStyleDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div>
            <div className="card">
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                <TreeTable value={nodes} rowClassName={rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
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
import { NodeService } from '../service/NodeService';

const TreeTableStyleDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div>
            <div className="card">
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                <TreeTable value={nodes} rowClassName={rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    );
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
                    {
                        useLiveEditorTabs({ name: 'TreeTableStyleDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes' })
                    }
                </TabView>
            </div>
        )
    }
}
