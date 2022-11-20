import React, { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import getConfig from 'next/config';

export function StaticDoc(props) {
    const msgs1 = useRef(null);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        msgs1.current.show({
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
<Messages ref={msgs1} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function StaticDoc() {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Messages ref={msgs1} />
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function StaticDoc() {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Messages ref={msgs1} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Static</p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs1} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
