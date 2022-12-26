import React, { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';
import { TreeSelect } from '../../lib/treeselect/TreeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FilterDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
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
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
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
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card flex justify-content-center">
            <TreeSelect value={selectedNodeKey} options={nodes} onChange={(e : TreeSelectChangeParams) => setSelectedNodeKey(e.value)} filter className="md:w-20rem w-full" placeholder="Select Items"></TreeSelect>
        </div>
    );
}
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
