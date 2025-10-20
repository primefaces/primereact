import { ListboxChangeEvent } from '@primereact/types/listbox';
import { Listbox } from 'primereact/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function BasicDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="card flex justify-center">
            <Listbox value={selectedCity} onValueChange={(e: ListboxChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" optionValue="code" className="w-full md:w-56">
                <Listbox.Options />
            </Listbox>
        </div>
    );
}
