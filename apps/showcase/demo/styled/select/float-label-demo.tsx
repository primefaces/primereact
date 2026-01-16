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

export default function FloatLabelDemo() {
    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <Label.Float>
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="over_label" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label.Root htmlFor="over_label">Over Label</Label.Root>
            </Label.Float>

            <Label.Float variant="in">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="in_label" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label.Root htmlFor="in_label">In Label</Label.Root>
            </Label.Float>

            <Label.Float variant="on">
                <Select.Root options={cities} optionLabel="name" className="w-full md:w-56">
                    <Select.Trigger id="on_label" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>

                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Label.Root htmlFor="on_label">On Label</Label.Root>
            </Label.Float>
        </div>
    );
}
