'use client';

import type { ListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { IconField } from 'primereact/iconfield';
import { InputText } from 'primereact/inputtext';
import { Listbox } from 'primereact/listbox';
import { useMemo, useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function FilterDemo() {
    const [selectedCity, setSelectedCity] = useState<string | null>(null);
    const [filterValue, setFilterValue] = useState<string>('');
    const filteredCities = useMemo(() => cities.filter((city) => city.name.toLowerCase().startsWith(filterValue.toLowerCase())), [filterValue]);

    return (
        <div className="flex justify-center">
            <Listbox
                value={selectedCity}
                onValueChange={(e: ListboxValueChangeEvent) => setSelectedCity(e.value as string | null)}
                options={filteredCities}
                optionLabel="name"
                optionValue="code"
                className="w-full md:w-56"
            >
                <Listbox.Header>
                    <IconField>
                        <Listbox.Filter
                            as={InputText}
                            placeholder="Search city"
                            value={filterValue}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                        />
                        <IconField.Icon>
                            <i className="pi pi-search" />
                        </IconField.Icon>
                    </IconField>
                </Listbox.Header>
                <Listbox.Options />
                <Listbox.Empty>No options found</Listbox.Empty>
            </Listbox>
        </div>
    );
}
