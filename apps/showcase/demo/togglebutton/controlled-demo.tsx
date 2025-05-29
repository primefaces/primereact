import type { ToggleButtonChangeEvent } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function ControlledDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="card flex items-center justify-center">
            <ToggleButton pressed={pressedState} onPressedChange={(e: ToggleButtonChangeEvent) => setPressedState(e.pressed)}>
                <ToggleButton.Indicator>{pressedState ? 'Pressed' : 'Not Pressed'}</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
