import { Motion } from '@primereact/core/motion';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import * as React from 'react';

export default function ToggleableDemo() {
    const [show, setShow] = React.useState(true);

    return (
        <div className="card">
            <Panel>
                <Panel.Header>
                    <Panel.Title>Header</Panel.Title>
                    <Panel.HeaderActions>
                        <Button onClick={() => setShow((prev) => !prev)} rounded variant="text" iconOnly>
                            {show ? <MinusIcon /> : <PlusIcon />}
                        </Button>
                    </Panel.HeaderActions>
                </Panel.Header>
                <Motion in={show} name="p-toggleable-content">
                    <Panel.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Panel.Content>

                    <Panel.Footer>
                        <p className="m-0">Footer</p>
                    </Panel.Footer>
                </Motion>
            </Panel>
        </div>
    );
}
