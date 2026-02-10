'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

const languages = [
    { label: 'العربية', value: 'ar' },
    { label: 'Čeština', value: 'cs' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Ελληνικά', value: 'el' },
    { label: 'English', value: 'en' },
    { label: 'Español', value: 'es' },
    { label: 'Français', value: 'fr' },
    { label: 'हिन्दी', value: 'hi' },
    { label: 'Bahasa Indonesia', value: 'id' },
    { label: 'Italiano', value: 'it' },
    { label: '日本語', value: 'ja' },
    { label: '한국어', value: 'ko' },
    { label: 'Nederlands', value: 'nl' },
    { label: 'Polski', value: 'pl' },
    { label: 'Português', value: 'pt' },
    { label: 'Română', value: 'ro' },
    { label: 'Русский', value: 'ru' },
    { label: 'Svenska', value: 'sv' },
    { label: 'Türkçe', value: 'tr' },
    { label: '中文', value: 'zh' }
];

export default function CheckmarkDemo() {
    const [filteredLanguages, setFilteredLanguages] = React.useState<(typeof languages)[number][]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();

        setFilteredLanguages(query ? languages.filter((a) => a.label.toLowerCase().includes(query)) : [...languages]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root
                checkmark
                options={filteredLanguages}
                optionKey="value"
                optionLabel="label"
                className="w-full md:w-64"
                onComplete={search}
            >
                <AutoComplete.Value placeholder="Search language..." className="w-full" />

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Panel>
                            <AutoComplete.List>
                                <AutoComplete.Options />
                                <AutoComplete.Empty className="text-sm">No language found</AutoComplete.Empty>
                            </AutoComplete.List>
                        </AutoComplete.Panel>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
