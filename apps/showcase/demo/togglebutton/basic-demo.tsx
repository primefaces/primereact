'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton>
                <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
