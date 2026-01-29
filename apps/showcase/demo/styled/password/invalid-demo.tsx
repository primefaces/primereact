'use client';
import { PasswordChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<usePasswordProps['value']>('');
    const [value2, setValue2] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <Password
                value={value1}
                invalid={!value1}
                onValueChange={(e: PasswordChangeEvent) => setValue1(e.value as string)}
                placeholder="Password"
            />
            <Password
                value={value2}
                invalid={!value2}
                variant="filled"
                onValueChange={(e: PasswordChangeEvent) => setValue2(e.value as string)}
                placeholder="Password"
            />
        </div>
    );
}
