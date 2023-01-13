import getConfig from 'next/config';
import React from 'react';
import { Message } from '../../lib/message/Message';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const content = (
        <div className="flex align-items-center">
            <img alt="logo" src={contextPath + 'images/logo.png'} width="32" />
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
            <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/cdn/images/placeholder.png')} width="32" />
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
            <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/cdn/images/placeholder.png')} width="32" />
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
                <p>Custom content is displayed with the <i>content</i> property.</p>
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
