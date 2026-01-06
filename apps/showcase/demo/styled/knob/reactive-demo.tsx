'use client';

import { Button } from '@primereact/ui/button';
import { Knob } from '@primereact/ui/knob';
import * as React from 'react';

export default function ReactiveDemo() {
    const [value, setValue] = React.useState(0);

    return (
        <div className="flex flex-col items-center gap-2">
            <Knob.Root value={value} size={150} readOnly>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
            <div className="flex gap-2">
                <Button onClick={() => setValue(value + 1)} disabled={value === 100}>
                    <i className="pi pi-plus" />
                </Button>
                <Button onClick={() => setValue(value - 1)} disabled={value <= 0}>
                    <i className="pi pi-minus" />
                </Button>
            </div>
        </div>
    );
}
