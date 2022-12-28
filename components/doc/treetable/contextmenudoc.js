import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from '../../lib/treetable/TreeTable';
import { Column } from '../../lib/column/Column';
import { ContextMenu } from '../../lib/contextmenu/ContextMenu';
import { Toast } from '../../lib/toast/Toast';
import { NodeService } from '../../../service/NodeService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContextMenuDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [expandedKeys, setExpandedKeys] = useState({});
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menu = [
        {
            label: 'View Key',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
            }
        },
        {
            label: 'Toggle',
            icon: 'pi pi-cog',
            command: () => {
                let _expandedKeys = { ...expandedKeys };

                if (_expandedKeys[selectedNodeKey]) delete _expandedKeys[selectedNodeKey];
                else _expandedKeys[selectedNodeKey] = true;

                setExpandedKeys(_expandedKeys);
            }
        }
    ];

    useEffect(() => {
        NodeService.getTreeTableNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
    onContextMenu={event => cm.current.show(event.originalEvent)}>
    <Column field="name" header="Name" expander></Column>
    <Column field="size" header="Size"></Column>
    <Column field="type" header="Type"></Column>
</TreeTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ContextMenuDoc() {
const [nodes, setNodes] = useState([]);
const [expandedKeys, setExpandedKeys] = useState({});
const [selectedNodeKey, setSelectedNodeKey] = useState(null);
const toast = useRef(null);
const cm = useRef(null);
const menu = [
    {
        label: 'View Key',
        icon: 'pi pi-search',
        command: () => {
            toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
        }
    },
    {
        label: 'Toggle',
        icon: 'pi pi-cog',
        command: () => {
            let _expandedKeys = { ...expandedKeys };
            if (_expandedKeys[selectedNodeKey])
                delete _expandedKeys[selectedNodeKey];
            else
                _expandedKeys[selectedNodeKey] = true;
            setExpandedKeys(_expandedKeys);
        }
    }
];



useEffect(() => {
    NodeService.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

            <div className="card">
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { TreeTable } from 'primereact/treetable';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function ContextMenuDoc() {
const [nodes, setNodes] = useState([]);
const [expandedKeys, setExpandedKeys] = useState({});
const [selectedNodeKey, setSelectedNodeKey] = useState(null);
const toast = useRef(null);
const cm = useRef(null);
const menu = [
    {
        label: 'View Key',
        icon: 'pi pi-search',
        command: () => {
            toast.current.show({ severity: 'success', summary: 'Node Key', detail: selectedNodeKey });
        }
    },
    {
        label: 'Toggle',
        icon: 'pi pi-cog',
        command: () => {
            let _expandedKeys = { ...expandedKeys };
            if (_expandedKeys[selectedNodeKey])
                delete _expandedKeys[selectedNodeKey];
            else
                _expandedKeys[selectedNodeKey] = true;
            setExpandedKeys(_expandedKeys);
        }
    }
];



useEffect(() => {
    NodeService.getTreeTableNodes().then(data => setNodes(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

            <div className="card">
                <TreeTable value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)}>
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
        </div>
    )
}
        `,
        data: `
/* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>TreeTable has exclusive integration with ContextMenu.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />
                <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
                <TreeTable
                    value={nodes}
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey}
                    onContextMenuSelectionChange={(event) => setSelectedNodeKey(event.value)}
                    onContextMenu={(event) => cm.current.show(event.originalEvent)}
                >
                    <Column field="name" header="Name" expander></Column>
                    <Column field="size" header="Size"></Column>
                    <Column field="type" header="Type"></Column>
                </TreeTable>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
