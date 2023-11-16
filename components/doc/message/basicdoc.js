import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Message } from '@/components/lib/message/Message';

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
