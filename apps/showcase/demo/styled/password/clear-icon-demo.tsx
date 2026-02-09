'use client';
import { Times } from '@primeicons/react/times';
import { PasswordValueChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="flex justify-center">
            <IconField.Root>
                <Password className="w-56" value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} />
                <IconField.Icon>{value !== '' && <Times onClick={() => setValue('')} />}</IconField.Icon>
            </IconField.Root>
        </div>
    );
}
