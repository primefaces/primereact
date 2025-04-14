import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import * as React from 'react';

export default function BasicDemo() {
    const [blocked, setBlocked] = React.useState(false);

    return (
        <div className="card">
            <div className="mb-4">
                <button className="mr-2" onClick={() => setBlocked(true)}>
                    Block
                </button>
                <button onClick={() => setBlocked(false)}>Unblock</button>
            </div>
            <BlockUI blocked={blocked}>
                <BlockUI.Mask />
                <Panel>
                    <Panel.Header>Basic</Panel.Header>
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel.Content>
                </Panel>
            </BlockUI>
        </div>
    );
}
