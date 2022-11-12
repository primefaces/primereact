import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CheckDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>
        `,
        javascript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function CheckDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>
    );
}
        `,
        typescript: `
import { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams } from 'primereact/treeselect';
import { NodeService } from '../../../service/NodeService';

export default function CheckDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Value passed to and from the TreeSelect via the value property should be a an object with key-value pairs where key is the node key and value is a boolean to indicate selection. On the other hand in "checkbox" mode, instead of a
                boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node. Best way to clarify it is prepopulating a TreeSelect with an existing value.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect value={selectedNodeKeys} options={nodes} onChange={(e) => setSelectedNodeKeys(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
