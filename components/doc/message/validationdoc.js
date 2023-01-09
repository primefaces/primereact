import { Message } from '../../lib/message/Message';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ValidationDoc(props) {
    const code = {
        basic: `
<div className="formgroup-inline mb-2">
    <label htmlFor="username" className="p-sr-only">
        Username
    </label>
    <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
    <Message severity="error" text="Username is required" />
</div>
<div className="formgroup-inline">
    <label htmlFor="email" className="p-sr-only">
        email
    </label>
    <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
    <Message severity="error" />
</div>
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

export default function ValidationDoc() {

    return (
        <div>
            <div className="formgroup-inline mb-2">
                <label htmlFor="username" className="p-sr-only">
                    Username
                </label>
                <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                <Message severity="error" text="Username is required" />
            </div>
            <div className="formgroup-inline">
                <label htmlFor="email" className="p-sr-only">
                    email
                </label>
                <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

export default function ValidationDoc() {

    return (
        <div>
            <div className="formgroup-inline mb-2">
                <label htmlFor="username" className="p-sr-only">
                    Username
                </label>
                <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                <Message severity="error" text="Username is required" />
            </div>
            <div className="formgroup-inline">
                <label htmlFor="email" className="p-sr-only">
                    email
                </label>
                <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                <Message severity="error" />
            </div>
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
                <div className="formgroup-inline mb-2">
                    <label htmlFor="username" className="p-sr-only">
                        Username
                    </label>
                    <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                    <Message severity="error" text="Username is required" />
                </div>
                <div className="formgroup-inline">
                    <label htmlFor="email" className="p-sr-only">
                        email
                    </label>
                    <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                    <Message severity="error" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
