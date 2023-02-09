import { Message } from '../../lib/message/Message';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
            <Message severity="info" text="Info Message" />
            <Message severity="success" text="Success Message" />
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
            <Message severity="info" text="Info Message" />
            <Message severity="success" text="Success Message" />
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
                <Message severity="info" text="Info Message" />
                <Message severity="success" text="Success Message" />
                <Message severity="warn" text="Warning Message" />
                <Message severity="error" text="Error Message" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
