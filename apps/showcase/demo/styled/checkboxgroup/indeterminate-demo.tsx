'use client';

import { CheckIcon, MinusIcon } from '@primereact/icons';
import type { CheckboxRootChangeEvent } from '@primereact/types/shared/checkbox';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
import React from 'react';

const categories = [
    { name: 'Product updates', key: 'product-updates' },
    { name: 'Weekly newsletter', key: 'weekly-newsletter' },
    { name: 'Security alerts', key: 'security-alerts' }
];

export default function IndeterminateDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    const isAllSelected = categories.every((category) => value.includes(category.key));
    const indeterminate = categories.some((category) => value.includes(category.key)) && !isAllSelected;

    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox.Root
                        inputId="indeterminate-checkbox"
                        indeterminate={indeterminate}
                        checked={isAllSelected}
                        onCheckedChange={(e: CheckboxRootChangeEvent) => setValue(e.checked ? categories.map((category) => category.key) : [])}
                    >
                        <Checkbox.Box>
                            <Checkbox.Indicator className="data-checked:block! hidden!" as={CheckIcon} />
                            <Checkbox.Indicator className="data-indeterminate:data-unchecked:block! hidden!" as={MinusIcon} />
                        </Checkbox.Box>
                    </Checkbox.Root>
                    <Label.Root htmlFor="indeterminate-checkbox">Email Notifications</Label.Root>
                </div>
                <CheckboxGroup
                    value={value}
                    onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                    className="flex-col gap-4 pl-7"
                >
                    {categories.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                            <Checkbox.Root inputId={item.key} value={item.key}>
                                <Checkbox.Box>
                                    <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                                </Checkbox.Box>
                            </Checkbox.Root>
                            <Label.Root htmlFor={item.key}>{item.name}</Label.Root>
                        </div>
                    ))}
                </CheckboxGroup>
            </div>
        </div>
    );
}
