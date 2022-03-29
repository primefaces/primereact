import React, { useState, useEffect } from 'react';
import { Tree } from '../../components/lib/tree/Tree';
import { Button } from '../../components/lib/button/Button';
import { NodeService } from '../../service/NodeService';
import TreeDoc from '../../components/doc/tree';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeDemo = () => {

    const [nodes, setNodes] = useState(null);
    const [expandedKeys, setExpandedKeys] = useState({});
    const nodeService = new NodeService();

    const expandAll = () => {
        let _expandedKeys = {};
        for (let node of nodes) {
            expandNode(node, _expandedKeys);
        }

        setExpandedKeys(_expandedKeys);
    }

    const collapseAll = () => {
        setExpandedKeys({});
    }

    const expandNode = (node, _expandedKeys) => {
        if (node.children && node.children.length) {
            _expandedKeys[node.key] = true;

            for (let child of node.children) {
                expandNode(child, _expandedKeys);
            }
        }
    }

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React Tree Component</title>
                <meta name="description" content="Tree is used to display hierarchical data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tree</h1>
                    <p>Tree is used to display hierarchical data.</p>
                </div>

                <DocActions github="tree/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <Tree value={nodes} />

                    <h5>Programmatic Control</h5>
                    <div className="mb-4">
                        <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
                        <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
                    </div>
                    <Tree value={nodes} expandedKeys={expandedKeys}
                        onToggle={e => setExpandedKeys(e.value)} />
                </div>
            </div>

            <TreeDoc />
        </div>
    )
}

export default TreeDemo;
