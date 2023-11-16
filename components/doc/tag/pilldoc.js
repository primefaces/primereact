import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tag } from '@/components/lib/tag/Tag';

export function PillDoc(props) {
    const code = {
        basic: `
<Tag value="Primary" rounded></Tag>
<Tag severity="success" value="Success" rounded></Tag>
<Tag severity="info" value="Info" rounded></Tag>
<Tag severity="warning" value="Warning" rounded></Tag>
<Tag severity="danger" value="Danger" rounded></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PillDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary" rounded></Tag>
            <Tag severity="success" value="Success" rounded></Tag>
            <Tag severity="info" value="Info" rounded></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function PillDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary" rounded></Tag>
            <Tag severity="success" value="Success" rounded></Tag>
            <Tag severity="info" value="Info" rounded></Tag>
            <Tag severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Enabling <i>rounded</i>, displays a tag as a pill.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Tag value="Primary" rounded></Tag>
                <Tag severity="success" value="Success" rounded></Tag>
                <Tag severity="info" value="Info" rounded></Tag>
                <Tag severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
