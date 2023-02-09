import { useState, useEffect, useRef } from 'react';
import { Tree } from '../../lib/tree/Tree';
import { Toast } from '../../lib/toast/Toast';
import { ContextMenu } from '../../lib/contextmenu/ContextMenu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { NodeService } from '../../../service/NodeService';

export function ContextMenuDoc(props) {
    const [nodes, setNodes] = useState(null);
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
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Toast ref={toast} />

<ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

<div className="card">
    <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
        contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
        onContextMenu={event => cm.current.show(event.originalEvent)} />
</div>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDoc() {
    const [nodes, setNodes] = useState(null);
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
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />
            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
            <div className="card">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDoc() {
    const [nodes, setNodes] = useState(null);
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
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast} />
            <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />
            <div className="card">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={event => setSelectedNodeKey(event.value)}
                    onContextMenu={event => cm.current.show(event.originalEvent)} />
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
                <p>Tree ContextMenu</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />

                <ContextMenu model={menu} ref={cm} onHide={() => setSelectedNodeKey(null)} />

                <div className="card">
                    <Tree
                        value={nodes}
                        expandedKeys={expandedKeys}
                        onToggle={(e) => setExpandedKeys(e.value)}
                        contextMenuSelectionKey={selectedNodeKey}
                        onContextMenuSelectionChange={(event) => setSelectedNodeKey(event.value)}
                        onContextMenu={(event) => cm.current.show(event.originalEvent)}
                    />
                </div>
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
