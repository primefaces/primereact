import { useState, useEffect } from 'react';
import { Tree } from '../../../lib/tree/Tree';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';
import { NodeService } from '../../../../service/NodeService';

export function StrictFilterDoc(props) {
    const [nodes, setNodes] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Tree value={nodes} filter filterMode="strict"></Tree>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function StrictFilterDoc() {
    const [nodes, setNodes] = useState(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} filter filterMode="strict"></Tree>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

export default function StrictFilterDoc() {
    const [nodes, setNodes] = useState(null);
    

    useEffect(() => {
        NodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Tree value={nodes} filter filterMode="strict"></Tree>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Strict Filter</p>
            </DocSectionText>
            <div className="card">
                <Tree value={nodes} filter filterMode="strict"></Tree>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
