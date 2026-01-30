'use client';
import { IconField } from '@primereact/ui/iconfield';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-envelope" />
                    </IconField.InputIcon>
                    <InputText
                        id="email"
                        value={value}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                        autoComplete="off"
                        variant="filled"
                    />
                    <IconField.InputIcon>
                        <i className="pi pi-check" />
                    </IconField.InputIcon>
                </IconField.Root>
                <Label htmlFor="email">Email</Label>
            </IftaLabel>
        </div>
    );
}
