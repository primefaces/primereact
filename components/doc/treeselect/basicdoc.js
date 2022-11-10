import React, { useState, useEffect } from 'react';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { NodeService } from '../../../service/NodeService';

export function BasicDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>

        `,
        javascript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function BasicDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>
    );
}
        `,
        typescript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function BasicDoc() {
    const [nodes, setNodes] = useState<any>(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState<any>(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                TreeSelect component requires an array of TreeNode objects as its <i>options</i> and keys of the nodes as its value.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e) => setSelectedNodeKey(e.value)} placeholder="Select Item"></TreeSelect>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
