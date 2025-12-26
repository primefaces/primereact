'use client';

import { Icon } from '@primereact/core/icon';
import type { TreeNode, TreeNodeInstance, useTreeExpandEvent } from '@primereact/types/shared/tree';
import { Tree } from 'primereact/tree';
import * as React from 'react';

export default function LazyDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([]);

    const createLazyNodes = () => {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false,
                loading: true
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false,
                loading: true
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false,
                loading: true
            }
        ];
    };

    const onNodeExpand = (event: useTreeExpandEvent) => {
        const expandedNode = event.node;

        if (!expandedNode.children) {
            expandedNode.loading = true;
            setNodes((prevNodes) => [...prevNodes]);

            setTimeout(() => {
                expandedNode.children = [
                    {
                        key: `${expandedNode.key}-0`,
                        label: `Lazy ${expandedNode.label} - 0`
                    },
                    {
                        key: `${expandedNode.key}-1`,
                        label: `Lazy ${expandedNode.label} - 1`
                    },
                    {
                        key: `${expandedNode.key}-2`,
                        label: `Lazy ${expandedNode.label} - 2`
                    }
                ];

                expandedNode.loading = false;

                setNodes((prevNodes) => [...prevNodes]);
            }, 1000);
        }
    };

    React.useEffect(() => {
        setNodes(createLazyNodes());

        setTimeout(() => {
            setNodes((prevNodes) =>
                prevNodes.map((node) => ({
                    ...node,
                    loading: false
                }))
            );
        }, 2000);
    }, []);

    return (
        <Tree.Root onExpand={onNodeExpand} className="w-full md:w-120">
            <Tree.List>
                {nodes.map((node, index) => (
                    <Tree.Node key={node.key} node={node} index={index}>
                        {(instance: TreeNodeInstance) => {
                            const { leaf, expanded } = instance;

                            return (
                                <>
                                    <Tree.Content>
                                        <Tree.Toggle>
                                            {node.loading ? (
                                                <Icon spin className="pi pi-spinner" />
                                            ) : expanded ? (
                                                <Icon className="pi pi-minus-circle" />
                                            ) : (
                                                <Icon className="pi pi-plus-circle" />
                                            )}
                                        </Tree.Toggle>

                                        {leaf ? (
                                            <Icon className="pi pi-file" />
                                        ) : expanded ? (
                                            <Icon className="pi pi-folder-open" />
                                        ) : (
                                            <Icon className="pi pi-folder" />
                                        )}

                                        <Tree.Label>{node.label}</Tree.Label>
                                    </Tree.Content>

                                    {node.children && expanded && <Tree.List />}
                                </>
                            );
                        }}
                    </Tree.Node>
                ))}
            </Tree.List>
        </Tree.Root>
    );
}
