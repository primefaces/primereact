'use client';
import type { RadioButtonGroupChangeEvent } from '@primereact/types/shared/radiobuttongroup';
import { Label } from '@primereact/ui/label';
import { RadioButton } from '@primereact/ui/radiobutton';
import { RadioButtonGroup } from '@primereact/ui/radiobuttongroup';
import * as React from 'react';

export default function DynamicDemo() {
    const [ingredient, setIngredient] = React.useState<string | undefined>();
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    return (
        <div className="flex items-center justify-center">
            <RadioButtonGroup
                className="flex flex-wrap gap-4"
                value={ingredient}
                onValueChange={(e: RadioButtonGroupChangeEvent) => setIngredient(e.value as string)}
            >
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton.Root inputId={item.key} name="category" value={item.key}>
                            <RadioButton.Box>
                                <RadioButton.Indicator />
                            </RadioButton.Box>
                        </RadioButton.Root>
                        <Label.Root htmlFor={item.key}>{item.name}</Label.Root>
                    </div>
                ))}
            </RadioButtonGroup>
        </div>
    );
}
