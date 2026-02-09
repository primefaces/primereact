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

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <Select.Root options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
                <Select.Trigger placeholder="Select a City" />
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
