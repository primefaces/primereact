'use client';

import { Switch } from '@/ui/switch';
import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import React from 'react';

export default function ControlledDemo() {
    const [checked, setChecked] = React.useState(true);

    return (
        <div className="flex justify-center items-center gap-2">
            <Switch inputId="mode" checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} />
            <label htmlFor="mode">Airplane Mode</label>
        </div>
    );
}
