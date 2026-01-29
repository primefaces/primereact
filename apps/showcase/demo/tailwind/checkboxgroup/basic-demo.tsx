'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<string[]>();

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup
                defaultValue={['Cheese']}
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="gap-4 flex-wrap"
            >
                <div className="flex items-center gap-2">
                    <Checkbox inputId="cheese" value="Cheese" />
                    <Label htmlFor="cheese">Cheese</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="mushroom" value="Mushroom" />
                    <Label htmlFor="mushroom">Mushroom</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="pepper" value="Pepper" />
                    <Label htmlFor="pepper">Pepper</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox inputId="onion" value="Onion" />
                    <Label htmlFor="onion">Onion</Label>
                </div>
            </CheckboxGroup>
        </div>
    );
}
