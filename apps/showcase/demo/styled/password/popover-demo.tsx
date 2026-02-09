'use client';
import { Eye } from '@primeicons/react/eye';
import { EyeSlash } from '@primeicons/react/eye-slash';
import { PasswordMaskChangeEvent, PasswordValueChangeEvent } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { Password } from '@primereact/ui/password';
import { Popover } from '@primereact/ui/popover';
import { ProgressBar } from '@primereact/ui/progressbar';
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

function getSeverity(score: number) {
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

export default function PopoverDemo() {
    const [value, setValue] = React.useState('');
    const [mask, setMask] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const score = getScore(value);
    const severity = getSeverity(score);
    const label = getLabel(score);

    return (
        <div className="flex justify-center">
            <Popover.Root open={open}>
                <Popover.Trigger as="div" className="w-72">
                    <IconField.Root>
                        <Password
                            mask={mask}
                            onMaskChange={(e: PasswordMaskChangeEvent) => setMask(e.value)}
                            value={value}
                            placeholder="Create a password"
                            fluid
                            onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)}
                            onFocus={() => setOpen(true)}
                            onBlur={() => setOpen(false)}
                        />
                        <IconField.Icon>
                            {mask ? (
                                <Eye className="cursor-pointer" onClick={() => setMask(false)} />
                            ) : (
                                <EyeSlash className="cursor-pointer" onClick={() => setMask(true)} />
                            )}
                        </IconField.Icon>
                    </IconField.Root>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Positioner sideOffset={12} side="bottom" align="start">
                        <Popover.Content className="w-72">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <i className="pi pi-shield" style={{ fontSize: '1.25rem' }} />
                                        <span className="font-semibold text-sm">Password Strength</span>
                                    </div>
                                    {label && <Tag severity={severity}>{label}</Tag>}
                                </div>

                                <ProgressBar.Root value={score}>
                                    <ProgressBar.Track style={{ height: '6px' }}>
                                        <ProgressBar.Indicator
                                            className={
                                                score <= 20
                                                    ? 'bg-red-400'
                                                    : score <= 40
                                                      ? 'bg-amber-400'
                                                      : score <= 60
                                                        ? 'bg-blue-400'
                                                        : 'bg-green-400'
                                            }
                                        />
                                    </ProgressBar.Track>
                                </ProgressBar.Root>

                                <ul className="flex flex-col gap-2 list-none m-0 p-0">
                                    {rules.map((rule) => {
                                        const met = rule.test(value);

                                        return (
                                            <li key={rule.id} className="flex items-center gap-2 text-xs">
                                                <i className={met ? 'pi pi-check text-green-500' : 'pi pi-times text-red-400'} />
                                                <span
                                                    className={
                                                        met ? 'text-surface-500 dark:text-surface-400' : 'text-surface-700 dark:text-surface-200'
                                                    }
                                                >
                                                    {rule.label}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <Popover.Arrow />
                        </Popover.Content>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
}
