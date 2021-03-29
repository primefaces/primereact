import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from '../../components/column/Column';
import { TabView } from '../../components/tabview/TabView';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';

export class TreeTableLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            first: 0,
            rows: 10,
            totalRecords: 0,
            loading: true
        };

        this.onPage = this.onPage.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                nodes: this.loadNodes(this.state.first, this.state.rows),
                totalRecords: 1000
            });
        }, 500);
    }

    loadNodes(first, rows) {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: (first + i),
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    }

    onExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                this.loading = false;
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        },
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let nodes = this.state.nodes.map(node => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                this.setState({
                    loading: false,
                    nodes: nodes
                });
            }, 250);
        }
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            this.setState({
                first: event.first,
                rows: event.rows,
                nodes: this.loadNodes(event.first, event.rows),
                loading: false
            });
        }, 500);
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="treeTable">
                        <h1>TreeTable <span>Lazy</span></h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging or sorting.
                            In addition, children of a node can be loaded on demand at onNodeExpand event as well. Sample belows imitates lazy paging by using an in memory list.</p>

                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <TreeTable value={this.state.nodes} lazy paginator totalRecords={this.state.totalRecords}
                            first={this.state.first} rows={this.state.rows} onPage={this.onPage} onExpand={this.onExpand} loading={this.state.loading}>
                            <Column field="name" header="Name" expander></Column>
                            <Column field="size" header="Size"></Column>
                            <Column field="type" header="Type"></Column>
                        </TreeTable>
                    </div>
                </div>

                <TreeTableLazyDemoDoc />
            </div>
        )
    }
}

class TreeTableLazyDemoDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export class TreeTableLazyDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
            first: 0,
            rows: 10,
            totalRecords: 0,
            loading: true
        };

        this.onPage = this.onPage.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false,
                nodes: this.loadNodes(this.state.first, this.state.rows),
                totalRecords: 1000
            });
        }, 500);
    }

    loadNodes(first, rows) {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: (first + i),
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    }

    onExpand(event) {
        if (!event.node.children) {
            this.setState({
                loading: true
            });

            setTimeout(() => {
                this.loading = false;
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        },
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let nodes = this.state.nodes.map(node => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                this.setState({
                    loading: false,
                    nodes: nodes
                });
            }, 250);
        }
    }

    onPage(event) {
        this.setState({
            loading: true
        });

        //imitate delay of a backend call
        setTimeout(() => {
            this.setState({
                first: event.first,
                rows: event.rows,
                nodes: this.loadNodes(event.first, event.rows),
                loading: false
            });
        }, 500);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <TreeTable value={this.state.nodes} lazy paginator totalRecords={this.state.totalRecords}
                        first={this.state.first} rows={this.state.rows} onPage={this.onPage} onExpand={this.onExpand} loading={this.state.loading}>
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

const TreeTableLazyDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNodes(loadNodes(first, rows));
            setTotalRecords(1000);
        }, 500);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadNodes = (first, rows) => {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: (first + i),
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    }

    const onExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                this.loading = false;
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        },
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let _nodes = nodes.map(node => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                setLoading(false);
                setNodes(_nodes);
            }, 250);
        }
    }

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setNodes(loadNodes(event.first, event.rows));
            setLoading(false);
        }, 500);
    }

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} lazy paginator totalRecords={totalRecords}
                    first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
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

const TreeTableLazyDemo = () => {
    const [nodes, setNodes] = useState([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNodes(loadNodes(first, rows));
            setTotalRecords(1000);
        }, 500);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadNodes = (first, rows) => {
        let nodes = [];

        for (let i = 0; i < rows; i++) {
            let node = {
                key: (first + i),
                data: {
                    name: 'Item ' + (first + i),
                    size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                    type: 'Type ' + (first + i)
                },
                leaf: false
            };

            nodes.push(node);
        }

        return nodes;
    }

    const onExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                this.loading = false;
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        },
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let _nodes = nodes.map(node => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                setLoading(false);
                setNodes(_nodes);
            }, 250);
        }
    }

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setNodes(loadNodes(event.first, event.rows));
            setLoading(false);
        }, 500);
    }

    return (
        <div>
            <div className="card">
                <TreeTable value={nodes} lazy paginator totalRecords={totalRecords}
                    first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
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
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    {
                        useLiveEditorTabs({ name: 'TreeTableLazyDemo', sources: this.sources, service: 'NodeService', data: 'treetablenodes' })
                    }
                </TabView>
            </div>
        )
    }
}
