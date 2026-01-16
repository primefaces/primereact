'use client';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Select.Root options={cities} optionLabel="name" size="small" className="w-full md:w-56">
                <Select.Trigger>
                    <span>Small</span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Select.Trigger>
                    <span>Normal</span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" size="large" className="w-full md:w-56">
                <Select.Trigger>
                    <span>Large</span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
