import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function ColumnToggleDoc(props) {
    let columns = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    const [nodes, setNodes] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} onChange={onColumnToggle} optionLabel="header" className="w-full sm:w-16rem" display="chip" />;

    const code = {
        basic: `
<TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
    <Column key="name" field="name" header="Name" expander />
    {visibleColumns.map((col) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</TreeTable>
        `,
        javascript: `
import React, {useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

export default function ColumnToggleDemo() {
    let columns = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    const [nodes, setNodes] = useState([]);
    const [visibleColumns, setVisibleColumns] = useState(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onColumnToggle = (event) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} onChange={onColumnToggle} optionLabel="header" className="w-full sm:w-16rem" display="chip" />;

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column key="name" field="name" header="Name" expander />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, {useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

interface ColumnMeta {
    field: string;
    header: string;
}

export default function ColumnToggleDemo() {
    let columns: ColumnMeta[] = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [visibleColumns, setVisibleColumns] = useState<ColumnMeta>(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const onColumnToggle = (event: MultiSelectChangeEvent) => {
        let selectedColumns = event.value;
        let orderedSelectedColumns = columns.filter((col) => selectedColumns.some((sCol) => sCol.field === col.field));

        setVisibleColumns(orderedSelectedColumns);
    };

    const header = <MultiSelect value={visibleColumns} options={columns} onChange={onColumnToggle} optionLabel="header" className="w-full sm:w-16rem" display="chip" />;

    return (
        <div className="card">
            <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
                <Column key="name" field="name" header="Name" expander />
                {visibleColumns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
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
                <p>Column visibility based on a condition can be implemented with dynamic columns, in this sample a MultiSelect is used to manage the visible columns.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} header={header} tableStyle={{ minWidth: '50rem' }}>
                    <Column key="name" field="name" header="Name" expander />
                    {visibleColumns.map((col) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
