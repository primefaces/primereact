'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton disabled>
                <ToggleButton.Indicator>Disabled</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
