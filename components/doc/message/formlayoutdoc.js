import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function FormLayoutDoc(props) {
    const code = {
        basic: `
<div className="field p-fluid">
    <label htmlFor="username2">Username</label>
    <InputText id="username2" aria-describedby="username-help" className="p-invalid mr-2" />
    <small id="username-help" className="p-error">
        Username is not available.
    </small>
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function FormLayoutDoc() {

    return (
        <div className="field p-fluid">
            <label htmlFor="username2">Username</label>
            <InputText id="username2" aria-describedby="username-help" className="p-invalid mr-2" />
            <small id="username-help" className="p-error">
                Username is not available.
            </small>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function FormLayoutDoc() {

    return (
        <div className="field p-fluid">
            <label htmlFor="username2">Username</label>
            <InputText id="username2" aria-describedby="username-help" className="p-invalid mr-2" />
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card">
                <div className="field p-fluid">
                    <label htmlFor="username2">Username</label>
                    <InputText id="username2" aria-describedby="username-help" className="p-invalid mr-2" />
                    <small id="username-help" className="p-error">
                        Username is not available.
                    </small>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
