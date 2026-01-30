'use client';
import { PasswordValueChangeEvent } from '@primereact/types/shared/password';
import { Password } from '@primereact/ui/password';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

type StrengthLevel = 'weak' | 'medium' | 'strong' | 'very-strong';

interface StrengthInfo {
    label: string;
    percent: number;
    color: string;
    severity: 'danger' | 'warn' | 'info' | 'success';
}

const strengthMap: Record<StrengthLevel, StrengthInfo> = {
    weak: { label: 'Weak', percent: 25, color: 'var(--p-red-400)', severity: 'danger' },
    medium: { label: 'Medium', percent: 50, color: 'var(--p-amber-400)', severity: 'warn' },
    strong: { label: 'Strong', percent: 75, color: 'var(--p-blue-400)', severity: 'info' },
    'very-strong': { label: 'Very Strong', percent: 100, color: 'var(--p-emerald-400)', severity: 'success' }
};

function getStrength(value: string): StrengthLevel | null {
    if (!value) return null;

    let score = 0;

    if (value.length >= 8) score++;

    if (value.length >= 12) score++;

    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;

    if (/[0-9]/.test(value)) score++;

    if (/[^a-zA-Z0-9]/.test(value)) score++;

    if (score <= 1) return 'weak';
    else if (score <= 2) return 'medium';
    else if (score <= 3) return 'strong';
    else return 'very-strong';
}

export default function StrengthDemo() {
    const [value, setValue] = React.useState('');
    const level = getStrength(value);
    const info = level ? strengthMap[level] : null;

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-64">
                <Password value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} placeholder="Enter password" />
                {info && (
                    <div className="flex flex-col gap-2">
                        <ProgressBar.Root value={info.percent}>
                            <ProgressBar.Track style={{ height: '6px' }}>
                                <ProgressBar.Indicator style={{ backgroundColor: info.color }} />
                            </ProgressBar.Track>
                        </ProgressBar.Root>
                        <div className="flex justify-end">
                            <Tag severity={info.severity}>{info.label}</Tag>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
