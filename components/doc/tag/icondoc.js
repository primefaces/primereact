import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Tag } from '@/components/lib/tag/Tag';

export function IconDoc(props) {
    const code = {
        basic: `
<Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
<Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
<Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
<Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
<Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card">
            <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card">
            <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
            <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
            <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
            <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
            <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A font icon next to the value can be displayed with the <i>icon</i> property.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Tag icon="pi pi-user" value="Primary"></Tag>
                <Tag icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
