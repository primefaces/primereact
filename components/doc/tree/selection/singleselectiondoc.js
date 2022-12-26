import { useState, useEffect, useRef } from 'react';
import { Tree } from '../../../lib/tree/Tree';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { NodeService } from '../../../../service/NodeService';

export function SingleSelectionDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const toast = useRef(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onNodeSelect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    };

    const onNodeUnselect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect} />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from '../service/NodeService';

export default function SingleSelectionDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const toast = useRef(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onNodeSelect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    const onNodeUnselect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    return (
        <Toast ref={toast} />
        <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect} />
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { Toast } from 'primereact/toast';
import { NodeService } from '../service/NodeService';

export default function SingleSelectionDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const toast = useRef(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onNodeSelect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Selected', detail: node.label, life: 3000 });
    }

    const onNodeUnselect = (node) => {
        toast.current.show({ severity: 'success', summary: 'Node Unselected', detail: node.label, life: 3000 });
    }

    return (
        <Toast ref={toast} />
        <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Single Selection</p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card">
                <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
