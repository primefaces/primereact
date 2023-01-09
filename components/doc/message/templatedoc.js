import getConfig from 'next/config';
import React from 'react';
import { Message } from '../../lib/message/Message';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const itemTemplate = (
        <div className="flex align-items-center">
            <img alt="logo" src={contextPath + 'images/logo.png'} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" />
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
content={itemTemplate}
/>
        `,
        javascript: `
import React from 'react';
import { Message } from 'primereact/message';

export default function TemplateDoc() {
    const itemTemplate = (
        <div className="flex align-items-center">
            <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" />
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
                content={itemTemplate}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Message } from 'primereact/message';

export default function TemplateDoc() {
    const itemTemplate = (
        <div className="flex align-items-center">
            <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" />
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
                content={itemTemplate}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
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
                    content={itemTemplate}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
