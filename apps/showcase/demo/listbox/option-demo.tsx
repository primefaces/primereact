import type { ListboxValueChangeEvent } from '@primereact/types/listbox';
import { Listbox } from 'primereact/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function OptionDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);

    return (
        <div className="card flex justify-center">
            <Listbox
                value={selectedCity}
                onValueChange={(e: ListboxValueChangeEvent) => setSelectedCity(e.value)}
                options={cities}
                optionKey="code"
                className="w-full md:w-56"
            >
                <Listbox.Options>
                    <Listbox.Option uKey="NY">New York</Listbox.Option>
                    <Listbox.Option uKey="RM">Rome</Listbox.Option>
                    <Listbox.Option uKey="LDN">London</Listbox.Option>
                    <Listbox.Option uKey="IST">Istanbul</Listbox.Option>
                    <Listbox.Option uKey="PRS">Paris</Listbox.Option>
                </Listbox.Options>
            </Listbox>
        </div>
    );
}
