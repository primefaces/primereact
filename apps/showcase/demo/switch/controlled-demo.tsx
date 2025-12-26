'use client';

import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import { Switch } from 'primereact/switch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <Switch.Root inputId="mode" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch.Root>
            <label htmlFor="mode">Airplane Mode</label>
        </div>
    );
}
