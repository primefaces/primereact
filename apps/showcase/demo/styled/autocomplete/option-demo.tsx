'use client';
import { CountryService } from '@/services/country.service';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import Image from 'next/image';
import * as React from 'react';

interface Country {
    name: string;
    code: string;
}

export default function DropdownDemo() {
    const [countries, setCountries] = React.useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = React.useState<Country[]>([]);

    React.useEffect(() => {
        CountryService.getCountries().then((data) => setCountries(data));
    }, []);

    const search = (event: AutoCompleteCompleteEvent) => {
        if (!event.query.trim().length) {
            setFilteredCountries(countries);
        } else {
            setFilteredCountries(
                countries.filter((country) => {
                    return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                })
            );
        }
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCountries} optionKey="code" optionLabel="name" onComplete={search}>
                <AutoComplete.Input />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }}>
                            {filteredCountries.map((country, index) => (
                                <AutoComplete.Option key={country.code} index={index} uKey={country.code}>
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
                                </AutoComplete.Option>
                            ))}
                        </AutoComplete.Options>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
