import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { TreeTable } from '@/components/lib/treetable/TreeTable';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function StatefulDoc(props) {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}>
    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
    <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
    <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function StatefulDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { TreeNode } from 'primereact/treenode';
import { NodeService } from './service/NodeService';

export default function StatefulDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []);



    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name"></Column>
                <Column field="size" header="Size" filter filterPlaceholder="Filter by size"></Column>
                <Column field="type" header="Type" filter filterPlaceholder="Filter by type"></Column>
            </TreeTable>
        </div>
    )
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
                <p>Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings.</p>
                <p>
                    Change the state of the table e.g paginate or expand rows, navigate away and then return to this table again to test this feature. The setting is set as <i>session</i> with the <i>stateStorage</i> property so that Table retains
                    the state until the browser is closed. Other alternative is <i>local</i> referring to <i>localStorage</i> for an extended lifetime.
                </p>
            </DocSectionText>
            <div className="card">
                <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }} stateKey={'tree-table-state-demo-session'} stateStorage={'session'} paginator rows={5} rowsPerPageOptions={[5, 10, 25]}>
                    <Column field="name" header="Name" expander filter filterPlaceholder="Filter by name" sortable />
                    <Column field="size" header="Size" filter filterPlaceholder="Filter by size" sortable />
                    <Column field="type" header="Type" filter filterPlaceholder="Filter by type" sortable />
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
