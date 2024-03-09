import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Message } from '@/components/lib/message/Message';

export function TemplateDoc(props) {
    const content = (
        <div className="flex align-items-center">
            <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
            <div className="ml-2">Always bet on Prime.</div>
        </div>
    );

    const code = {
        basic: `
<Message
style={{
    border: 'solid #696cff',
    borderWidth: '0 0 0 6px',
    color: '#696cff'
}}
className="border-primary w-full justify-content-start"
severity="info"
content={content}
/>
        `,
        javascript: `
import React from 'react';
import { Message } from 'primereact/message';

export default function TemplateDemo() {
    const content = (
        <div className="flex align-items-center">
            <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
            <div className="ml-2">Always bet on Prime.</div>
        </div>
    );

    return (
        <div className="card">
            <Message
                style={{
                    border: 'solid #696cff',
                    borderWidth: '0 0 0 6px',
                    color: '#696cff'
                }}
                className="border-primary w-full justify-content-start"
                severity="info"
                content={content}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Message } from 'primereact/message';

export default function TemplateDemo() {
    const content = (
        <div className="flex align-items-center">
            <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
            <div className="ml-2">Always bet on Prime.</div>
        </div>
    );

    return (
        <div className="card">
            <Message
                style={{
                    border: 'solid #696cff',
                    borderWidth: '0 0 0 6px',
                    color: '#696cff'
                }}
                className="border-primary w-full justify-content-start"
                severity="info"
                content={content}
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
                    Custom content is displayed with the <i>content</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <Message
                    style={{
                        border: 'solid #696cff',
                        borderWidth: '0 0 0 6px',
                        color: '#696cff'
                    }}
                    className="border-primary w-full justify-content-start"
                    severity="info"
                    content={content}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
