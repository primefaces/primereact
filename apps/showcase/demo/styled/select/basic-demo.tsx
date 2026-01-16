'use client';

import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ChevronDownIcon } from '@primereact/icons';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const languages = [
    { label: 'Select your language', value: '' },
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'Italiano', value: 'it' },
    { label: 'Türkçe', value: 'tr' },
    { label: '日本語', value: 'ja' },
    { label: '中文', value: 'zh' }
];

export default function BasicDemo() {
    const [language, setLanguage] = React.useState<string>('');

    return (
        <div className="flex justify-center">
            <Select.Root
                value={language}
                onValueChange={(e: SelectValueChangeEvent) => setLanguage(e.value as string)}
                options={languages}
                optionLabel="label"
                optionValue="value"
                className="w-full md:w-56"
            >
                <Select.Trigger placeholder="Select a language" />
                <Select.Dropdown>
                    <ChevronDownIcon />
                </Select.Dropdown>
                <Select.Portal>
                    <Select.List>
                        <Select.Options style={{ maxHeight: '14rem' }} />
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
