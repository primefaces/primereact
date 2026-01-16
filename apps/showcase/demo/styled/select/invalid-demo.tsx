'use client';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string | null>(null);
    const [value2, setValue2] = React.useState<string | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Select.Root
                options={cities}
                optionLabel="name"
                invalid={!value}
                className="w-full md:w-56"
                value={value}
                onValueChange={(event: SelectValueChangeEvent) => setValue(event.value as string)}
            >
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

            <Select.Root
                options={cities}
                optionLabel="name"
                invalid={!value2}
                variant="filled"
                className="w-full md:w-56"
                value={value2}
                onValueChange={(event: SelectValueChangeEvent) => setValue2(event.value as string)}
            >
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
        </div>
    );
}
