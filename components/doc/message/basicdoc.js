import { Message } from '../../lib/message/Message';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const code = {
        basic: `
<Message severity="info" text="Message Content" />
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function BasicDoc() {

    return (
        <div className="card flex justify-content-center">
            <Message severity="info" text="Message Content" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function BasicDoc() {

    return (
        <div className="card flex justify-content-center">
            <Message severity="info" text="Message Content" />
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
            <div className="card flex justify-content-center">
                <Message severity="info" text="Message Content" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
