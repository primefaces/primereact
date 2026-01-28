'use client';
import { CheckIcon } from '@primereact/icons';
import type { CheckboxGroupChangeEvent } from '@primereact/types/shared/checkboxgroup';
import { Checkbox } from '@primereact/ui/checkbox';
import { CheckboxGroup } from '@primereact/ui/checkboxgroup';
import { Label } from '@primereact/ui/label';
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
        <div className="max-w-3xl mx-auto">
            <h5 className="font-medium">Select your interests:</h5>
            <CheckboxGroup
                value={value}
                onValueChange={(e: CheckboxGroupChangeEvent) => setValue(e.value as string[])}
                className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4"
            >
                {interests.map((interest) => (
                    <Label.Root
                        key={interest.id}
                        className={`flex-1 select-none flex items-start gap-3 p-4 rounded-md border  hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors cursor-pointer ${value.includes(interest.id) ? 'border-primary' : 'border-surface'}`}
                    >
                        <Checkbox.Root key={interest.id} value={interest.id}>
                            <Checkbox.Box>
                                <Checkbox.Indicator className="data-unchecked:hidden!" as={CheckIcon} />
                            </Checkbox.Box>
                        </Checkbox.Root>
                        <div className="flex-1 flex flex-col gap-2">
                            <h6 className="font-medium leading-none">{interest.title}</h6>
                            <p className="text-sm text-surface-500">{interest.description}</p>
                        </div>
                    </Label.Root>
                ))}
            </CheckboxGroup>
        </div>
    );
}
