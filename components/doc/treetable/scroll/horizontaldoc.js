import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../../service/NodeService';

export function HorizontalScrollDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
    <Column field="size" header="Size" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
    <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
    <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
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

export default function HorizontalScrollDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    
    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} scrollable scrollHeight="200px">
                <Column field="name" header="Name" expander style={{ width: '250px' }}></Column>
                <Column field="size" header="Size" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 2" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 2" style={{ width: '250px' }}></Column>
                <Column field="type" header="Type 3" style={{ width: '250px' }}></Column>
                <Column field="size" header="Size 3" style={{ width: '250px' }}></Column>
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
                <p>Horizontal scrolling is enabled when the total width of columns exceeds table width.</p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} scrollable scrollHeight="200px">
                    <Column field="name" header="Name" expander style={{ width: '250px' }} />
                    <Column field="size" header="Size" style={{ width: '250px' }} />
                    <Column field="type" header="Type 2" style={{ width: '250px' }} />
                    <Column field="size" header="Size 2" style={{ width: '250px' }} />
                    <Column field="type" header="Type 3" style={{ width: '250px' }} />
                    <Column field="size" header="Size 3" style={{ width: '250px' }} />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
