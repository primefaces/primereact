'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

interface Technology {
    label: string;
    value: string;
}

interface TechCategory {
    label: string;
    code: string;
    items: Technology[];
}

const techStack: TechCategory[] = [
    {
        label: 'Frontend',
        code: 'FE',
        items: [
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
        ]
    },
    {
        label: 'Backend',
        code: 'BE',
        items: [
            { label: 'Node.js', value: 'nodejs' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
            { label: 'Go', value: 'go' }
        ]
    },
    {
        label: 'Database',
        code: 'DB',
        items: [
            { label: 'PostgreSQL', value: 'postgresql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'Redis', value: 'redis' },
            { label: 'MySQL', value: 'mysql' }
        ]
    }
];

const filterItems = (items: Technology[], query: string): Technology[] => {
    if (!query) return items;

    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery));
};

export default function GroupDemo() {
    const [filteredTech, setFilteredTech] = React.useState<TechCategory[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query;
        const _filteredTech: TechCategory[] = [];

        for (const category of techStack) {
            const filteredItems = filterItems(category.items, query);

            if (filteredItems.length) {
                _filteredTech.push({ ...category, items: filteredItems });
            }
        }

        setFilteredTech(_filteredTech);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={filteredTech} optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" onComplete={search}>
                <AutoComplete.Input placeholder="Search technologies..." />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
