'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

interface City {
    label: string;
    value: string;
}

interface CountryGroup {
    label: string;
    code: string;
    items: City[];
}

const groupedCities: CountryGroup[] = [
    {
        label: 'Germany',
        code: 'DE',
        items: [
            { label: 'Berlin', value: 'Berlin' },
            { label: 'Frankfurt', value: 'Frankfurt' },
            { label: 'Hamburg', value: 'Hamburg' },
            { label: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        items: [
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'New York', value: 'New York' },
            { label: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        items: [
            { label: 'Kyoto', value: 'Kyoto' },
            { label: 'Osaka', value: 'Osaka' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Yokohama', value: 'Yokohama' }
        ]
    }
];

const filterItems = (items: City[], query: string): City[] => {
    if (!query) return items;

    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery));
};

export default function GroupDemo() {
    const [filteredCities, setFilteredCities] = React.useState<CountryGroup[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query;
        const _filteredCities: CountryGroup[] = [];

        for (const country of groupedCities) {
            const filteredItems = filterItems(country.items, query);

            if (filteredItems.length) {
                _filteredCities.push({ ...country, items: filteredItems });
            }
        }

        setFilteredCities(_filteredCities);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCities} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" onComplete={search}>
                <AutoComplete.Input placeholder="Hint: type 'a'" />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
