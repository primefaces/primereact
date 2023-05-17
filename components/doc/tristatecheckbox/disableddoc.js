import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<TriStateCheckbox disabled />
        `,
        javascript: `
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TriStateCheckbox disabled />
        </div>
    );
}
        `,
        typescript: `
import React from "react";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <TriStateCheckbox disabled />
        </div>
    );
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
                <TriStateCheckbox disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
