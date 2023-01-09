import getConfig from 'next/config';
import React, { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const msgs = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        msgs.current.show({
            severity: 'info',
            sticky: true,
            content: (
                <React.Fragment>
                    <img alt="logo" src={`${contextPath}/images/logo.png`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
useEffect(() => {
    msgs.current.show({
        severity: 'info',
        sticky: true,
        content: (
            <React.Fragment>
                <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} width="32" />
                <div className="ml-2">Always bet on Prime.</div>
            </React.Fragment>
        )
    });
}, []); // eslint-disable-line react-hooks/exhaustive-deps
<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function TemplateDoc() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function TemplateDoc() {
    const msgs = useRef<Messages>(null);

    useEffect(() => {
        msgs.current?.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <Messages ref={msgs} />
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
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
