import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Password disabled placeholder="Disabled" />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function DisabledDoc() {

    return (
        <div className="card flex justify-content-center">
            <Password disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function DisabledDoc() {

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
                    Password is used as a controlled component with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
