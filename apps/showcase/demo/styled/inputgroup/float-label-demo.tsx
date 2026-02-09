'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';
import { User } from '@primeicons/react/user';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="space-y-4 max-w-xs mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <User></User>
                </InputGroup.Addon>
                <FloatLabel>
                    <InputText id="over_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} />
                    <Label htmlFor="over_label">Over Label</Label>
                </FloatLabel>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FloatLabel variant="in">
                    <InputText id="in_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} />
                    <Label htmlFor="in_label">In Label</Label>
                </FloatLabel>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <FloatLabel variant="on">
                    <InputText id="on_label" value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} />
                    <Label htmlFor="on_label">On Label</Label>
                </FloatLabel>
            </InputGroup.Root>
        </div>
    );
}
