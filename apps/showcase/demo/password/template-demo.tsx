'use client';

import { PasswordInstance } from '@primereact/types/shared/password';
import { Password } from 'primereact/password';
import { Tag } from 'primereact/tag';

const requirements = [
    {
        id: 'length',
        label: 'At least 12 characters long',
        test: (v: string) => v.length >= 12
    },
    {
        id: 'uppercase',
        label: 'Contains at least one uppercase letter',
        test: (v: string) => /[A-Z]/.test(v)
    },
    {
        id: 'lowercase',
        label: 'Contains at least one lowercase letter',
        test: (v: string) => /[a-z]/.test(v)
    },
    {
        id: 'number',
        label: 'Contains at least one number',
        test: (v: string) => /[0-9]/.test(v)
    },
    {
        id: 'special',
        label: 'Contains at least one special character (!@#$...)',
        test: (v: string) => /[^a-zA-Z0-9]/.test(v)
    }
];

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Password.Root
                strengthOptions={[
                    { id: 0, value: 'Weak', minDiversity: 0, minLength: 0 },
                    { id: 1, value: 'Medium', minDiversity: 2, minLength: 6 },
                    { id: 2, value: 'Strong', minDiversity: 4, minLength: 12 }
                ]}
            >
                {(instance: PasswordInstance) => {
                    const { strength } = instance?.state ?? {};
                    const currentLevel = strength?.id ?? -1;
                    const colors = ['#ef4444', '#f59e0b', '#3b82f6'];

                    return (
                        <>
                            <Password.Input />
                            <Password.Strength className="justify-between">
                                <>
                                    <div className="flex items-center">
                                        <i className="pi pi-lock mr-2" style={{ fontSize: '1.5rem', fontWeight: 'semibold' }} />
                                        <span className="font-semibold">Password Strength:</span>
                                    </div>

                                    {strength?.value !== '' && (
                                        <Tag.Root
                                            style={{
                                                backgroundColor: colors[currentLevel]
                                            }}
                                        >
                                            <Tag.Label className="text-white">{strength?.value === '' ? 'Weak' : strength?.value}</Tag.Label>
                                        </Tag.Root>
                                    )}
                                </>
                            </Password.Strength>
                            <ul className="flex flex-col justify-center gap-2 list-none ms-1 my-1">
                                {requirements?.map((requirement) => {
                                    const met = instance?.testRequirement(requirement.test);

                                    return (
                                        <li key={requirement.id} className="flex items-center gap-2 mt-1 text-sm">
                                            <i className={met ? 'pi pi-check text-green-500' : 'pi pi-times text-red-400'} />
                                            {requirement.label}
                                        </li>
                                    );
                                })}
                            </ul>
                        </>
                    );
                }}
            </Password.Root>
        </div>
    );
}
