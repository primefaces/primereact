'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <FloatLabel>
            <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} id="username" />
            <Label htmlFor="username">Username</Label>
        </FloatLabel>
    );
}
