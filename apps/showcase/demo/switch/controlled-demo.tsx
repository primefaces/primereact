import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import { Switch } from 'primereact/switch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="card flex justify-center items-center gap-2">
            <Switch inputId="mode" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>
            <label htmlFor="mode">Airplane Mode</label>
        </div>
    );
}
