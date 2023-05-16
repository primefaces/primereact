import { Message } from '../../../lib/message/Message';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';

export function PTDoc(props) {
    const code = {
        basic: `
<Message
    text="Message Content"
    pt={{
        root: { className: 'bg-yellow-100' },
        icon: { className: 'hidden' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Message
                text="Message Content"
                pt={{
                    root: { className: 'bg-yellow-100' },
                    icon: { className: 'hidden' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function PTDemo() {
    return (
        <div className="card flex justify-content-center">
            <Message
                text="Message Content"
                pt={{
                    root: { className: 'bg-yellow-100' },
                    icon: { className: 'hidden' }
                }}
            />
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
                <Message
                    text="Message Content"
                    pt={{
                        root: { className: 'bg-yellow-100' },
                        icon: { className: 'hidden' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
