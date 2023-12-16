import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Mention } from '@/components/lib/mention/Mention';

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
