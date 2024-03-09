import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Checkbox className="p-invalid"></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox className="p-invalid"></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox className="p-invalid"></Checkbox>
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
                <Checkbox className="p-invalid"></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
