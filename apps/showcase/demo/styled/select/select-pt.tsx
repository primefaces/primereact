'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
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
        <div className="flex justify-center">
            <Select.Root id="city" options={cities} optionLabel="name" className="w-full md:w-56">
                <Select.Trigger>
                    <Select.Value placeholder="Select a City" />
                    <Select.Icon>
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Options style={{ maxHeight: '14rem' }} />
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
