'use client';
import { IconField } from '@primereact/ui/iconfield';
import { InputIcon } from '@primereact/ui/inputicon';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function ClickableDemo() {
    const [value, setValue] = React.useState('PrimeReact');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField>
                <InputIcon>
                    <i className="pi pi-search" />
                </InputIcon>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} placeholder="Search" />
                <InputIcon>
                    <i className="pi pi-times cursor-pointer" onClick={() => setValue('')} />
                </InputIcon>
            </IconField>
        </div>
    );
}
