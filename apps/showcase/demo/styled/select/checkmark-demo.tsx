'use client';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { Select } from '@primereact/ui/select';
import * as React from 'react';
import { ChevronDown } from '@primeicons/react/chevron-down';

const themes = [
    { label: 'Light', value: 'light', icon: '☀️', description: 'Clean and bright interface' },
    { label: 'Dark', value: 'dark', icon: '🌙', description: 'Easy on the eyes' },
    { label: 'System', value: 'system', icon: '💻', description: 'Match your device settings' },
    { label: 'High Contrast', value: 'high-contrast', icon: '◐', description: 'Maximum readability' }
];

export default function CheckmarkDemo() {
    const [theme, setTheme] = React.useState(themes[2]);

    return (
        <div className="flex justify-center">
            <Select.Root
                value={theme}
                onValueChange={(e: SelectValueChangeEvent) => setTheme(e.value as (typeof themes)[number])}
                options={themes}
                optionLabel="label"
                checkmark
                className="w-full md:w-64"
            >
                <Select.Trigger>
                    <span className="flex items-center gap-2">
                        <span>{theme?.icon}</span>
                        <span>{theme?.label}</span>
                    </span>
                </Select.Trigger>
                <Select.Dropdown>
                    <ChevronDown />
                </Select.Dropdown>
                <Select.Portal>
                    <Select.List>
                        <Select.Options>
                            {themes.map((t, index) => (
                                <Select.Option key={t.value} index={index} uKey={t.value} className="justify-between">
                                    <div className="flex items-center gap-3 py-1">
                                        <span className="text-xl">{t.icon}</span>
                                        <div className="flex flex-col">
                                            <span className="font-medium">{t.label}</span>
                                            <span className="text-xs text-surface-500">{t.description}</span>
                                        </div>
                                    </div>
                                    <Select.Selection className={'ml-4'} />
                                </Select.Option>
                            ))}
                        </Select.Options>
                    </Select.List>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
