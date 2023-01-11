import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Tag } from '../../lib/tag/Tag';

export function BasicDoc(props) {
    const code = {
        basic: `
<Tag value="New"></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Tag value="New"></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Label of the tag is defined with the <i>value</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Tag value="New"></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
