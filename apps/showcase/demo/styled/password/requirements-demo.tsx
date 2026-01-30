'use client';
import { PasswordValueChangeEvent } from '@primereact/types/shared/password';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

const requirements = [
    {
        id: 'minLength',
        label: 'At least 12 characters',
        test: (value: string) => value.length >= 12
    },
    {
        id: 'uppercase',
        label: 'Contains uppercase letter',
        test: (value: string) => /[A-Z]/.test(value)
    },
    {
        id: 'lowercase',
        label: 'Contains lowercase letter',
        test: (value: string) => /[a-z]/.test(value)
    },
    {
        id: 'number',
        label: 'Contains number',
        test: (value: string) => /[0-9]/.test(value)
    },
    {
        id: 'symbol',
        label: 'Contains special character',
        test: (value: string) => /[^a-zA-Z0-9]/.test(value)
    }
];

export default function RequirementsDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <div className="flex flex-col gap-2 w-64">
                <Password value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} placeholder="Enter password" />

                <ul className="flex flex-col gap-2 list-none ms-1 my-1">
                    {requirements.map((req) => {
                        const met = req.test(value);

                        return (
                            <li key={req.id} className="flex items-center gap-2 text-sm">
                                <i className={met ? 'pi pi-check-circle text-green-500' : 'pi pi-circle text-surface-400'} />
                                <span className={met ? 'text-green-700 dark:text-green-400 line-through' : 'text-surface-700 dark:text-surface-300'}>
                                    {req.label}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
