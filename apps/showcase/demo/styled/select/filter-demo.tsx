'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Search } from '@primeicons/react/search';
import { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Select } from '@primereact/ui/select';
import Image from 'next/image';
import * as React from 'react';

type Country = {
    name: string;
    code: string;
};

const countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'Turkey', code: 'TR' },
    { name: 'United States', code: 'US' }
];

export default function FilterDemo() {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);
    const [filterValue, setFilterValue] = React.useState<string>('');
    const filteredCountries = React.useMemo(
        () => countries.filter((country) => country.name.toLowerCase().startsWith(filterValue.toLowerCase())),
        [filterValue]
    );

    return (
        <div className="flex justify-center">
            <Select.Root
                options={filteredCountries}
                optionLabel="name"
                value={selectedCountry}
                onValueChange={(e: SelectValueChangeEvent) => setSelectedCountry(e.value as Country | null)}
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select a Country" />
                    <Select.Icon>
                        <ChevronDown />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Header>
                                    <IconField.Root>
                                        <Select.Filter
                                            as={InputText}
                                            value={filterValue}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)}
                                        />
                                        <IconField.Icon>
                                            <Search />
                                        </IconField.Icon>
                                    </IconField.Root>
                                </Select.Header>
                                <Select.Options style={{ maxHeight: '14rem' }}>
                                    {filteredCountries.map((country, index) => (
                                        <Select.Option key={country.code} index={index} uKey={country.code}>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    alt={country.name}
                                                    src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
                                                    className={`flag flag-${country.code.toLowerCase()} mr-2`}
                                                    width={18}
                                                    height={12}
                                                    style={{ width: '18px', height: '12px' }}
                                                />
                                                <span>{country.name}</span>
                                            </div>
                                        </Select.Option>
                                    ))}
                                </Select.Options>
                                <Select.Empty className="text-sm">No countries found</Select.Empty>
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
