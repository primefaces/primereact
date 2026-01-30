'use client';
import { IconField } from '@primereact/ui/iconfield';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <IconField>
                    <InputIcon>
                        <i className="pi pi-envelope" />
                    </InputIcon>
                    <InputText
                        id="email"
                        value={value}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                        autoComplete="off"
                        variant="filled"
                    />
                    <InputIcon>
                        <i className="pi pi-check" />
                    </InputIcon>
                </IconField>
                <Label htmlFor="email">Email</Label>
            </IftaLabel>
        </div>
    );
}
