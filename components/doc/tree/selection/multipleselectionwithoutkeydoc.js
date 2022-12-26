import { useState, useEffect } from 'react';
import { Tree } from '../../../lib/tree/Tree';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { NodeService } from '../../../../service/NodeService';

export function MultipleSelectionWithoutKeyDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function MultipleSelectionWithoutKeyDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} />
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function MultipleSelectionWithoutKeyDoc() {
    const [nodes, setNodes] = useState(null);
    const [selectedKey, setSelectedKey] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Multiple Selection without MetaKey</p>
            </DocSectionText>
            <div className="card">
                <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
