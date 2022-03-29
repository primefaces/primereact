import React, { useState, useEffect, memo } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTablePageDemo = () => {

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Page</title>
                <meta name="description" content="Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable <span>Page</span></h1>
                    <p>Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.</p>
                </div>

                <DocActions github="treetable/page.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <TreeTable value={nodes} paginator rows={10}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTablePageDemoDoc />
        </div>
    )
}

export default TreeTablePageDemo;

const TreeTablePageDemoDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export class TreeTablePageDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
    }

    componentDidMount() {
        let files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        this.setState({
            nodes: files
        });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <TreeTable value={this.state.nodes} paginator rows={10}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
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

const TreeTablePageDemo = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} paginator rows={10}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
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

const TreeTablePageDemo = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} paginator rows={10}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
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
        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/paginator/paginator.min.js"></script>
        <script src="https://unpkg.com/primereact/column/column.min.js"></script>
        <script src="https://unpkg.com/primereact/treetable/treetable.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { Column } = primereact.column;
const { TreeTable } = primereact.treetable;

const TreeTablePageDemo = () => {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        let files = [];
        for (let i = 0; i < 50; i++) {
            let node = {
                key: i,
                data: {
                    name: 'Item ' + i,
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + i
                },
                children: [
                    {
                        key: i + ' - 0',
                        data: {
                            name: 'Item ' + i + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'Type ' + i
                        }
                    }
                ]
            };

            files.push(node);
        }

        setNodes(files);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} paginator rows={10}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
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
                    useLiveEditorTabs({ name: 'TreeTablePageDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})
