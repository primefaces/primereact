import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CheckboxDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function CheckboxDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
        </div>    
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams } from 'primereact/treeselect';
import { NodeService } from './service/NodeService';

export default function CheckboxDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
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
                    Value passed to and from the TreeSelect via the value property should be a an object with key-value pairs where key is the node key and value is a boolean to indicate selection. On the other hand in "checkbox" mode, instead of a
                    boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node. Best way to clarify it is prepopulating a TreeSelect with an existing value.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
