'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckboxGroup } from '@/components/ui/checkboxgroup';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';

export default function DynamicDemo() {
    const [value, setValue] = React.useState<string[]>([]);
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    return (
        <div className="flex items-center justify-center">
            <CheckboxGroup value={value} onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])} className="flex-col gap-4">
                {categories.map((category) => (
                    <div key={category.key} className="flex items-center gap-2">
                        <Checkbox inputId={category.key} value={category.key} />
                        <Label.Root htmlFor={category.key}>{category.name}</Label.Root>
                    </div>
                ))}
            </CheckboxGroup>
        </div>
    );
}
