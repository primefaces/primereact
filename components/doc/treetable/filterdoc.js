import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { InputText } from '@/components/lib/inputtext/InputText';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function FilterDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    const code = {
        basic: `
<SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />

<TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [filterOptions] = useState([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
            </div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { SelectButton } from 'primereact/selectbutton';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

interface FilterModeOption {
    label: string;
    value: string;
}

export default function FilterDemo() {
    const [nodes, setNodes] = useState<TreeNode>([]);
    const [globalFilter, setGlobalFilter] = useState<string>('');
    const [filterMode, setFilterMode] = useState('lenient');
    const [filterOptions] = useState<FilterModeOption[]>([
        { label: 'Lenient', value: 'lenient' },
        { label: 'Strict', value: 'strict' }
    ]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    const getHeader = () => {
        return (
            <div className="flex justify-content-end">
                <div className="p-input-icon-left">
                    <i className="pi pi-search"></i>
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </div>
            </div>
        );
    };

    let header = getHeader();

    return (
        <div className="card">
            <div className="flex justify-content-center mb-4">
                <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
            </div>
            <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
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
                    Filtering is enabled by adding the <i>filter</i> property to a Column. The <i>filterMode</i> specifies the filtering strategy, in <i>lenient</i> mode when the query matches a node, children of the node are not searched further as
                    all descendants of the node are included. On the other hand, in <i>strict</i> mode when the query matches a node, filtering continues on all descendants. A general filled called <i>globalFilter</i> is also provided to search all
                    columns that support filtering.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex justify-content-center mb-4">
                    <SelectButton value={filterMode} onChange={(e) => setFilterMode(e.value)} options={filterOptions} />
                </div>
                <TreeTable value={nodes} globalFilter={globalFilter} header={header} filterMode={filterMode} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
