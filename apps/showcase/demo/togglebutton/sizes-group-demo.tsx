'use client';

import { ToggleButton } from 'primereact/togglebutton';

export default function SizesGroupDemo() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <ToggleButton.Group size="small" multiple>
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
            <ToggleButton.Group size="normal" multiple>
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
            <ToggleButton.Group size="large" multiple>
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
