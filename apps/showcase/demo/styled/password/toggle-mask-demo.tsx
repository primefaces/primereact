'use client';
import { EyeIcon } from '@primereact/icons/eye';
import { EyeSlashIcon } from '@primereact/icons/eyeslash';
import { PasswordMaskChangeEvent } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function ToggleMaskDemo() {
    const [mask, setMask] = React.useState(true);

    return (
        <div className="flex justify-center">
            <IconField.Root>
                <Password mask={mask} onMaskChange={(e: PasswordMaskChangeEvent) => setMask(e.value)} />
                <IconField.InputIcon>
                    {mask ? <EyeIcon onClick={() => setMask(false)} /> : <EyeSlashIcon onClick={() => setMask(true)} />}
                </IconField.InputIcon>
            </IconField.Root>
        </div>
    );
}
