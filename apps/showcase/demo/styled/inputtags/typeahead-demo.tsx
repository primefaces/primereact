'use client';
import type { InputTagsRootInstance, InputTagsRootValueChangeEvent, useInputTagsCompleteEvent } from '@primereact/types/shared/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
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
            { label: 'Svelte', value: 'svelte' },
            { label: 'Next.js', value: 'nextjs' },
            { label: 'Nuxt', value: 'nuxt' }
        ]
    },
    {
        label: 'Backend',
        code: 'BE',
        items: [
            { label: 'Node.js', value: 'nodejs' },
            { label: 'Python', value: 'python' },
            { label: 'Java', value: 'java' },
            { label: 'Go', value: 'go' },
            { label: 'Rust', value: 'rust' }
        ]
    },
    {
        label: 'Database',
        code: 'DB',
        items: [
            { label: 'PostgreSQL', value: 'postgresql' },
            { label: 'MongoDB', value: 'mongodb' },
            { label: 'Redis', value: 'redis' },
            { label: 'MySQL', value: 'mysql' },
            { label: 'SQLite', value: 'sqlite' }
        ]
    }
];

const filterItems = (items: Technology[], query: string, selectedLabels: string[]): Technology[] => {
    const normalizedQuery = query.toLowerCase();

    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery) && !selectedLabels.includes(item.label));
};

export default function TypeaheadDemo() {
    const [skills, setSkills] = React.useState<string[]>([]);
    const [query, setQuery] = React.useState('');

    const filteredTech = React.useMemo(() => {
        const _filteredTech: TechCategory[] = [];

        for (const category of techStack) {
            const filteredItems = filterItems(category.items, query, skills);

            if (filteredItems.length) {
                _filteredTech.push({ ...category, items: filteredItems });
            }
        }

        return _filteredTech;
    }, [query, skills]);

    return (
        <InputTags.Root
            value={skills}
            options={filteredTech}
            optionLabel="label"
            optionGroupLabel="label"
            optionGroupChildren="items"
            onValueChange={(e: InputTagsRootValueChangeEvent) => setSkills(e.value ?? [])}
            onComplete={(e: useInputTagsCompleteEvent) => setQuery(e.query)}
        >
            {(instance: InputTagsRootInstance) => (
                <>
                    {instance?.state.value.map((skill, index) => (
                        <InputTags.Item key={`${skill}_${index}`} index={index} />
                    ))}
                    <InputTags.Input placeholder="Search technologies..." />

                    <InputTags.Portal>
                        <InputTags.List>
                            <InputTags.Options style={{ maxHeight: '14rem' }} />
                        </InputTags.List>
                    </InputTags.Portal>
                </>
            )}
        </InputTags.Root>
    );
}
