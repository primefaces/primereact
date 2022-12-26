import { Checkbox } from '../../lib/checkbox/Checkbox';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
        <Checkbox checked disabled></Checkbox>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Checkbox } from "primereact/checkbox";

export default function DisabledDemo() {
    return (
        <Checkbox checked disabled></Checkbox>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Checkbox checked disabled></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
