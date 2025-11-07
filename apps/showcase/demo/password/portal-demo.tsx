import { PasswordPortalInstance, PasswordStrengthResult } from '@primereact/types/shared/password';
import { Password } from 'primereact/password';

const requirements = [
    {
        id: 'minLength',
        label: 'At least 12 characters',
        test: (value: string) => value?.length >= 12
    },
    {
        id: 'uppercase',
        label: 'Contains uppercase letter',
        test: (_: string, strength: PasswordStrengthResult | null) => strength?.contains.includes('uppercase') || false
    },
    {
        id: 'lowercase',
        label: 'Contains lowercase letter',
        test: (_: string, strength: PasswordStrengthResult | null) => strength?.contains.includes('lowercase') || false
    },
    {
        id: 'number',
        label: 'Contains number',
        test: (_: string, strength: PasswordStrengthResult | null) => strength?.contains.includes('number') || false
    },
    {
        id: 'symbol',
        label: 'Contains special character',
        test: (_: string, strength: PasswordStrengthResult | null) => strength?.contains.includes('symbol') || false
    }
];

export default function RequirementsDemo() {
    return (
        <div className="card flex justify-center">
            <Password>
                <Password.Input />
                <Password.Portal>
                    {(instance: PasswordPortalInstance) => {
                        const { password } = instance;

                        return (
                            <ul className="flex flex-col justify-center gap-2 list-none ms-1 my-1">
                                {requirements?.map((requirement) => {
                                    const met = password?.testRequirement(requirement.test) || false;

                                    return (
                                        <li key={requirement.id} className="flex items-center gap-2 mt-1 text-sm">
                                            <i className={met ? 'pi pi-check text-green-500' : 'pi pi-times text-red-500'} />
                                            <span className={met ? 'text-green-700 dark:text-green-400' : 'text-surface-700 dark:text-surface-300'}>
                                                {requirement.label}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        );
                    }}
                </Password.Portal>
            </Password>
        </div>
    );
}
