import { useState, useEffect } from 'react';
import { Tree } from '../../../lib/tree/Tree';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { NodeService } from '../../../../service/NodeService';

export function StrictFilterDoc(props) {
    const [nodes, setNodes] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} filter filterMode="strict"></Tree>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function StrictFilterDoc() {
    const [nodes, setNodes] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} filter filterMode="strict"></Tree>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function StrictFilterDoc() {
    const [nodes, setNodes] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} filter filterMode="strict"></Tree>
    )
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
                <p>Strict Filter</p>
            </DocSectionText>
            <div className="card">
                <Tree value={nodes} filter filterMode="strict"></Tree>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
