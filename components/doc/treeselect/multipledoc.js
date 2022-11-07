import React, { useState, useEffect } from 'react';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { NodeService } from '../../../service/NodeService';

export function MultipleDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
        `,
        javascript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function MultipleDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
    );
}
        `,
        typescript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function MultipleDoc() {
    const [nodes, setNodes] = useState<any>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                TreeSelect supports "single", "multiple" and "checkbox" selection modes. Define <i>selectionMode</i>, <i>value</i> and <i>onChange</i> properties to control the selection. In single mode, selectionKeys should be a single value whereas
                in multiple or checkbox modes an object is required. By default in multiple selection mode, metaKey is necessary to add to existing selections however this can be configured with <i>metaKeySelection</i> property. Note that in touch
                enabled devices, Tree does not require metaKey.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
