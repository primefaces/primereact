'use client';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebuttongroup';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string[] | null>(null);

    return (
        <div className="flex items-center justify-center">
            <ToggleButtonGroup
                value={value}
                onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string[])}
                invalid={value === null}
            >
                <ToggleButton.Root value="monthly">
                    <ToggleButton.Indicator>Monthly</ToggleButton.Indicator>
                </ToggleButton.Root>
                <ToggleButton.Root value="yearly">
                    <ToggleButton.Indicator>Yearly</ToggleButton.Indicator>
                </ToggleButton.Root>
            </ToggleButtonGroup>
        </div>
    );
}
