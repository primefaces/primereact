import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function PTDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect
    value={selectedNodeKey}
    onChange={(e) => setSelectedNodeKey(e.value)}
    options={nodes}
    placeholder="Select Item"
    pt={{
        root: { className: 'w-full md:w-30rem' },
        tree: {
            content: ({ context }) => ({
                className: context.expanded ? 'bg-blue-100' : 'undefined'
            })
        }
    }}
></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function PTDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect
            value={selectedNodeKey}
            onChange={(e) => setSelectedNodeKey(e.value)}
            options={nodes}
            placeholder="Select Item"
            pt={{
                root: { className: 'w-full md:w-30rem' },
                tree: {
                    content: ({ context }) => ({
                        className: context.expanded ? 'bg-blue-100' : 'undefined'
                    })
                }
            }}
        ></TreeSelect>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function PTDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect
                value={selectedNodeKey}
                onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)}
                options={nodes}
                placeholder="Select Item"
                pt={{
                    root: { className: 'w-full md:w-30rem' },
                    tree: {
                        content: ({ context }) => ({
                            className: context.expanded ? 'bg-blue-100' : 'undefined'
                        })
                    }
                }}
            ></TreeSelect>
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
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect
                    value={selectedNodeKey}
                    onChange={(e) => setSelectedNodeKey(e.value)}
                    options={nodes}
                    placeholder="Select Item"
                    pt={{
                        root: { className: 'w-full md:w-30rem' },
                        tree: {
                            content: ({ context }) => ({
                                className: context.expanded ? 'bg-blue-100' : 'undefined'
                            })
                        }
                    }}
                ></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
