import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function ControlledDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    const headerTemplate = (
        <div className="p-3 pb-0">
            <Button type="button" icon="pi pi-plus" onClick={expandAll} className="w-2rem h-2rem mr-2 p-button-outlined" />
            <Button type="button" icon="pi pi-minus" onClick={collapseAll} className="w-2rem h-2rem p-button-outlined" />
        </div>
    );

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
    className="md:w-20rem w-full" placeholder="Select Item"
    expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

export default function ControlledDemo() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    const headerTemplate = (
        <div className="p-3 pb-0">
            <Button type="button" icon="pi pi-plus" onClick={expandAll} className="w-2rem h-2rem mr-2 p-button-outlined" />
            <Button type="button" icon="pi pi-minus" onClick={collapseAll} className="w-2rem h-2rem p-button-outlined" />
        </div>
    );

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} onChange={(e) => setSelectedNodeKey(e.value)} options={nodes} 
                className="md:w-20rem w-full" placeholder="Select Item"
                expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeEvent, TreeSelectExpandedEvent } from 'primereact/treeselect';
import { TreeNode } from 'primereact/treenode';
import { Button } from 'primereact/button';
import { NodeService } from './service/NodeService';

interface NodeKey {
    [key: string]: boolean;
 }

export default function ControlledDemo() {
    const [nodes, setNodes] = useState<TreeNode[] | null>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>(null);
    const [expandedKeys, setExpandedKeys] = useState<NodeKey>({});

    const expandAll = () => {
        let _expandedKeys = {};

        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    };

    const collapseAll = () => {
        setExpandedKeys({});
    };

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    };

    const headerTemplate = (
        <div className="p-3 pb-0">
            <Button type="button" icon="pi pi-plus" onClick={expandAll} className="w-2rem h-2rem mr-2 p-button-outlined" />
            <Button type="button" icon="pi pi-minus" onClick={collapseAll} className="w-2rem h-2rem p-button-outlined" />
        </div>
    );
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeEvent) => setSelectedNodeKey(e.value)} 
                className="md:w-20rem w-full" placeholder="Select Item" 
                expandedKeys={expandedKeys} onToggle={(e: TreeSelectExpandedEvent) => setExpandedKeys(e.value)} panelHeaderTemplate={headerTemplate}></TreeSelect>
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
                    Expanded state of nodes is managed programmatically with <i>expandedKeys</i> and <i>onToggle</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect
                    value={selectedNodeKey}
                    onChange={(e) => setSelectedNodeKey(e.value)}
                    options={nodes}
                    className="md:w-20rem w-full"
                    placeholder="Select Item"
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    panelHeaderTemplate={headerTemplate}
                ></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
