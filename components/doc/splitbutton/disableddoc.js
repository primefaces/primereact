import { SplitButton } from '../../lib/splitbutton/SplitButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<SplitButton label="Save" disabled></SplitButton>
        `,
        javascript: `
import React from 'react';
import { SplitButton } from 'primereact/splitbutton';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <SplitButton label="Save" disabled></SplitButton>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { SplitButton } from 'primereact/splitbutton';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <SplitButton label="Save" disabled></SplitButton>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SplitButton label="Save" disabled></SplitButton>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
