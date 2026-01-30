'use client';
import type { ListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';
import { Listbox } from '@primereact/ui/listbox';
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
            <Listbox.Root
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
                        <InputIcon>
                            <i className="pi pi-search" />
                        </InputIcon>
                    </IconField>
                </Listbox.Header>
                <Listbox.Options />
                <Listbox.Empty>No options found</Listbox.Empty>
            </Listbox.Root>
        </div>
    );
}
