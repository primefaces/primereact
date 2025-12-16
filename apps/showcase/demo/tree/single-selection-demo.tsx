'use client';

import { NodeService } from '@/services/node.service';
import type { TreeNode } from '@primereact/types/shared/tree';
import { Tree } from 'primereact/tree';
import * as React from 'react';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([]);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <Tree value={nodes} selectionMode="single" className="w-full md:w-120">
            <Tree.List />
        </Tree>
    );
}
