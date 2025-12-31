'use client';

import { Switch } from '@/ui/switch';
import { SwitchChangeEvent } from '@primereact/types/shared/switch';
import * as React from 'react';

export default function InvalidDemo() {
    const [checked, setChecked] = React.useState(false);

    return (
        <div className="flex justify-center">
            <Switch checked={checked} onCheckedChange={(event: SwitchChangeEvent) => setChecked(event.checked)} invalid={!checked} />
        </div>
    );
}
