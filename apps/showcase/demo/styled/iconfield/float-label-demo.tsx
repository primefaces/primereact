'use client';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-search" />
                    </IconField.InputIcon>
                    <InputText
                        value={value1}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)}
                        id="over_label"
                        autoComplete="off"
                    />
                </IconField.Root>
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-search" />
                    </IconField.InputIcon>
                    <InputText
                        value={value2}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)}
                        id="in_label"
                        autoComplete="off"
                        variant="filled"
                    />
                </IconField.Root>
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <IconField.Root>
                    <IconField.InputIcon>
                        <i className="pi pi-search" />
                    </IconField.InputIcon>
                    <InputText
                        value={value3}
                        onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)}
                        id="on_label"
                        autoComplete="off"
                    />
                </IconField.Root>
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
