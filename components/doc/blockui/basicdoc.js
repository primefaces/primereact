import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { BlockUI } from '../../../components/lib/blockui/BlockUI';
import { Panel } from '../../../components/lib/panel/Panel';

export function BasicDemo(props) {
    const code = {
        basic: `
<BlockUI>
    <Panel header="Basic" style={{ marginTop: '20px' }}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
            id est laborum.
        </p>
    </Panel>
</BlockUI>
        `,
        javascript: `
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';

export const BasicDemo = () => {

    return (
        <div className="card">
        <BlockUI>
            <Panel header="Basic" style={{ marginTop: '20px' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                </p>
            </Panel>
        </BlockUI>
    </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';

export const BasicDemo = () => {

    return (
        <div className="card">
        <BlockUI>
            <Panel header="Basic" style={{ marginTop: '20px' }}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
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
                <p>Basic Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <BlockUI>
                    <Panel header="Basic" style={{ marginTop: '20px' }}>
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
