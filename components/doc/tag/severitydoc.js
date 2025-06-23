import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tag } from '@/components/lib/tag/Tag';

export function SeverityDoc(props) {
    const code = {
        basic: `
<Tag value="Primary"></Tag>
<Tag severity="success" value="Success"></Tag>
<Tag severity="info" value="Info"></Tag>
<Tag severity="warning" value="Warning"></Tag>
<Tag severity="danger" value="Danger"></Tag>
<Tag severity="secondary" value="Secondary"></Tag>
<Tag severity="contrast" value="Contrast"></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-2">
            <Tag value="Primary"></Tag>
            <Tag severity="success" value="Success"></Tag>
            <Tag severity="info" value="Info"></Tag>
            <Tag severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
            <Tag severity="secondary" value="Secondary"></Tag>
            <Tag severity="contrast" value="Contrast"></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Severity defines the color of the tag, possible values are <i>success</i>, <i>info</i>, <i>warning</i> and <i>danger</i> in addition to the default theme color.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Tag value="Primary" />
                <Tag severity="success" value="Success" />
                <Tag severity="info" value="Info" />
                <Tag severity="warning" value="Warning" />
                <Tag severity="danger" value="Danger" />
                <Tag severity="secondary" value="Secondary" />
                <Tag severity="contrast" value="Contrast" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
