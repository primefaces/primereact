'use client';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import { Label } from 'primereact/label';
import * as React from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function IftaLabelDemo() {
    return (
        <div className="flex justify-center">
            <Label.Ifta>
                <Select.Root options={cities} optionLabel="name" variant="filled" className="w-full md:w-56">
                    <Select.Trigger id="select" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label.Root htmlFor="select" className="mb-2">
                    City
                </Label.Root>
            </Label.Ifta>
        </div>
    );
}
