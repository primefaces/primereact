import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FilterDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} filter className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
        `,
        javascript: `
import React, { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function FilterDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKey(e.value)} filter className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
        </div>   
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function FilterDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKey(e.value)} filter className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
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
                    Filtering is enabled by setting the <i>filter</i> property to true, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search
                    define <i>filterBy</i> property. In addition <i>filterMode</i> specifies the filtering strategy. In lenient mode when the query matches a node, children of the node are not searched further as all descendants of the node are
                    included. On the other hand, in strict mode when the query matches a node, filtering continues on all descendants.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} filter className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
