import { useState, useEffect, useRef } from 'react';
import { Tree } from '../../../components/lib/tree/Tree';
import { Toast } from '../../../components/lib/toast/Toast';
import { DocSectionCode } from '../../../components/doc/common/docsectioncode';
import { DocSectionText } from '../../../components/doc/common/docsectiontext';
import { NodeService } from '../../../service/NodeService';

export function EventsDoc(props) {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState('');
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onExpand = (event) => {
        toast.current.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function EventsDemo() {
    const [nodes, setNodes] = useState([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState('');
    const toast = useRef(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    const onExpand = (event) => {
        toast.current.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree, TreeNode, TreeEventNodeEvent } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from './service/NodeService';

export default function EventsDemo() {
    const [nodes, setNodes] = useState<TreeNode[]>([]);
    const [selectedNodeKey, setSelectedNodeKey] = useState<string>('');
    const toast = useRef<Toast>(null);
    
    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []);

    const onExpand = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    };

    const onCollapse = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    };

    const onSelect = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    };

    const onUnselect = (event: TreeEventNodeEvent) => {
        toast.current.show({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={(e) => setSelectedNodeKey(e.value)} 
                    onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect} className="w-full md:w-30rem" />
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
                <p>An event is provided for each type of user interaction such as expand, collapse and selection.</p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <Tree
                    value={nodes}
                    selectionMode="single"
                    selectionKeys={selectedNodeKey}
                    onSelectionChange={(e) => setSelectedNodeKey(e.value)}
                    onExpand={onExpand}
                    onCollapse={onCollapse}
                    onSelect={onSelect}
                    onUnselect={onUnselect}
                    className="w-full md:w-30rem"
                />
            </div>
            <DocSectionCode code={code} service={['NodeService']} />
        </>
    );
}
