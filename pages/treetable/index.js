import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../components/lib/treetable/TreeTable';
import { Column } from '../../components/lib/column/Column';
import { Button } from '../../components/lib/button/Button';
import { NodeService } from '../../service/NodeService';
import TreeTableDoc from '../../components/doc/treetable';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const TreeTableDemo = () => {

    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const nodeservice = new NodeService();

    const toggleApplications = () => {
        let _expandedKeys = { ...expandedKeys };
        if (_expandedKeys['0'])
            delete _expandedKeys['0'];
        else
            _expandedKeys['0'] = true;

        setExpandedKeys(_expandedKeys);
    }

    useEffect(() => {
        nodeservice.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React TreeTable Component</title>
                <meta name="description" content="TreeTable is used to display hierarchical data in tabular format." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable</h1>
                    <p>TreeTable is used to display hierarchical data in tabular format.</p>
                </div>

                <DocActions github="treetable/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Basic</h5>
                    <TreeTable value={nodes}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>

                <div className="card">
                    <h5>Programmatic</h5>
                    <Button onClick={toggleApplications} label="Toggle Applications" />
                    <TreeTable value={nodes} expandedKeys={expandedKeys}
                        onToggle={e => setExpandedKeys(e.value)} style={{ marginTop: '.5em' }}>
                        <Column field="name" header="Name" expander></Column>
                        <Column field="size" header="Size"></Column>
                        <Column field="type" header="Type"></Column>
                    </TreeTable>
                </div>
            </div>

            <TreeTableDoc />
        </div>
    )
}

export default TreeTableDemo;
