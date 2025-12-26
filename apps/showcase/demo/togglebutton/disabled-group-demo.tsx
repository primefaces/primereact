'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledGroupDemo() {
    return (
        <div className="flex items-center gap-4 justify-center">
            <ToggleButton.Group disabled>
                <ToggleButton.Root value="off">
                    <ToggleButton.Indicator>Off</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="on">
                    <ToggleButton.Indicator>On</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>
            <ToggleButton.Group>
                <ToggleButton.Root value="option1">
                    <ToggleButton.Indicator>Option 1</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="option2" disabled>
                    <ToggleButton.Indicator>Option 2</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>
        </div>
    );
}
