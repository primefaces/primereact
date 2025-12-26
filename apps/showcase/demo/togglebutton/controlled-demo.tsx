'use client';

import type { ToggleButtonChangeEvent } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function ControlledDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root pressed={pressedState} onPressedChange={(e: ToggleButtonChangeEvent) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>{pressedState ? 'Pressed' : 'Not Pressed'}</ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
