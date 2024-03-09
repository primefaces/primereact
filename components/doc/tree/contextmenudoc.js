import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';
import { Toast } from '@/components/lib/toast/Toast';
import { Tree } from '@/components/lib/tree/Tree';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

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
            icon: 'pi pi-sort',
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

<ContextMenu model={menu} ref={cm} />

<Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
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
            icon: 'pi pi-sort',
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
    }, []);

    return (
        <>
            <Toast ref={toast} />
            
            <ContextMenu model={menu} ref={cm} />

            <div className="card flex justify-content-center">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree, TreeExpandedKeysType } from 'primereact/tree';
import { TreeNode } from 'primereact/treenode';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function ContextMenuDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({});
    const [selectedNodeKey, setSelectedNodeKey] = useState<string | null>(null);
    const toast = useRef<Toast>(null);
    const cm = useRef<ContextMenu>(null);
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
            icon: 'pi pi-sort',
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
    }, []);

    return (
        <>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} />

            <div className="card flex justify-content-center">
                <Tree value={nodes} expandedKeys={expandedKeys} onToggle={(e) => setExpandedKeys(e.value)} 
                    contextMenuSelectionKey={selectedNodeKey} onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onContextMenu={(e) => cm.current.show(e.originalEvent)} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,
        data: `
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
            icon: 'pi pi-fw pi-sort',
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
                <p>
                    Tree has exclusive integration with <Link href="/contextMenu">ContextMenu</Link> using <i>contextMenuSelectionKey</i>, <i>onContextMenuSelectionChange</i> and <i>onContextMenu</i> properties.
                </p>
            </DocSectionText>
            <Toast ref={toast} />

            <ContextMenu model={menu} ref={cm} />

            <div className="card flex justify-content-center">
                <Tree
                    value={nodes}
                    expandedKeys={expandedKeys}
                    onToggle={(e) => setExpandedKeys(e.value)}
                    contextMenuSelectionKey={selectedNodeKey}
                    onContextMenuSelectionChange={(e) => setSelectedNodeKey(e.value)}
                    onContextMenu={(e) => cm.current.show(e.originalEvent)}
                    className="w-full md:w-30rem"
                />
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
