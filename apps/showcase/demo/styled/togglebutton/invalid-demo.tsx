'use client';
import type { ToggleButtonRootChangeEvent } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from '@primereact/ui/togglebutton';
import * as React from 'react';

export default function InvalidDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root
                pressed={pressedState}
                onPressedChange={(e: ToggleButtonRootChangeEvent) => setPressedState(e.pressed)}
                invalid={!pressedState}
            >
                <ToggleButton.Indicator>Invalid</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
