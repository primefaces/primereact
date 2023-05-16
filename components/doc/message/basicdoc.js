import { Message } from '../../lib/message/Message';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const code = {
        basic: `
<Message text="Message Content" />
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Message text="Message Content" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Message text="Message Content" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Text to display is defined with the <i>text</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Message text="Message Content" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
