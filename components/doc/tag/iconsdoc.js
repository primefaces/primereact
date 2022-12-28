import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Tag } from '../../lib/tag/Tag';

export function IconsDoc(props) {
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

export default function IconsDoc() {

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

export default function IconsDoc() {

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
                <p>Icons Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
                <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
                <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
                <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
                <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
