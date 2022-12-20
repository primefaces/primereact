import React, { useState } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Panel } from '../../../components/lib/panel/Panel';
import { Button } from '../../../components/lib/button/Button';

export function PanelDoc(props) {
    const [blockedPanel, setBlockedPanel] = useState(false);

    const blockPanel = () => {
        setBlockedPanel(true);
    };

    const unblockPanel = () => {
        setBlockedPanel(false);
    };

    const code = {
        basic: `
<Button type="button" className='mr-2' label="Block" onClick={blockPanel} />
<Button type="button" label="Unblock" onClick={unblockPanel} />
<BlockUI blocked={blockedPanel}>
    <Panel header="Blockable Panel" className='mt-4'>
        <p>
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

export const PanelDoc = () => {
    const [blockedPanel, setBlockedPanel] = useState(false);

    const blockPanel = () => {
        setBlockedPanel(true);
    };

    const unblockPanel = () => {
        setBlockedPanel(false);
    };

    return (
        <div className="card flex flex-column">
        <div className="flex flex-row flex-wrap mb-2 gap-2">
            <Button type="button" className='mr-2' label="Block" onClick={blockPanel} />
            <Button type="button" label="Unblock" onClick={unblockPanel} />
        </div>
        <BlockUI blocked={blockedPanel}>
            <Panel header="Blockable Panel" className='mt-4'>
                <p>
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

export const PanelDoc = () => {
    const [blockedPanel, setBlockedPanel] = useState<boolean>(false);

    function blockPanel(): void {
        setBlockedPanel(true);
    };

    function unblockPanel(): void {
        setBlockedPanel(false);
    };

    return (
        <div className="card flex flex-column">
        <div className="flex flex-row flex-wrap mb-2 gap-2">
            <Button type="button" className='mr-2' label="Block" onClick={blockPanel} />
            <Button type="button" label="Unblock" onClick={unblockPanel} />
        </div>
        <BlockUI blocked={blockedPanel}>
            <Panel header="Blockable Panel" className='mt-4'>
                <p>
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
                <p>Panel Demo Content.</p>
            </DocSectionText>
            <div className="card flex flex-column">
                <div className="flex flex-row flex-wrap mb-2">
                    <Button type="button" className="mr-2" label="Block" onClick={blockPanel} />
                    <Button type="button" label="Unblock" onClick={unblockPanel} />
                </div>
                <BlockUI blocked={blockedPanel}>
                    <Panel header="Blockable Panel" className="mt-4">
                        <p>
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
