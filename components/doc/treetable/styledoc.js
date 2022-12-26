import React, { useState, useEffect } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StyleDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    };

    const rowClassName = (node) => {
        return { 'p-highlight': node.children && node.children.length === 3 };
    };

    const code = {
        basic: `
<TreeTable value={nodes} rowClassName={rowClassName}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size" body={sizeTemplate}></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const StyleDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div>
            <div className="card">
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                <TreeTable value={nodes} rowClassName={rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from '../service/NodeService';

const StyleDoc = () => {
    const [nodes, setNodes] = useState([]);
    

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div>
            <div className="card">
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
                <TreeTable value={nodes} rowClassName={rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} rowClassName={rowClassName}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size" body={sizeTemplate}></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
