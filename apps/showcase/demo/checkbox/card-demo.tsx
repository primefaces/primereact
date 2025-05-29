'use client';
import type { CheckboxGroupValueChangeEvent } from '@primereact/types/shared/checkbox';
import { Checkbox } from 'primereact/checkbox';
import React from 'react';

const interests = [
    {
        id: 'tech',
        title: '💻 Technology',
        description: 'Latest updates in software, gadgets, and innovation.'
    },
    {
        id: 'design',
        title: '🎨 Design',
        description: 'UI/UX trends, graphic design tips, and creativity.'
    },
    {
        id: 'finance',
        title: '💰 Finance',
        description: 'Investing, saving, and crypto news.'
    }
];

export default function CardDemo() {
    const [value, setValue] = React.useState<string[]>([]);

    return (
        <div className="card flex items-center justify-center">
            <div className="max-w-3xl ">
                <div className=" font-semibold leading-none">Select your interests</div>
                <Checkbox.Group value={value} onValueChange={(e: CheckboxGroupValueChangeEvent) => setValue(e.value as string[])} className="!grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    {interests.map((interest) => (
                        <label
                            key={interest.id}
                            className={`flex-1 flex items-start gap-4 p-4 rounded-md border border-surface-200 dark:border-surface-800 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${value.includes(interest.id) ? '!border-primary' : ''}`}
                        >
                            <Checkbox key={interest.id} value={interest.id} />
                            <div className="flex-1 flex flex-col gap-2">
                                <div className="text-lg font-semibold leading-none">{interest.title}</div>
                                <div className="text-sm text-surface-500">{interest.description}</div>
                            </div>
                        </label>
                    ))}
                </Checkbox.Group>
            </div>
        </div>
    );
}
