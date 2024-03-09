import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function HelpTextDoc(props) {
    const code = {
        basic: `
<div className="flex flex-column gap-2">
    <label htmlFor="username">Username</label>
    <InputText id="username" aria-describedby="username-help" />
    <small id="username-help">
        Enter your username to reset your password.
    </small>
</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function HelpTextDemo() {
    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-2">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username to reset your password.
                </small>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    An advisory text can be defined with the semantic <i>small</i> tag.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="flex flex-column gap-2">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" />
                    <small id="username-help">Enter your username to reset your password.</small>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
