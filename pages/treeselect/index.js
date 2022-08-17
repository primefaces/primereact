import React, { useState, useEffect } from "react";
import { TreeSelect } from "../../components/lib/treeselect/TreeSelect";
import { Button } from "../../components/lib/button/Button";
import { NodeService } from "../../service/NodeService";
import TreeSelectDoc from "../../components/doc/treeselect";
import { DocActions } from "../../components/doc/common/docactions";
import Head from "next/head";

const TreeSelectDemo = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState('0-1');
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const nodeService = new NodeService();
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
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeSelect Component</title>
                <meta name="description" content="TreeSelect is a form component to choose from hierarchical data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeSelect</h1>
                    <p>TreeSelect is a form component to choose from hierarchical data.</p>
                </div>

                <DocActions github="treeselect/index.js" />
            </div>

            <div className="content-section implementation treeselect-demo">
                <div className="card">
                    <h5>Single</h5>
                    <TreeSelect
                        value={selectedNodeKey1}
                        expandedKeys={expandedKeys}
                        options={nodes}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        onChange={(e) => setSelectedNodeKey1(e.value)}
                        placeholder="Select Item"
                    ></TreeSelect>

                    <h5>Multiple</h5>
                    <TreeSelect
                        value={selectedNodeKeys1}
                        expandedKeys={expandedKeys}
                        options={nodes}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        onChange={(e) => setSelectedNodeKeys1(e.value)}
                        selectionMode="multiple"
                        metaKeySelection={false}
                        placeholder="Select Items"
                    ></TreeSelect>

                    <h5>Checkbox</h5>
                    <TreeSelect
                        value={selectedNodeKeys2}
                        expandedKeys={expandedKeys}
                        options={nodes}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        onChange={(e) => setSelectedNodeKeys2(e.value)}
                        display="chip"
                        selectionMode="checkbox"
                        placeholder="Select Items"
                    ></TreeSelect>

                    <h5>Filter</h5>
                    <TreeSelect
                        value={selectedNodeKey2}
                        expandedKeys={expandedKeys}
                        options={nodes}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        onChange={(e) => setSelectedNodeKey2(e.value)}
                        filter
                        placeholder="Select Items"
                    ></TreeSelect>

                    <h5>Initial Value</h5>
                    <TreeSelect
                        value={selectedNodeKey3}
                        expandedKeys={expandedKeys}
                        options={nodes}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        onChange={(e) => setSelectedNodeKey3(e.value)}
                        placeholder="Select Item"
                    ></TreeSelect>

                    <h5>Programmatic Control</h5>
                    <div className="mb-4">
                        <Button
                            type="button"
                            icon="pi pi-plus"
                            label="Expand All"
                            onClick={expandAll}
                            className="mr-2"
                        />
                        <Button
                            type="button"
                            icon="pi pi-minus"
                            label="Collapse All"
                            onClick={collapseAll}
                        />
                    </div>
                </div>
            </div>

            <TreeSelectDoc />
        </div>
    )
}

export default TreeSelectDemo;
