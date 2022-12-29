import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';

export function BasicDoc(props) {
    const code = {
        basic: `
<Chip label="Action" className="mr-2" />
<Chip label="Comedy" className="mr-2" />
<Chip label="Mystery" className="mr-2" />
<Chip label="Thriller" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function BasicDoc() {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="mr-2" />
            <Chip label="Comedy" className="mr-2" />
            <Chip label="Mystery" className="mr-2" />
            <Chip label="Thriller" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function BasicDoc() {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Action" className="mr-2" />
            <Chip label="Comedy" className="mr-2" />
            <Chip label="Mystery" className="mr-2" />
            <Chip label="Thriller" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Basic Demo Content.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Action" className="mr-2" />
                <Chip label="Comedy" className="mr-2" />
                <Chip label="Mystery" className="mr-2" />
                <Chip label="Thriller" removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
