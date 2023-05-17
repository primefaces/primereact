import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
        <div className="card flex justify-content-center">
            <RadioButton checked disabled></RadioButton>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { RadioButton } from "primereact/radiobutton";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <RadioButton checked disabled></RadioButton>
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
                <RadioButton checked disabled></RadioButton>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
