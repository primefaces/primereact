import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MultiSelect } from '@/components/lib/multiselect/MultiSelect';

export function DisabledDoc(props) {
    const code = {
        basic: `
<MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
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
                <MultiSelect disabled placeholder="Select Cities" className="w-full md:w-20rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
