import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Password invalid />
        `,
        javascript: `
import React from "react";
import { Password } from 'primereact/password';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password invalid />
        </div>
    )
}
        `,
        typescript: `
import React from "react";
import { Password } from 'primereact/password';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password invalid />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password invalid />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
