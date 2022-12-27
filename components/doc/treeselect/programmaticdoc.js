import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { Button } from '../../lib/button/Button';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ProgrammaticDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
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

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect
value={selectedNodeKeys}
options={nodes}
expandedKeys={expandedKeys}
onToggle={(e) => setExpandedKeys(e.value)}
onChange={(e) => setSelectedNodeKeys(e.value)}
display="chip"
selectionMode="checkbox"
className="md:w-20rem w-full"
placeholder="Select Items"
></TreeSelect>
<div className="mb-4 mt-2">
    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
</div>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { Button } from '../../lib/button/Button';
import { NodeService } from '../../../service/NodeService';

export default function ProgrammaticDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex flex-column align-items-center justify-content-center">
            <TreeSelect
                value={selectedNodeKeys}
                options={nodes}
                expandedKeys={expandedKeys}
                onToggle={(e : TreeSelectExpandedParams) => setExpandedKeys(e.value)}
                onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)}
                display="chip"
                selectionMode="checkbox"
                className="md:w-20rem w-full"
                placeholder="Select Items"
            ></TreeSelect>
            <div className="mb-4 mt-2">
                <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
                <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams, TreeSelectExpandedParams } from 'primereact/treeselect';
import { Button } from '../../lib/button/Button';
import { NodeService } from '../../../service/NodeService';

export default function ProgrammaticDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    const [expandedKeys, setExpandedKeys] = useState<any>({});
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <div className="card flex flex-column align-items-center justify-content-center">
        <TreeSelect
            value={selectedNodeKeys}
            options={nodes}
            expandedKeys={expandedKeys}
            onToggle={(e : TreeSelectExpandedParams) => setExpandedKeys(e.value)}
            onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)}
            display="chip"
            selectionMode="checkbox"
            className="md:w-20rem w-full"
            placeholder="Select Items"
        ></TreeSelect>
        <div className="mb-4 mt-2">
            <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
            <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
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
                <p>
                    Label of an option is used as the display text of an item by default, for custom content support define a <i>valueTemplate</i> that gets the selected nodes as a parameter. For custom filter support define a <i>filterTemplate</i>
                    function that gets the option instance as a parameter and returns the content for the filter element. In addition <i>header</i>, <i>footer</i> and <i>emptyMessage</i> templates are provided for further customization.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center justify-content-center">
                <TreeSelect
                    value={selectedNodeKeys}
                    options={nodes}
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    onChange={(e) => setSelectedNodeKeys(e.value)}
                    display="chip"
                    selectionMode="checkbox"
                    className="md:w-20rem w-full"
                    placeholder="Select Items"
                ></TreeSelect>
                <div className="mb-4 mt-2">
                    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
                    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
