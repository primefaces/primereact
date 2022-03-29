import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { NodeService } from '../../service/NodeService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableSortDemo = () => {

    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Sort</title>
                <meta name="description" content="TreeTable supports both single column and multiple column sorting." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Sort</span></h1>
                    <p>TreeTable supports both single column and multiple column sorting.</p>
                </div>

                <DocActions github="treetable/sort.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Single Column Sorting</h5>
                    <TreeTable value={nodes1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple Column Sorting</h5>
                    <TreeTable value={nodes2} sortMode="multiple">
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableSortDemoDoc />
        </div>
    );
}

export default TreeTableSortDemo;

const TreeTableSortDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
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
        this.nodeservice.getTreeTableNodes().then(data => {
            this.setState({ nodes1: data });

            let nodes2 = data;
            nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            this.setState({
                nodes2
            });
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Single Column Sorting</h5>
                    <TreeTable value={this.state.nodes1}>
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Multiple Column Sorting</h5>
                    <TreeTable value={this.state.nodes2} sortMode="multiple">
                        <Column field="name" header="Name" expander sortable></Column>
                        <Column field="size" header="Size" sortable></Column>
                        <Column field="type" header="Type" sortable></Column>
                    </TreeTable>
                </div>
            </div>
        );
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

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Single Column Sorting</h5>
                <TreeTable value={nodes1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable value={nodes2} sortMode="multiple">
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
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

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Single Column Sorting</h5>
                <TreeTable value={nodes1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable value={nodes2} sortMode="multiple">
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
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

const TreeTableSortDemo = () => {
    const [nodes1, setNodes1] = useState([]);
    const [nodes2, setNodes2] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => {
            setNodes1(data);

            let _nodes2 = data;
            _nodes2.push({
                data: {
                    name: 'Documents',
                    size: '100kb',
                    type: 'Link'
                }
            });

            setNodes2(_nodes2);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <h5>Single Column Sorting</h5>
                <TreeTable value={nodes1}>
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
                </TreeTable>
            </div>

            <div className="card">
                <h5>Multiple Column Sorting</h5>
                <TreeTable value={nodes2} sortMode="multiple">
                    <Column field="name" header="Name" expander sortable></Column>
                    <Column field="size" header="Size" sortable></Column>
                    <Column field="type" header="Type" sortable></Column>
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
                    useLiveEditorTabs({ name: 'TreeTableSortDemo', sources: sources, service: 'NodeService', data: 'treetablenodes' })
                }
            </TabView>
        </div>
    )

})
