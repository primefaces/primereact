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
                    <img alt="logo" src={`${contextPath}/images/logo.png`} width="32" />
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
                <img alt="logo" src="images/logo.png" onError={(e) => (e.target.src = 'https://www.primefaces.org/cdn/images/placeholder.png')} width="32" />
                <div className="ml-2">Always bet on Prime.</div>
            </React.Fragment>
        )
    });
}, []);
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function TemplateDemo() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []);

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

export default function TemplateDemo() {
    const msgs = useRef<Messages>(null);

    useEffect(() => {
        msgs.current?.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/cdn/images/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []);

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
                <p>Custom content inside a message is defined with the <i>content</i> option.</p> 
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
