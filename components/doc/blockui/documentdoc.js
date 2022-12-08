import React, { useState, useEffect } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Button } from '../../../components/lib/button/Button';

export function DocumentDoc(props) {
    const [blockedDocument, setBlockedDocument] = useState(false);

    const blockDocument = () => {
        setBlockedDocument(true);
    };

    useEffect(() => {
        if (blockedDocument) {
            setTimeout(() => {
                setBlockedDocument(false);
            }, 3000);
        }
    }, [blockedDocument]);

    const code = {
        basic: `
<BlockUI blocked={blockedDocument} fullScreen />
<Button type="button" label="Block" onClick={blockDocument} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export const DocumentDoc = () => {
    const [blockedDocument, setBlockedDocument] = useState(false);

    const blockDocument = () => {
        setBlockedDocument(true);
    };

    return (
        <div className="card">
            <BlockUI blocked={blockedDocument} fullScreen />
            <Button type="button" label="Block" onClick={blockDocument} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export const DocumentDoc = () => {
    const [blockedDocument, setBlockedDocument] = useState<boolean>(false);

    function blockDocument(): void {
        setBlockedDocument(true);
    };

    return (
        <div className="card">
            <BlockUI blocked={blockedDocument} fullScreen />
            <Button type="button" label="Block" onClick={blockDocument} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Document Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <BlockUI blocked={blockedDocument} fullScreen />
                <Button type="button" label="Block" onClick={blockDocument} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
