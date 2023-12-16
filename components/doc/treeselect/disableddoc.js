import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TreeSelect } from '@/components/lib/treeselect/TreeSelect';
import { useEffect, useState } from 'react';
import { NodeService } from '../../../service/NodeService';

export function DisabledDoc(props) {
    const [nodes, setNodes] = useState(null);
    const [selectedNodeKey, setSelectedNodeKey] = useState(null);

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        `,
        javascript: `
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        </div>
    );
}
        `,
        typescript: `
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <TreeSelect disabled placeholder="Select Item" className="md:w-20rem w-full" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
