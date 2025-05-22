import { BlockUI } from 'primereact/blockui';
import { Panel } from 'primereact/panel';
import * as React from 'react';

export default function TemplateDemo() {
    const [blocked, setBlocked] = React.useState(true);
    const buttonText = blocked ? 'Subscribe' : 'Unsubscribe';

    return (
        <div className="card">
            <BlockUI blocked={blocked}>
                <BlockUI.Mask className="flex items-center justify-center">
                    <i className="pi pi-lock text-surface-500 dark:text-white" style={{ fontSize: '3rem' }}></i>
                </BlockUI.Mask>
                <Panel>
                    <Panel.Header>Prime React News</Panel.Header>
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel.Content>
                </Panel>
            </BlockUI>
            <div className="mt-3 flex flex-col items-center">
                <h3>Continue reading?</h3>
                <button onClick={() => setBlocked((prevState) => !prevState)}>{buttonText}</button>
            </div>
        </div>
    );
}
