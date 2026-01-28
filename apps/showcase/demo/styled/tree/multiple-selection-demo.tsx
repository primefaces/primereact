'use client';
import { NodeService } from '@/shared/services/node.service';
import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import type { TreeNode } from '@primereact/types/shared/tree';
import { Label } from '@primereact/ui/label';
import { Switch } from '@primereact/ui/switch';
import { Tree } from '@primereact/ui/tree';
import * as React from 'react';

export default function SingleSelectionDemo() {
    const [nodes, setNodes] = React.useState<TreeNode[]>([]);
    const [checked, setChecked] = React.useState(false);

    React.useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <>
            <div className="flex items-center mb-4 gap-2">
                <Switch.Root checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} inputId="input-metakey">
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                </Switch.Root>
                <Label.Root htmlFor="input-metakey">MetaKey</Label.Root>
            </div>
            <Tree.Root value={nodes} selectionMode="multiple" metaKeySelection={checked} className="w-full md:w-120">
                <Tree.List />
            </Tree.Root>
        </>
    );
}
