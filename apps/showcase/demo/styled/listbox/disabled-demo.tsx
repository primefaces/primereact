'use client';

import { Listbox } from 'primereact/listbox';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Listbox.Root options={cities} optionLabel="name" optionValue="code" disabled className="w-full md:w-56">
                <Listbox.Options />
            </Listbox.Root>
        </div>
    );
}
