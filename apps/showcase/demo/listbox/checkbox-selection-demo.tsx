import { ListboxChangeEvent } from '@primereact/types/listbox';
import type { CheckboxChangeEvent } from '@primereact/types/shared/checkbox';
import { Checkbox } from 'primereact/checkbox';
import { Listbox } from 'primereact/listbox';
import { useState } from 'react';

const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];

export default function CheckboxDemo() {
    const [selectedCity, setSelectedCity] = useState<string[] | null>(null);

    const isAllSelected = cities.every((city) => selectedCity?.includes(city.code));
    const indeterminate = cities.some((city) => selectedCity?.includes(city.code)) && !isAllSelected;

    return (
        <div className="card flex justify-center">
            <Listbox
                value={selectedCity}
                onValueChange={(e: ListboxChangeEvent) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                optionValue="code"
                multiple
                checkbox
                className="w-full md:w-56"
            >
                <Listbox.Header>
                    <Checkbox
                        indeterminate={indeterminate}
                        checked={isAllSelected}
                        onCheckedChange={(e: CheckboxChangeEvent) => setSelectedCity(e.checked ? cities.map((city) => city.code) : [])}
                    />
                </Listbox.Header>
                <Listbox.Options />
            </Listbox>
        </div>
    );
}
