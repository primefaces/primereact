import React, { Component } from 'react';
import { TreeTable } from '../../components/treetable/TreeTable';
import { Column } from "../../components/column/Column";
import { TreeTableSubmenu } from '../../showcase/treetable/TreeTableSubmenu';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

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
        }, 1000);
    }

    loadNodes(first, rows) {
        let nodes = [];

        for(let i = 0; i < rows; i++) {
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
                let lazyNode = {...event.node};

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
        }, 1000);
    }

    render() {
        return (
            <div>
                <TreeTableSubmenu />

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>TreeTable - Lazy</h1>
                        <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging or sorting.
                            In addition, children of a node can be loaded on demand at onNodeExpand event as well. Sample belows imitates lazy paging by using an in memory list.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("treeTable")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <TreeTable value={this.state.nodes} lazy={true} paginator={true} totalRecords={this.state.totalRecords}
                        first={this.state.first} rows={this.state.rows} onPage={this.onPage} onExpand={this.onExpand} loading={this.state.loading}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <TreeTableLazyDemoDoc />
            </div>
        )
    }
}

class TreeTableLazyDemoDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
                content: `
import React, { Component } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from "primereact/column";

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
        }, 1000);
    }

    loadNodes(first, rows) {
        let nodes = [];

        for(let i = 0; i < rows; i++) {
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
                let lazyNode = {...event.node};

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
        }, 1000);
    }

    render() {
        return (
            <div>
                <TreeTable value={this.state.nodes} lazy={true} paginator={true} totalRecords={this.state.totalRecords}
                    first={this.state.first} rows={this.state.rows} onPage={this.onPage} onExpand={this.onExpand} loading={this.state.loading}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
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
import { Column } from "primereact/column";

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
        }, 1000);
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
                let lazyNode = {...event.node};

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
            setLoading(false);
            setNodes(loadNodes(event.first, event.rows));
        }, 1000);
    }

    return (
        <div>
            <TreeTable value={nodes} lazy={true} paginator={true} totalRecords={totalRecords}
                first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
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
import { Column } from "primereact/column";

const TreeTableLazyDemo = () => {
    const [nodes, setNodes] = useState<any>([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setNodes(loadNodes(first, rows));
            setTotalRecords(1000);
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const loadNodes = (first: number, rows: number) => {
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

    const onExpand = (event: any) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let lazyNode = {...event.node};

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

                let _nodes = nodes.map((node: any) => {
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

    const onPage = (event: { first: number, rows: number }) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setLoading(false);
            setNodes(loadNodes(event.first, event.rows));
        }, 1000);
    }

    return (
        <div>
            <TreeTable value={nodes} lazy={true} paginator={true} totalRecords={totalRecords}
                first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
                `
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/treetable" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TreeTableLazyDemo" sources={this.sources} service="NodeService" data="treetablenodes" activeButtonIndex={this.state.activeIndex} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName}>
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
