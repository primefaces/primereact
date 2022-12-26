import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<RadioButton checked disabled></RadioButton>
        `,
        javascript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function DisabledDemo() {
    return (
        <Checkbox checked disabled></Checkbox>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function DisabledDemo() {
    return (
        <RadioButton checked disabled></RadioButton>
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
                <RadioButton checked disabled></RadioButton>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
