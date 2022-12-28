import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Tag } from '../../lib/tag/Tag';

export function TagsDoc(props) {
    const code = {
        basic: `
<Tag className="mr-2" value="Primary"></Tag>
<Tag className="mr-2" severity="success" value="Success"></Tag>
<Tag className="mr-2" severity="info" value="Info"></Tag>
<Tag className="mr-2" severity="warning" value="Warning"></Tag>
<Tag severity="danger" value="Danger"></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TagsDoc() {

    return (
        <div className="card">
            <Tag className="mr-2" value="Primary"></Tag>
            <Tag className="mr-2" severity="success" value="Success"></Tag>
            <Tag className="mr-2" severity="info" value="Info"></Tag>
            <Tag className="mr-2" severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TagsDoc() {

    return (
        <div className="card">
            <Tag className="mr-2" value="Primary"></Tag>
            <Tag className="mr-2" severity="success" value="Success"></Tag>
            <Tag className="mr-2" severity="info" value="Info"></Tag>
            <Tag className="mr-2" severity="warning" value="Warning"></Tag>
            <Tag severity="danger" value="Danger"></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tags Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Tag className="mr-2" value="Primary"></Tag>
                <Tag className="mr-2" severity="success" value="Success"></Tag>
                <Tag className="mr-2" severity="info" value="Info"></Tag>
                <Tag className="mr-2" severity="warning" value="Warning"></Tag>
                <Tag severity="danger" value="Danger"></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
