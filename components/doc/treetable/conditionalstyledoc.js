import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function ConditionalStyleDoc(props) {
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
<TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size" body={sizeTemplate}></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ConditionalStyleDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    const sizeTemplate = (node) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div className="card">
            <TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
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
import { TreeNode } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ConditionalStyleDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    const sizeTemplate = (node: TreeNode) => {
        let size = node.data.size;
        let fontWeight = parseInt(size, 10) > 75 ? 'bold' : 'normal';

        return <span style={{ fontWeight: fontWeight }}>{size}</span>;
    }

    const rowClassName = (node: TreeNode) => {
        return { 'p-highlight': (node.children && node.children.length === 3) };
    }

    return (
        <div className="card">
            <TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander></Column>
                <Column field="size" header="Size" body={sizeTemplate}></Column>
                <Column field="type" header="Type"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        data: `
{
    key: '0',
    data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
    },
    children: [
        {
            key: '0-0',
            data: {
                name: 'React',
                size: '25kb',
                type: 'Folder'
            },
            children: [
                {
                    key: '0-0-0',
                    data: {
                        name: 'react.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-1',
                    data: {
                        name: 'native.app',
                        size: '10kb',
                        type: 'Application'
                    }
                },
                {
                    key: '0-0-2',
                    data: {
                        name: 'mobile.app',
                        size: '5kb',
                        type: 'Application'
                    }
                }
            ]
        },
        {
            key: '0-1',
            data: {
                name: 'editor.app',
                size: '25kb',
                type: 'Application'
            }
        },
        {
            key: '0-2',
            data: {
                name: 'settings.app',
                size: '50kb',
                type: 'Application'
            }
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Particular rows and cells can be styled based on conditions. The <i>rowClassName</i> receives a row data as a parameter to return a style class for a row whereas cells are customized using the <i>body</i> template.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="name" header="Name" expander />
                    <Column field="size" header="Size" body={sizeTemplate} />
                    <Column field="type" header="Type" />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
