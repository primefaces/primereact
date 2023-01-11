import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<div className="flex flex-column gap-2">
    <label htmlFor="username">
        Username
    </label>
    <InputText id="username" aria-describedby="username-help" className="p-invalid" />
    <small id="username-help" className="p-error">
        Username is not available.
    </small>
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="flex flex-column gap-2">
            <label htmlFor="username">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="p-invalid" />
            <small id="username-help" className="p-error">
                Username is not available.
            </small>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="flex flex-column gap-2">
            <label htmlFor="username">
                Username
            </label>
            <InputText id="username" aria-describedby="username-help" className="p-invalid" />
            <small id="username-help" className="p-error">
                Username is not available.
            </small>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" className="p-invalid" />
                    <small id="username-help" className="p-error">
                        Username is not available.
                    </small>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
