'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function MultipleDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Group multiple>
                <ToggleButton.Root value="bold">
                    <ToggleButton.Indicator>Bold</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="italic">
                    <ToggleButton.Indicator>Italic</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="underline">
                    <ToggleButton.Indicator>Underline</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButton.Group>
        </div>
    );
}
