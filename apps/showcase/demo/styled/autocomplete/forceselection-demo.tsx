'use client';
import { CountryService } from '@/shared/services/country.service';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

interface Country {
    name: string;
    code: string;
}

export default function ForceSelectionDemo() {
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
            <AutoComplete.Root options={filteredCountries} optionKey="code" optionLabel="name" forceSelection onComplete={search}>
                <AutoComplete.Input />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                        <AutoComplete.Empty className="text-sm">No countries found</AutoComplete.Empty>
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
