import { useState, useEffect } from 'react';
import { Tree } from '../../../lib/tree/Tree';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { NodeService } from '../../../../service/NodeService';

export function CheckboxSelectionDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
        `,
        javascript: `
import { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function CheckboxSelectionDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
    )
}
        `,
        typescript: `
import { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function CheckboxSelectionDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Checkbox Selection</p>
            </DocSectionText>
            <div className="card">
                <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
