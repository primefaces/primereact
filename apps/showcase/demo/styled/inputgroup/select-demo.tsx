'use client';
import { ChevronDownIcon } from '@primereact/icons';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const cities = [
    { label: 'Select a City', value: '' },
    { label: 'New York', value: 'ny' },
    { label: 'Rome', value: 'rm' },
    { label: 'London', value: 'ldn' },
    { label: 'Istanbul', value: 'ist' },
    { label: 'Paris', value: 'prs' }
];

export default function SelectDemo() {
    const [city, setCity] = React.useState<string>('');

    return (
        <div className="space-y-4 max-w-md mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-map-marker" />
                </InputGroup.Addon>
                <Select.Root
                    value={city}
                    onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <Select.Trigger placeholder="Select a City" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>
                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" className="border-r-0" />
                <Select.Root
                    value={city}
                    onValueChange={(e: SelectValueChangeEvent) => setCity(e.value as string)}
                    options={cities}
                    optionLabel="label"
                    optionValue="value"
                    className="flex-1"
                >
                    <Select.Trigger placeholder="Select a City" />
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>
                    <Select.Portal>
                        <Select.List>
                            <Select.Options style={{ maxHeight: '14rem' }} />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>
            </InputGroup.Root>
        </div>
    );
}
