import React, { useState, useEffect } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Button } from '../../../components/lib/button/Button';

export function DocumentDoc(props) {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    const code = {
        basic: `
<BlockUI blocked={blocked} fullScreen />
<Button label="Block" onClick={() => setBlocked(true)} />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function DocumentDemo() {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    return (
        <div className="card">
            <BlockUI blocked={blocked} fullScreen />
            <Button label="Block" onClick={() => setBlocked(true)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function DocumentDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);

    useEffect(() => {
        if (blocked) {
            setTimeout(() => {
                setBlocked(false);
            }, 3000);
        }
    }, [blocked]);

    return (
        <div className="card">
            <BlockUI blocked={blocked} fullScreen />
            <Button label="Block" onClick={() => setBlocked(true)} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Enabling <i>fullScreen</i> property controls the document.</p>
            </DocSectionText>
            <div className="card">
                <BlockUI blocked={blocked} fullScreen />
                <Button label="Block" onClick={() => setBlocked(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
