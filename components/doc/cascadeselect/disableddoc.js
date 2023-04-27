import { CascadeSelect } from '../../lib/cascadeselect/CascadeSelect';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
        `,
        javascript: `
import React from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function DisabledDemo() {
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

export default function DisabledDemo() {
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
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <CascadeSelect disabled placeholder="Disabled" style={{ minWidth: '14rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
