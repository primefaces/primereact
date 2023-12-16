import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Message } from '@/components/lib/message/Message';

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
            <DocSectionText {...props}></DocSectionText>
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
