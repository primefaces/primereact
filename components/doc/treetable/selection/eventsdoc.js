import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { Toast } from '@/components/lib/toast/Toast';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useRef, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function RowSelectionEventsDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey}
        onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={false}
        onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useRef, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} metaKeySelection={false} onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef, useEffect } from 'react';
import { TreeTable, TreeTableSelectionEvent } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { Toast } from 'primereact/toast';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function SingleRowSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const toast = useRef(null);

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <TreeTable value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e: TreeTableSelectionEvent) => setSelectedNodeKey(e.value)} metaKeySelection={false} onSelect={onSelect} onUnselect={onUnselect} tableStyle={{ minWidth: '50rem' }}>
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
                    TreeTable provides <i>onSelect</i> and <i>onUnselect</i> events to listen selection events.
                </p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />
                <TreeTable
                    value={nodes}
                    selectionMode="single"
                    selectionKeys={selectedNodeKey}
                    onSelectionChange={(e) => setSelectedNodeKey(e.value)}
                    metaKeySelection={false}
                    onSelect={onSelect}
                    onUnselect={onUnselect}
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
