'use client';

import type { ListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { Listbox } from 'primereact/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CheckmarkSelectionDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="flex justify-center">
            <Listbox
                value={selectedCity}
                onValueChange={(e: ListboxValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                checkmark
                className="w-full md:w-56"
            >
                <Listbox.Options />
            </Listbox>
        </div>
    );
}
