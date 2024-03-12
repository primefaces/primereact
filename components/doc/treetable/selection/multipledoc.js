import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function MultipleRowsSelectionDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
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
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys}
        onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function MultipleRowsSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable, TreeTableSelectionKeysType, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { NodeService } from './service/NodeService';

export default function MultipleRowsSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode>([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<TreeTableSelectionKeysType | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
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
                    with disabling the <i>metaKeySelection</i> property. Note that in touch enabled devices, TreeTable always ignores metaKey.
                </p>
                <p>In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection.</p>
            </DocSectionText>
            <DocSectionCode code={introCode} hideToggleCode import hideStackBlitz />
            <div className="card">
                <div className="flex justify-content-center align-items-center mb-4 gap-2">
                    <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                    <label htmlFor="input-metakey">MetaKey</label>
                </div>
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
