import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function MultipleDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState([]);
    const nodeservice = new NodeService();

    useEffect(() => {
        nodeservice.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)} metaKeySelection={false}>
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

const MultipleDoc = () => {
const [nodes, setNodes] = useState([]);
const [selectedNodeKey, setSelectedNodeKey] = useState([]);
const nodeservice = new NodeService();

useEffect(() => {
    nodeservice.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const onSelect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
}

const onUnselect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
}

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)} metaKeySelection={false}>
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

const MultipleDoc = () => {
const [nodes, setNodes] = useState([]);
const [selectedNodeKey, setSelectedNodeKey] = useState([]);
const nodeservice = new NodeService();

useEffect(() => {
    nodeservice.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const onSelect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
}

const onUnselect = (event) => {
    toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.data.name });
}

    return (
        <div className="card">
            <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)} metaKeySelection={false}>
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
                <TreeTable value={nodes} selectionMode="multiple" selectionKeys={selectedNodeKeys} onSelectionChange={(e) => setSelectedNodeKeys(e.value)} metaKeySelection={false}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
