import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Tag } from '../../lib/tag/Tag';

export function PillsDoc(props) {
    const code = {
        basic: `
<Tag className="mr-2" value="Primary" rounded></Tag>
<Tag className="mr-2" severity="success" value="Success" rounded></Tag>
<Tag className="mr-2" severity="info" value="Info" rounded></Tag>
<Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
<Tag severity="danger" value="Danger" rounded></Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export const PillsDoc = () => {

    return (
        <div className="card">
            <Tag className="mr-2" value="Primary" rounded></Tag>
            <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
            <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
            <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export const PillsDoc = () => {

    return (
        <div className="card">
            <Tag className="mr-2" value="Primary" rounded></Tag>
            <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
            <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
            <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
            <Tag severity="danger" value="Danger" rounded></Tag>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Pills Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Tag className="mr-2" value="Primary" rounded></Tag>
                <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
                <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
                <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
                <Tag severity="danger" value="Danger" rounded></Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
