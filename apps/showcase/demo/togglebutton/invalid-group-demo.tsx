'use client';

import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function InvalidGroupDemo() {
    const [value, setValue] = React.useState<string[] | null>(null);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Group
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
            </ToggleButton.Group>
        </div>
    );
}
