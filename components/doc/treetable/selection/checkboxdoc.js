import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function CheckboxDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const CheckboxDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const CheckboxDoc = () => {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable supports single, multiple and checkbox based selection modes.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} selectionMode="checkbox" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
