import { CascadeSelect } from '../../lib/cascadeselect/CascadeSelect';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
        `,
        javascript: `
import React from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Check the description. */}
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
