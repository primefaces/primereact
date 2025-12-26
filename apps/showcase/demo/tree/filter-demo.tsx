'use client';

import { NodeService } from '@/services/node.service';
import type { TreeNode } from '@primereact/types/shared/tree';
import { Fluid } from 'primereact/fluid';
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { Tree } from 'primereact/tree';
import * as React from 'react';

export default function FilterDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([]);
    const [filterValue, setFilterValue] = React.useState<string>('');

    const filterTree = React.useCallback((nodes: TreeNode[], query: string): TreeNode[] => {
        if (!query) return nodes;

        const filtered: TreeNode[] = [];

        for (const node of nodes) {
            const nodeMatches = node.label?.toString().toLowerCase().includes(query.toLowerCase());
            const filteredChildren = node.children ? filterTree(node.children, query) : [];

            if (nodeMatches || filteredChildren.length > 0) {
                filtered.push({
                    ...node,
                    children: filteredChildren.length > 0 ? filteredChildren : node.children
                });
            }
        }

        return filtered;
    }, []);

    const filteredNodes = React.useMemo(() => filterTree(nodes, filterValue), [nodes, filterValue, filterTree]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree.Root value={filteredNodes} className="w-full md:w-120">
            <Tree.Header>
                <IconField.Root as={Fluid}>
                    <Tree.Filter
                        as={InputText}
                        value={filterValue}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                    />
                    <IconField.Icon>
                        <i className="pi pi-search" />
                    </IconField.Icon>
                </IconField.Root>
            </Tree.Header>
            <Tree.List />
            <Tree.Empty className="mt-2">No options found.</Tree.Empty>
        </Tree.Root>
    );
}
