import { Motion } from '@primereact/core/motion';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import * as React from 'react';

export default function ToggleableDemo() {
    const [show, setShow] = React.useState(true);

    return (
        <div className="card">
            <Fieldset>
                <Fieldset.Legend>
                    <Button onClick={() => setShow((prev) => !prev)} variant="text">
                        {show ? <MinusIcon /> : <PlusIcon />}
                        Legend
                    </Button>
                </Fieldset.Legend>
                <Motion in={show} name="p-toggleable-content">
                    <Fieldset.Content>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                    </Fieldset.Content>
                </Motion>
            </Fieldset>
        </div>
    );
}
