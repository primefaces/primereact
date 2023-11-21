import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function BasicDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function BasicDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
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
                    TreeSelect is used as a controlled component with <i>value</i> and <i>onChange</i> properties along with an <i>options</i> collection. Internally <Link href="tree">Tree</Link> component is used so the options model is based on
                    TreeNode API.
                </p>
                <p>
                    In single selection mode, value binding should be the <i>key</i> value of a node.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} className="md:w-20rem w-full" placeholder="Select Item"></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
