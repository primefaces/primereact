import { Message } from '../../lib/message/Message';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SeveritiesDoc(props) {
    const code = {
        basic: `
<Message severity="info" text="Message Content" />
<Message severity="success" text="Message Content" />
<Message severity="warn" text="Message Content" />
<Message severity="error" text="Message Content" />
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function SeveritiesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center gap-3">
            <Message severity="info" text="Message Content" />
            <Message severity="success" text="Message Content" />
            <Message severity="warn" text="Message Content" />
            <Message severity="error" text="Message Content" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function SeveritiesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center gap-3">
            <Message severity="info" text="Message Content" />
            <Message severity="success" text="Message Content" />
            <Message severity="warn" text="Message Content" />
            <Message severity="error" text="Message Content" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Message component is used to display inline message mostly within forms.</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center gap-3">
                <Message severity="info" text="Message Content" />

                <Message severity="success" text="Message Content" />

                <Message severity="warn" text="Message Content" />

                <Message severity="error" text="Message Content" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
