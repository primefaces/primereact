'use client';
import { EyeIcon } from '@primereact/icons/eye';
import { EyeSlashIcon } from '@primereact/icons/eyeslash';
import { PasswordMaskChangeEvent } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function ToggleMaskDemo() {
    const [mask, setMask] = React.useState(true);

    return (
        <div className="flex justify-center">
            <IconField>
                <Password mask={mask} onMaskChange={(e: PasswordMaskChangeEvent) => setMask(e.value)} />
                <InputIcon>{mask ? <EyeIcon onClick={() => setMask(false)} /> : <EyeSlashIcon onClick={() => setMask(true)} />}</InputIcon>
            </IconField>
        </div>
    );
}
