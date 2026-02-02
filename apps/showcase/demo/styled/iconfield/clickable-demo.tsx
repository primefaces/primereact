'use client';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ClickableDemo() {
    const [value, setValue] = React.useState('PrimeReact');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <i className="pi pi-search" />
                </IconField.Icon>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} placeholder="Search" />
                <IconField.Icon>
                    <i className="pi pi-times cursor-pointer" onClick={() => setValue('')} />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
