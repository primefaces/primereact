import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Message } from '@/components/lib/message/Message';

export function SeverityDoc(props) {
    const code = {
        basic: `
<Message severity="info" text="Info Message" />
<Message severity="success" text="Success Message" />
<Message severity="warn" text="Warning Message" />
<Message severity="error" text="Error Message" />
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Message severity="success" text="Success Message" />
            <Message severity="info" text="Info Message" />
            <Message severity="warn" text="Warning Message" />
            <Message severity="error" text="Error Message" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Message severity="success" text="Success Message" />
            <Message severity="info" text="Info Message" />
            <Message severity="warn" text="Warning Message" />
            <Message severity="error" text="Error Message" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>severity</i> property specifies the type of the message.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <Message severity="success" text="Success Message" />
                <Message severity="info" text="Info Message" />
                <Message severity="warn" text="Warning Message" />
                <Message severity="error" text="Error Message" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
