import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function DynamicColumnsDoc(props) {
    const [nodes, setNodes] = useState([]);
    const columns = [
        { field: 'name', header: 'Name', expander: true },
        { field: 'size', header: 'Type' },
        { field: 'type', header: 'Size' }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
    {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
    ))}
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function DynamicColumnsDemo() {
    const [nodes, setNodes] = useState([]);
    const columns = [
        { field: 'name', header: 'Name', expander: true },
        { field: 'size', header: 'Type' },
        { field: 'type', header: 'Size' }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
                ))}
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

interface ColumnMeta {
    field: string;
    header: string;
}

export default function DynamicColumnsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const columns: Column[] = [
        { field: 'name', header: 'Name', expander: true },
        { field: 'size', header: 'Type' },
        { field: 'type', header: 'Size' }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
                ))}
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
                <p>Columns can be created programmatically.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} expander={col.expander} />
                    ))}
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
