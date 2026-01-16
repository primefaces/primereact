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

export default function SelectPTDemo() {
    return (
        <Select.Root id="city" options={cities} optionLabel="name" className="w-full md:w-56">
            <Select.Trigger>
                <span>Select a City</span>
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
    );
}
