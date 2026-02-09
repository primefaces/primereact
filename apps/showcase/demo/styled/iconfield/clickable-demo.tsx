'use client';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';
import { Search } from '@primeicons/react/search';
import { Times } from '@primeicons/react/times';

export default function ClickableDemo() {
    const [value, setValue] = React.useState('PrimeReact');

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <IconField.Root>
                <IconField.Icon>
                    <Search />
                </IconField.Icon>
                <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} placeholder="Search" />
                <IconField.Icon>
                    <Times className="cursor-pointer" onClick={() => setValue('')} />
                </IconField.Icon>
            </IconField.Root>
        </div>
    );
}
