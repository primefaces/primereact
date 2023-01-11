import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} className="md:w-20rem w-full" selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function MultipleDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} className="md:w-20rem w-full" selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
        </div>    
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function MultipleDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} className="md:w-20rem w-full" selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
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
                <p>
                    TreeSelect supports "single", "multiple" and "checkbox" selection modes. Define <i>selectionMode</i>, <i>value</i> and <i>onChange</i> properties to control the selection. In single mode, selectionKeys should be a single value
                    whereas in multiple or checkbox modes an object is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that
                    in touch enabled devices, Tree does not require metaKey.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} className="md:w-20rem w-full" selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
