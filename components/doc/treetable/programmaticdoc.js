import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { Button } from '../../lib/button/Button';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ProgrammaticDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };

        if (_expandedKeys['0']) delete _expandedKeys['0'];
        else _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    };

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Button onClick={toggleApplications} label="Toggle Applications" />
<TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} style={{ marginTop: '.5em' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ProgrammaticDoc() {
const [nodes, setNodes] = useState([]);
const [expandedKeys, setExpandedKeys] = useState({});


const toggleApplications = () => {
    let _expandedKeys = { ...expandedKeys };
    if (_expandedKeys['0']) delete _expandedKeys['0'];
    else _expandedKeys['0'] = true;
    setExpandedKeys(_expandedKeys);
};

useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} style={{ marginTop: '.5em' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ProgrammaticDoc() {
const [nodes, setNodes] = useState([]);
const [expandedKeys, setExpandedKeys] = useState({});

const toggleApplications = () => {
    let _expandedKeys = { ...expandedKeys };
    if (_expandedKeys['0']) delete _expandedKeys['0'];
    else _expandedKeys['0'] = true;
    setExpandedKeys(_expandedKeys);
};

useEffect(() => {
    NodeService.getTreeTableNodes().then((data) => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <Button onClick={toggleApplications} label="Toggle Applications" />
            <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} style={{ marginTop: '.5em' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
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
                <p>TreeTable is used to display hierarchical data in tabular format.</p>
            </DocSectionText>
            <div className="card">
                <Button onClick={toggleApplications} label="Toggle Applications" />
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} style={{ marginTop: '.5em' }}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
