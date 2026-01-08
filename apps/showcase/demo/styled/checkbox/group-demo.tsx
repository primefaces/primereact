'use client';

import type { CheckboxGroupValueChangeEvent } from '@primereact/types/shared/checkbox';
import { Checkbox } from '@primereact/ui/checkbox';
import { Label } from '@primereact/ui/label';
import React from 'react';

export default function GroupDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <Checkbox.Group
                defaultValue={['Cheese']}
                value={value}
                onValueChange={(e: CheckboxGroupValueChangeEvent) => setValue(e.value as string[])}
                className="gap-4 flex-wrap"
            >
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="cheese" value="Cheese" />
                    <Label.Root htmlFor="cheese">Cheese</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="mushroom" value="Mushroom" />
                    <Label.Root htmlFor="mushroom">Mushroom</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="pepper" value="Pepper" />
                    <Label.Root htmlFor="pepper">Pepper</Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox.Root inputId="onion" value="Onion" />
                    <Label.Root htmlFor="onion">Onion</Label.Root>
                </div>
            </Checkbox.Group>
        </div>
    );
}
