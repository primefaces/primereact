'use client';
import { Checkbox } from 'primereact/checkbox';
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
        <div className="card flex items-center justify-center">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Checkbox inputId="indeterminate-checkbox" indeterminate={indeterminate} checked={isAllSelected} onCheckedChange={(e) => setValue(e.checked ? categories.map((category) => category.key) : [])} />
                    <label htmlFor="indeterminate-checkbox">Email Notifications</label>
                </div>
                <Checkbox.Group value={value} onValueChange={(e) => setValue(e.value)} className="flex-col gap-4 pl-7">
                    {categories.map((item) => (
                        <div key={item.key} className="flex items-center gap-2">
                            <Checkbox inputId={item.key} value={item.key} />
                            <label htmlFor={item.key}>{item.name}</label>
                        </div>
                    ))}
                </Checkbox.Group>
            </div>
        </div>
    );
}
