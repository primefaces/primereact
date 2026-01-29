'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function VariantsDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel variant="in">
                <InputText
                    id="in_label"
                    value={value1}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                    autoComplete="off"
                />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <InputText
                    id="on_label"
                    value={value2}
                    onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                    autoComplete="off"
                />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
