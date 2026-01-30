'use client';
import { TimesIcon } from '@primereact/icons';
import { PasswordValueChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function BasicDemo() {
    const [value, setValue] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="flex justify-center">
            <IconField>
                <Password className="w-56" value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value)} />
                <InputIcon>{value !== '' && <TimesIcon onClick={() => setValue('')} />}</InputIcon>
            </IconField>
        </div>
    );
}
