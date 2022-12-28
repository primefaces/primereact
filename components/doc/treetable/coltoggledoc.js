import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { MultiSelect } from '../../lib/multiselect/MultiSelect';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColToggleDoc(props) {
    let columns = [
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];

    let colOptions = [];

    for (let col of columns) {
        colOptions.push({ label: col.header, value: col });
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
        setCols(event.value);
    };

    const header = (
        <div style={{ textAlign: 'left' }}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle} style={{ width: '250px' }} />
        </div>
    );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    const code = {
        basic: `
<TreeTable value={nodes} header={header}>
    <Column key="name" field="name" header="Name" expander />
    {_columns}
</TreeTable>
        `,
        javascript: `
import React, {useState, useEffect} from 'react';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column';
import { NodeService } from './service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

export default function ColToggleDoc() {
        let columns = [
    {field: 'size', header: 'Size' },
    {field: 'type', header: 'Type' }
    ];

    let colOptions = [];
    for (let col of columns) {
        colOptions.push({ label: col.header, value: col });
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);

    

    useEffect(() => {
                NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
                setCols(event.value);
    }

    const header = (
        <div style={{ textAlign: 'left' }}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                style={{ width: '250px' }} />
        </div>
    );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
    <div>
        <div className="card">
            <TreeTable value={nodes} header={header}>
                <Column key="name" field="name" header="Name" expander />
                {_columns}
            </TreeTable>
        </div>
    </div>
    );
}
        `,
        typescript: `
import React, {useState, useEffect} from 'react';
import {TreeTable} from 'primereact/treetable';
import {Column} from 'primereact/column';
import { NodeService } from './service/NodeService';
import { MultiSelect } from 'primereact/multiselect';

export default function ColToggleDoc() {
        let columns = [
    {field: 'size', header: 'Size' },
    {field: 'type', header: 'Type' }
    ];

    let colOptions = [];
    for (let col of columns) {
        colOptions.push({ label: col.header, value: col });
    }

    const [nodes, setNodes] = useState([]);
    const [cols, setCols] = useState(columns);

    

    useEffect(() => {
                NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onColumnToggle = (event) => {
                setCols(event.value);
    }

    const header = (
        <div style={{ textAlign: 'left' }}>
            <MultiSelect value={cols} options={colOptions} onChange={onColumnToggle}
                style={{ width: '250px' }} />
        </div>
    );

    const _columns = cols.map((col, i) => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });

    return (
    <div>
        <div className="card">
            <TreeTable value={nodes} header={header}>
                <Column key="name" field="name" header="Name" expander />
                {_columns}
            </TreeTable>
        </div>
    </div>
    );
}
        `,
        data: `
/* NodeService */
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
                <p>MultiSelect component can be used to implement column toggler functionality.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} header={header}>
                    <Column key="name" field="name" header="Name" expander />
                    {_columns}
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']}/>
        </>
    );
}
