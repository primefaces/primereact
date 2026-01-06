'use client';

import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center">
            <Label.Ifta>
                <InputText
                    id="invalid"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                    invalid={!value}
                />
                <Label.Root htmlFor="invalid">Username</Label.Root>
            </Label.Ifta>
        </div>
    );
}
