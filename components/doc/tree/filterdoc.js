import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tree } from '@/components/lib/tree/Tree';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function FilterDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
<Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FilterDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex flex-wrap justify-content-center gap-5">
            <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
            <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
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
                    Filtering is enabled by adding the <i>filter</i> property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define{' '}
                    <i>filterBy</i> property. In addition <i>filterMode</i> specifies the filtering strategy. In <i>lenient</i> mode when the query matches a node, children of the node are not searched further as all descendants of the node are
                    included. On the other hand, in <i>strict</i> mode when the query matches a node, filtering continues on all descendants.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-5">
                <Tree value={nodes} filter filterMode="lenient" filterPlaceholder="Lenient Filter" className="w-full md:w-30rem" />
                <Tree value={nodes} filter filterMode="strict" filterPlaceholder="Strict Filter" className="w-full md:w-30rem" />
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
