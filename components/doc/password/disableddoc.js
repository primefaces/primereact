import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Password disabled placeholder="Disabled" />
        `,
        javascript: `
import React from "react";
import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { Password } from 'primereact/password';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password disabled placeholder="Disabled" />
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
                <Password disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
