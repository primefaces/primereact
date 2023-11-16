import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function HorizontalScrollDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
    <Column field="size" header="Size" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
            </TreeTable>
        </div>
    );
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
                <p>Horizontal scrolling is enabled when the total width of columns exceeds table width.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                    <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                    <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                    <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                    <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                    <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
