import { Select } from '@primereact/ui/select';
import * as React from 'react';
import { ChevronDown } from '@primeicons/react/chevron-down';

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
                <Select.Trigger placeholder="Small" />
                <Select.Dropdown>
                    <ChevronDown />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                <Select.Trigger placeholder="Normal" />
                <Select.Dropdown>
                    <ChevronDown />
                </Select.Dropdown>

                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>

            <Select.Root options={cities} optionLabel="name" size="large" className="w-full md:w-56">
                <Select.Trigger placeholder="Large" />
                <Select.Dropdown>
                    <ChevronDown />
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
