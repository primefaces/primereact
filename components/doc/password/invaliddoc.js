import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Password className="p-invalid" />
        `,
        javascript: `
import React from "react";
import { Password } from 'primereact/password';

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Password className="p-invalid" />
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
            <Password className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
