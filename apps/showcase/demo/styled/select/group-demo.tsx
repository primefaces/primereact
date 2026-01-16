'use client';

import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const jobCategories = [
    {
        label: 'Engineering',
        code: 'eng',
        items: [
            { label: 'Frontend Developer', value: 'frontend' },
            { label: 'Backend Developer', value: 'backend' },
            { label: 'Full Stack Developer', value: 'fullstack' },
            { label: 'DevOps Engineer', value: 'devops' },
            { label: 'QA Engineer', value: 'qa' }
        ]
    },
    {
        label: 'Design',
        code: 'design',
        items: [
            { label: 'UI Designer', value: 'ui' },
            { label: 'UX Designer', value: 'ux' },
            { label: 'Product Designer', value: 'product-design' },
            { label: 'Brand Designer', value: 'brand' }
        ]
    },
    {
        label: 'Product',
        code: 'product',
        items: [
            { label: 'Product Manager', value: 'pm' },
            { label: 'Product Owner', value: 'po' },
            { label: 'Business Analyst', value: 'ba' }
        ]
    },
    {
        label: 'Marketing',
        code: 'marketing',
        items: [
            { label: 'Growth Manager', value: 'growth' },
            { label: 'Content Strategist', value: 'content' },
            { label: 'SEO Specialist', value: 'seo' }
        ]
    }
];

export default function GroupDemo() {
    const [position, setPosition] = React.useState<string | null>(null);
    const allPositions = jobCategories.flatMap((g) => g.items);
    const selectedPosition = allPositions.find((p) => p.value === position);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={position}
                onValueChange={(e: SelectValueChangeEvent) => setPosition(e.value as string | null)}
                options={jobCategories}
                optionLabel="label"
                optionGroupLabel="label"
                optionGroupChildren="items"
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <span className={position ? '' : 'text-surface-400'}>{selectedPosition?.label || 'Select a position...'}</span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>
                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '18rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
