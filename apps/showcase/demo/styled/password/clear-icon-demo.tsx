'use client';
import { TimesIcon } from '@primereact/icons';
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
                <IconField.InputIcon>{value !== '' && <TimesIcon onClick={() => setValue('')} />}</IconField.InputIcon>
            </IconField.Root>
        </div>
    );
}
