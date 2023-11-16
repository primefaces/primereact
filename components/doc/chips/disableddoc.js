import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Chips } from '@/components/lib/chips/Chips';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Chips disabled placeholder="Disabled" />
        `,
        javascript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function DisabledDemo() {
    return (
        <div className="card p-fluid">
            <Chips disabled placeholder="Disabled" />
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
            <div className="card p-fluid">
                <Chips disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
