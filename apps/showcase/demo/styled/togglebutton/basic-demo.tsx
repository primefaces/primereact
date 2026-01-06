'use client';

import { ToggleButton } from '@primereact/ui/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root>
                <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
