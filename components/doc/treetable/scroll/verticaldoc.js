import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../../lib/treetable/TreeTable';
import { Column } from '../../../lib/column/Column';
import { NodeService } from '../../../../service/NodeService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function VerticalDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} scrollable scrollHeight="200px">
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

const VerticalDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const VerticalDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size"></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
