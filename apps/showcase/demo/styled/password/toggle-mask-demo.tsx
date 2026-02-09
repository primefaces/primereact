'use client';
import { Eye } from '@primeicons/react/eye';
import { EyeSlash } from '@primeicons/react/eye-slash';
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
                <IconField.Icon>{mask ? <Eye onClick={() => setMask(false)} /> : <EyeSlash onClick={() => setMask(true)} />}</IconField.Icon>
            </IconField.Root>
        </div>
    );
}
