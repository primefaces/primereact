import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Message } from '@/components/lib/message/Message';

export function ValidationDoc(props) {
    const code = {
        basic: `
<div className="flex flex-wrap align-items-center mb-3 gap-2">
    <label htmlFor="username" className="p-sr-only">Username</label>
    <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
    <Message severity="error" text="Username is required" />
</div>
<div className="flex flex-wrap align-items-center gap-2">
    <label htmlFor="email" className="p-sr-only">Email</label>
    <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
    <Message severity="error" />
</div>
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

export default function ValidationDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
                <label htmlFor="username" className="p-sr-only">Username</label>
                <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                <Message severity="error" text="Username is required" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="email" className="p-sr-only">Email</label>
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

export default function ValidationDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap align-items-center mb-3 gap-2">
                <label htmlFor="username" className="p-sr-only">Username</label>
                <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                <Message severity="error" text="Username is required" />
            </div>
            <div className="flex flex-wrap align-items-center gap-2">
                <label htmlFor="email" className="p-sr-only">Email</label>
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
                <p>Message component is handy when displaying error messages next to form elements.</p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center mb-3 gap-2">
                    <label htmlFor="username" className="p-sr-only">
                        Username
                    </label>
                    <InputText id="username" placeholder="Username" className="p-invalid mr-2" />
                    <Message severity="error" text="Username is required" />
                </div>
                <div className="flex flex-wrap align-items-center gap-2">
                    <label htmlFor="email" className="p-sr-only">
                        Email
                    </label>
                    <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
                    <Message severity="error" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
