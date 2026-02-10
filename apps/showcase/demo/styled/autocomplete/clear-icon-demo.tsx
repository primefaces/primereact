'use client';
import { Times } from '@primeicons/react/times';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const productCategories = [
    { label: 'Electronics', value: 'electronics', count: 1247 },
    { label: 'Clothing', value: 'clothing', count: 856 },
    { label: 'Garden', value: 'home', count: 634 },
    { label: 'Sports', value: 'sports', count: 421 },
    { label: 'Books', value: 'books', count: 2103 },
    { label: 'Toys', value: 'toys', count: 312 }
];

export default function ClearIconDemo() {
    const [filteredCategories, setFilteredCategories] = React.useState<typeof productCategories>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredCategories(query ? productCategories.filter((cat) => cat.label.toLowerCase().includes(query)) : [...productCategories]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredCategories} optionLabel="label" onComplete={search} className="w-full md:w-56">
                <AutoComplete.Value placeholder="Search categories..." className="w-full" />

                <AutoComplete.ClearIcon>
                    <Times />
                </AutoComplete.ClearIcon>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Panel>
                            <AutoComplete.List>
                                <AutoComplete.Options style={{ maxHeight: '14rem' }}>
                                    {filteredCategories.map((cat, index) => (
                                        <AutoComplete.Option key={cat.value} index={index} uKey={cat.value}>
                                            <div className="flex items-center justify-between w-full">
                                                <span>{cat.label}</span>
                                                <Tag severity="secondary" rounded>
                                                    {cat.count}
                                                </Tag>
                                            </div>
                                        </AutoComplete.Option>
                                    ))}
                                </AutoComplete.Options>
                                <AutoComplete.Empty className="text-sm">No categories found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Panel>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
