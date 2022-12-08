import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Chip } from '../../../components/lib/chip/Chip';

export function IconDoc(props) {
    const code = {
        basic: `
<Chip label="Apple" icon="pi pi-apple" className="mr-2" />
<Chip label="Facebook" icon="pi pi-facebook" className="mr-2" />
<Chip label="Google" icon="pi pi-google" className="mr-2" />
<Chip label="Microsoft" icon="pi pi-microsoft" removable />
        `,
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const IconDoc = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" className="mr-2" />
            <Chip label="Facebook" icon="pi pi-facebook" className="mr-2" />
            <Chip label="Google" icon="pi pi-google" className="mr-2" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export const IconDoc = () => {

    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" className="mr-2" />
            <Chip label="Facebook" icon="pi pi-facebook" className="mr-2" />
            <Chip label="Google" icon="pi pi-google" className="mr-2" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Icon Demo Content.</p>
            </DocSectionText>
            <div className="card flex flex-wrap gap-2">
                <Chip label="Apple" icon="pi pi-apple" className="mr-2" />
                <Chip label="Facebook" icon="pi pi-facebook" className="mr-2" />
                <Chip label="Google" icon="pi pi-google" className="mr-2" />
                <Chip label="Microsoft" icon="pi pi-microsoft" removable />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
