import React, { useState, useEffect } from 'react';
import { TreeSelect } from '../../components/lib/treeselect/TreeSelect';
import { NodeService } from '../../service/NodeService';
import TreeSelectDoc from '../../components/doc/treeselect';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeSelectDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey1, setSelectedNodeKey1] = useState(null);
    const [selectedNodeKey2, setSelectedNodeKey2] = useState(null);
    const [selectedNodeKey3, setSelectedNodeKey3] = useState('0-1');
    const [selectedNodeKeys1, setSelectedNodeKeys1] = useState(null);
    const [selectedNodeKeys2, setSelectedNodeKeys2] = useState(null);
    const nodeService = new NodeService();

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
                    <TreeSelect value={selectedNodeKey1} options={nodes} onChange={(e) => setSelectedNodeKey1(e.value)} placeholder="Select Item"></TreeSelect>

                    <h5>Multiple</h5>
                    <TreeSelect value={selectedNodeKeys1} options={nodes} onChange={(e) => setSelectedNodeKeys1(e.value)} selectionMode="multiple" metaKeySelection={false} placeholder="Select Items"></TreeSelect>

                    <h5>Checkbox</h5>
                    <TreeSelect value={selectedNodeKeys2} options={nodes} onChange={(e) => setSelectedNodeKeys2(e.value)} display="chip" selectionMode="checkbox" placeholder="Select Items"></TreeSelect>

                    <h5>Filter</h5>
                    <TreeSelect value={selectedNodeKey2} options={nodes} onChange={(e) => setSelectedNodeKey2(e.value)} filter placeholder="Select Items"></TreeSelect>

                    <h5>Initial Value</h5>
                    <TreeSelect value={selectedNodeKey3} options={nodes} onChange={(e) => setSelectedNodeKey3(e.value)} placeholder="Select Item"></TreeSelect>
                </div>
            </div>

            <TreeSelectDoc />
        </div>
    )
}

export default TreeSelectDemo;
