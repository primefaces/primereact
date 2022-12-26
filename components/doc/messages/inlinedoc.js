import { Message } from '../../lib/message/Message';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InlineDoc(props) {
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

export default function InlineDoc() {

    return (
        <div className="grid">
            <div className="col-12 md:col-3">
                <Message severity="info" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="success" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="warn" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="error" text="Message Content" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function InlineDoc() {

    return (
        <div className="grid">
            <div className="col-12 md:col-3">
                <Message severity="info" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="success" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="warn" text="Message Content" />
            </div>
            <div className="col-12 md:col-3">
                <Message severity="error" text="Message Content" />
            </div>
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
            <div className="card">
                <div className="grid">
                    <div className="col-12 md:col-3">
                        <Message severity="info" text="Message Content" />
                    </div>
                    <div className="col-12 md:col-3">
                        <Message severity="success" text="Message Content" />
                    </div>
                    <div className="col-12 md:col-3">
                        <Message severity="warn" text="Message Content" />
                    </div>
                    <div className="col-12 md:col-3">
                        <Message severity="error" text="Message Content" />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
