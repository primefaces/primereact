import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function InvalidDemo() {
    const [pressedState, setPressedState] = React.useState(false);

    return (
        <div className="card flex items-center justify-center">
            <ToggleButton pressed={pressedState} onPressedChange={(e) => setPressedState(e.pressed)} invalid={!pressedState}>
                <ToggleButton.Indicator>Invalid</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
