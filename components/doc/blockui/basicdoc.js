import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useState } from 'react';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Panel } from '../../../components/lib/panel/Panel';

export function BasicDoc(props) {
    const [blocked, setBlocked] = useState(false);

    const code = {
        basic: `
<div className="mb-3">
    <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
    <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
</div>
<BlockUI blocked={blocked}>
    <Panel header="Basic">
        <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
        </p>
    </Panel>
</BlockUI>
        `,
        javascript: `
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [blocked, setBlocked] = useState(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const [blocked, setBlocked] = useState<boolean>(false);

    return (
        <div className="card">
            <div className="mb-3">
                <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
            </div>
            <BlockUI blocked={blocked}>
                <Panel header="Basic">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                    </p>
                </Panel>
            </BlockUI>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The element to block should be placed as a child of BlockUI and <i>blocked</i> property is required to control the state.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="mb-3">
                    <Button label="Block" onClick={() => setBlocked(true)} className="mr-2"></Button>
                    <Button label="Unblock" onClick={() => setBlocked(false)} severity="secondary"></Button>
                </div>
                <BlockUI blocked={blocked}>
                    <Panel header="Basic">
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel>
                </BlockUI>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
