'use client';
import type { CheckboxGroupValueChangeEvent } from '@primereact/types/shared/checkbox';
import { Checkbox } from 'primereact/checkbox';
import React from 'react';

export default function GroupDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="card flex items-center justify-center">
            <Checkbox.Group defaultValue={['Cheese']} value={value} onValueChange={(e: CheckboxGroupValueChangeEvent) => setValue(e.value as string[])} className="gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                    <Checkbox inputId="cheese" value="Cheese" />
                    <label htmlFor="cheese">Cheese</label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="mushroom" value="Mushroom" />
                    <label htmlFor="mushroom">Mushroom</label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="pepper" value="Pepper" />
                    <label htmlFor="pepper">Pepper</label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="onion" value="Onion" />
                    <label htmlFor="onion">Onion</label>
                </div>
            </Checkbox.Group>
        </div>
    );
}
