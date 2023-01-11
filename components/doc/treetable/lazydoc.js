import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LazyDoc(props) {
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
                key: first + i,
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
    };

    const onExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                let lazyNode = { ...event.node };

                lazyNode.children = [
                    {
                        data: {
                            name: lazyNode.data.name + ' - 0',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    },
                    {
                        data: {
                            name: lazyNode.data.name + ' - 1',
                            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
                            type: 'File'
                        }
                    }
                ];

                let _nodes = nodes.map((node) => {
                    if (node.key === event.node.key) {
                        node = lazyNode;
                    }

                    return node;
                });

                setLoading(false);
                setNodes(_nodes);
            }, 250);
        }
    };

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            setFirst(event.first);
            setRows(event.rows);
            setNodes(loadNodes(event.first, event.rows));
            setLoading(false);
        }, 500);
    };

    const code = {
        basic: `
<TreeTable value={nodes} lazy paginator totalRecords={totalRecords} first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function LazyDoc() {
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
                setLoading(false);
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
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';

export default function LazyDoc() {
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
                setLoading(false);
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
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking corresponding callbacks everytime paging or sorting. In addition, children of a node can be loaded on
                    demand at onNodeExpand event as well. Sample belows imitates lazy paging by using an in memory list.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} lazy paginator totalRecords={totalRecords} first={first} rows={rows} onPage={onPage} onExpand={onExpand} loading={loading}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
