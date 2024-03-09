import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { Tree } from '@/components/lib/tree/Tree';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function MultipleSelectionDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(false);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const introCode = {
        basic: `
{
    '0-0': true,
    '0-1-0': true
}
        `
    };

    const code = {
        basic: `
<div className="flex align-items-center mb-4 gap-2">
    <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
    <label htmlFor="input-metakey">MetaKey</label>
</div>
<Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} 
    onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { InputSwitch } from 'primereact/inputswitch';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(false);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <div className="flex align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { Tree, TreeMultipleSelectionKeys } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function MultipleSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<TreeMultipleSelectionKeys | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(false);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <div className="flex align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        data: `
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    More than one node is selectable by setting <i>selectionMode</i> to <i>multiple</i>. By default in multiple selection mode, metaKey press (e.g. <i>⌘</i>) is necessary to add to existing selections however this can be configured
                    with disabling the <i>metaKeySelection</i> property. Note that in touch enabled devices, Tree always ignores metaKey.
                </p>
                <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
            </DocSectionText>
            <DocSectionCode code={introCode} hideToggleCode import hideStackBlitz />
            <div className="card flex flex-column align-items-center justify-content-center">
                <div className="flex align-items-center mb-4 gap-2">
                    <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                    <label htmlFor="input-metakey">MetaKey</label>
                </div>
                <Tree value={nodes} metaKeySelection={metaKey} selectionMode="multiple" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
