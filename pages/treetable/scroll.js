import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableScrollDemo = () => {

    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Scroll</title>
                <meta name="description" content="Scrolling data is available horizontally, vertically or both with optional support for frozen columns." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Scroll</span></h1>
                    <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>
                </div>

                <DocActions github="treetable/scroll.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Vertical</h5>
                    <TreeTable value={nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal and Vertical</h5>
                    <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableScrollDemoDoc />
        </div>
    )
}

export default TreeTableScrollDemo;

const TreeTableScrollDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

export class TreeTableScrollDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
        this.nodeservice = new NodeService();
    }

    componentDidMount() {
        this.nodeservice.getTreeTableNodes().then(data => this.setState({ nodes: data }));
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable scrollHeight="200px">
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }}>
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Horizontal and Vertical</h5>
                    <TreeTable value={this.state.nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                        <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                        <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Frozen Columns</h5>
                    <TreeTable value={this.state.nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                        <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                        <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                        <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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

const TreeTableScrollDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Vertical</h5>
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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

const TreeTableScrollDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Vertical</h5>
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;

const TreeTableScrollDemo = () => {
    const [nodes, setNodes] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Vertical</h5>
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }}>
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Horizontal and Vertical</h5>
                <TreeTable value={nodes} scrollable style={{ width: '600px' }} scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '350px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '350px' }}></Column>
                    <Column field="type" header="Type" style={{ width: '350px' }}></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Frozen Columns</h5>
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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
                    useLiveEditorTabs({ name: 'TreeTableScrollDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )
})
