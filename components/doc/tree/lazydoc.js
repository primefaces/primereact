import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tree } from '@/components/lib/tree/Tree';
import { useEffect, useState } from 'react';

export function LazyDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    };

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = { ...event.node };

                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];

                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 200);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';

export default function LazyDemo() {
    const [nodes, setNodes] = useState([]);
    const [loading, setLoading] = useState(true);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = { ...event.node };

                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 200);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';

export default function LazyDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    const loadOnExpand = (event) => {
        if (!event.node.children) {
            setLoading(true);

            setTimeout(() => {
                let node = { ...event.node };

                node.children = [];

                for (let i = 0; i < 3; i++) {
                    node.children.push({
                        key: node.key + '-' + i,
                        label: 'Lazy ' + node.label + '-' + i
                    });
                }

                let value = [...nodes];
                
                value[parseInt(event.node.key, 10)] = node;
                setNodes(value);
                setLoading(false);
            }, 200);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setNodes(createLazyNodes());
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using <i>onExpand</i> event.
                </p>
            </DocSectionText>

            <div className="card flex justify-content-center">
                <Tree value={nodes} onExpand={loadOnExpand} loading={loading} className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
