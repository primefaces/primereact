import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tree } from '@/components/lib/tree/Tree';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function CheckboxSelectionDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const introCode = {
        basic: `
{
    '0-0': {
        partialChecked: false,
        checked: true
    }
}
        `
    };

    const code = {
        basic: `
<Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} 
    onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree, TreeCheckboxSelectionKeys } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function CheckboxSelectionDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedKeys, setSelectedKeys] = useState<TreeCheckboxSelectionKeys | null>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
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
                    Selection of multiple nodes via checkboxes is enabled by configuring <i>selectionMode</i> as <i>checkbox</i>.
                </p>
                <p>
                    In checkbox selection mode, value binding should be a key-value pair where key is the node key and value is an object that has <i>checked</i> and <i>partialChecked</i> properties to represent the checked state of a node.
                </p>
            </DocSectionText>
            <DocSectionCode code={introCode} hideToggleCode import hideStackBlitz />
            <div className="card flex justify-content-center">
                <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys} onSelectionChange={(e) => setSelectedKeys(e.value)} className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
