'use client';
import { EyeIcon } from '@primereact/icons/eye';
import { EyeSlashIcon } from '@primereact/icons/eyeslash';
import { IconField } from '@primereact/ui/iconfield';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function ToggleMaskDemo() {
    const [type, setType] = React.useState<'text' | 'password'>('password');

    return (
        <div className="flex justify-center">
            <IconField.Root>
                <Password type={type} />
                <IconField.InputIcon>
                    {type === 'password' ? <EyeIcon onClick={() => setType('text')} /> : <EyeSlashIcon onClick={() => setType('password')} />}
                </IconField.InputIcon>
            </IconField.Root>
        </div>
    );
}
