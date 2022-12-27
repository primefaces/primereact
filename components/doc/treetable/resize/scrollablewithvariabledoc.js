import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ScrollableWithVariableWidthDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px" showGridlines>
    <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
    <Column field="size" header="Size" style={{ width: '30%' }}></Column>
    <Column field="type" header="Type" style={{ width: '20%' }}></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const ScrollableWithVariableWidthDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px" showGridlines>
                <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                <Column field="type" header="Type" style={{ width: '20%' }}></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const ScrollableWithVariableWidthDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px" showGridlines>
                <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                <Column field="type" header="Type" style={{ width: '20%' }}></Column>
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
                <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} resizableColumns scrollable scrollHeight="200px" showGridlines>
                    <Column field="name" header="Name" expander style={{ width: '50%' }}></Column>
                    <Column field="size" header="Size" style={{ width: '30%' }}></Column>
                    <Column field="type" header="Type" style={{ width: '20%' }}></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
