import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
        `,
        javascript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
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
                <Dropdown disabled placeholder="Select a City" className="w-full md:w-14rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
