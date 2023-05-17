import { Mention } from '../../lib/mention/Mention';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Mention disabled />
        `,
        javascript: `
import React from "react";
import { Mention } from 'primereact/mention';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Mention disabled />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { Mention } from 'primereact/mention';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Mention disabled />
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
                <Mention disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
