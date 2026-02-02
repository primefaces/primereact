'use client';
import { EyeIcon } from '@primereact/icons/eye';
import { EyeSlashIcon } from '@primereact/icons/eyeslash';
import { PasswordValueChangeEvent } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { Password } from '@primereact/ui/password';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const rules = [
    { id: 'length', label: 'At least 12 characters long', test: (v: string) => v.length >= 12, weight: 20 },
    { id: 'uppercase', label: 'Contains uppercase letter', test: (v: string) => /[A-Z]/.test(v), weight: 20 },
    { id: 'lowercase', label: 'Contains lowercase letter', test: (v: string) => /[a-z]/.test(v), weight: 20 },
    { id: 'number', label: 'Contains number', test: (v: string) => /[0-9]/.test(v), weight: 20 },
    { id: 'special', label: 'Contains special character (!@#$...)', test: (v: string) => /[^a-zA-Z0-9]/.test(v), weight: 20 }
];

function getScore(value: string) {
    if (!value) return 0;

    return rules.reduce((acc, rule) => acc + (rule.test(value) ? rule.weight : 0), 0);
}

function getSeverity(score: number): 'danger' | 'warn' | 'info' | 'success' {
    if (score <= 20) return 'danger';

    if (score <= 40) return 'warn';

    if (score <= 60) return 'info';

    return 'success';
}

function getLabel(score: number): string {
    if (score === 0) return '';

    if (score <= 20) return 'Too Weak';

    if (score <= 40) return 'Weak';

    if (score <= 60) return 'Fair';

    if (score <= 80) return 'Strong';

    return 'Very Strong';
}

export default function TemplateDemo() {
    const [value, setValue] = React.useState('');
    const [type, setType] = React.useState<'text' | 'password'>('password');
    const score = getScore(value);
    const severity = getSeverity(score);
    const label = getLabel(score);

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-3 w-64">
                <IconField.Root>
                    <Password
                        type={type}
                        value={value}
                        onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)}
                        placeholder="Create a password"
                        fluid
                    />
                    <IconField.Icon>
                        {type === 'password' ? (
                            <EyeIcon className="cursor-pointer" onClick={() => setType('text')} />
                        ) : (
                            <EyeSlashIcon className="cursor-pointer" onClick={() => setType('password')} />
                        )}
                    </IconField.Icon>
                </IconField.Root>

                {value && (
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <i className="pi pi-shield" style={{ fontSize: '1.25rem' }} />
                                <span className="font-semibold text-sm">Password Strength</span>
                            </div>
                            {label && <Tag severity={severity}>{label}</Tag>}
                        </div>

                        <div className="w-full h-1.5 bg-surface-200 dark:bg-surface-700 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-500 ease-in-out"
                                style={{
                                    width: `${score}%`,
                                    backgroundColor: score <= 20 ? '#ef4444' : score <= 40 ? '#f59e0b' : score <= 60 ? '#3b82f6' : '#22c55e'
                                }}
                            />
                        </div>

                        <ul className="flex flex-col gap-2 list-none m-0 p-0">
                            {rules.map((rule) => {
                                const met = rule.test(value);

                                return (
                                    <li key={rule.id} className="flex items-center gap-2 text-xs">
                                        <i className={met ? 'pi pi-check text-green-500' : 'pi pi-times text-red-400'} />
                                        <span className={met ? 'text-surface-500 dark:text-surface-400' : 'text-surface-700 dark:text-surface-200'}>
                                            {rule.label}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
