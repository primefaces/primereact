import { useState, useEffect } from 'react';
import { Tree } from '../../lib/tree/Tree';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { NodeService } from '../../../service/NodeService';

export function DragAndDropDoc(props) {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function DragAndDropDoc() {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function DragAndDropDoc() {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tree Drag and Drop</p>
            </DocSectionText>
            <div className="card">
                <Tree value={nodes} dragdropScope="demo" onDragDrop={(event) => setNodes(event.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
