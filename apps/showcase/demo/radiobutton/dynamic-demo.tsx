'use client';
import type { RadioButtonGroupValueChangeEvent } from '@primereact/types/shared/radiobutton';
import { RadioButton } from 'primereact/radiobutton';
import { RadioButtonGroup } from 'primereact/radiobutton/group';
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
        <div className="card flex items-center justify-center">
            <RadioButtonGroup className="flex flex-wrap gap-4" value={ingredient} onValueChange={(e: RadioButtonGroupValueChangeEvent) => setIngredient(e.value as string)}>
                {categories.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <RadioButton inputId={item.key} name="pizza" value={item.key} />
                        <label htmlFor={item.key}>{item.name}</label>
                    </div>
                ))}
            </RadioButtonGroup>
        </div>
    );
}
