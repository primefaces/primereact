import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Checkbox checked disabled></Checkbox>
        `,
        javascript: `
import React from 'react'; 
import { Checkbox } from "primereact/checkbox";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox checked disabled></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Checkbox } from "primereact/checkbox";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Checkbox checked disabled></Checkbox>
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
                <Checkbox checked disabled></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
