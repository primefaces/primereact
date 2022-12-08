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
    const nodeService = new NodeService();

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
        nodeService.getTreeNodes().then((data) => setNodes(data));
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
placeholder="Select Items"
></TreeSelect>
<div className="mb-4 mt-2">
    <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
    <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
</div>
        `,
        javascript: `
import { useState, useEffect } from "react";
import { TreeSelect } from 'primereact/treeselect';
import { Button } from '../../lib/button/Button';
import { NodeService } from '../../../service/NodeService';

export default function ProgrammaticDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect
        value={selectedNodeKeys}
        options={nodes}
        expandedKeys={expandedKeys}
        onToggle={(e) => setExpandedKeys(e.value)}
        onChange={(e) => setSelectedNodeKeys(e.value)}
        display="chip"
        selectionMode="checkbox"
        placeholder="Select Items"
    ></TreeSelect>
    <div className="mb-4 mt-2">
        <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
        <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
    </div>
    );
}
        `,
        typescript: `
import { useState, useEffect } from "react";
import { TreeSelect, TreeSelectChangeParams, TreeSelectExpandedParams } from 'primereact/treeselect';
import { Button } from '../../lib/button/Button';
import { NodeService } from '../../../service/NodeService';

export default function ProgrammaticDoc() {
    const [nodes, setNodes] = useState<any[]>(null);
    const [selectedNodeKeys, setSelectedNodeKeys] = useState<any>(null);
    const [expandedKeys, setExpandedKeys] = useState<any>({});
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <TreeSelect
        value={selectedNodeKeys}
        options={nodes}
        expandedKeys={expandedKeys}
        onToggle={(e : TreeSelectExpandedParams) => setExpandedKeys(e.value)}
        onChange={(e : TreeSelectChangeParams) => setSelectedNodeKeys(e.value)}
        display="chip"
        selectionMode="checkbox"
        placeholder="Select Items"
    ></TreeSelect>
    <div className="mb-4 mt-2">
        <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
        <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
    </div>
    );
}
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
