import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function FrozenColumnsDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function FrozenColumnsDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
            </TreeTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function FrozenColumnsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1"></Column>
                <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2"></Column>
                <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2"></Column>
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
                    A column can be fixed during horizontal scrolling by enabling the <i>frozen</i> property on a Column. The location is defined with the <i>alignFrozen</i> that can be <i>left</i> or <i>right</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
                    <Column field="name" header="Name" expander frozen style={{ width: '250px', height: '57px' }} />
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_0" />
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_0" />
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_1" />
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_1" />
                    <Column field="size" header="Size" style={{ width: '250px', height: '57px' }} columnKey="size_2" />
                    <Column field="type" header="Type" style={{ width: '250px', height: '57px' }} columnKey="type_2" />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
