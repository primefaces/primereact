'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function SizesDemo() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            <ToggleButton.Root size="small" className="min-w-16">
                <ToggleButton.Indicator>Small</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root size="normal" className="min-w-20">
                <ToggleButton.Indicator>Normal</ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root size="large" className="min-w-28">
                <ToggleButton.Indicator>Large</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
