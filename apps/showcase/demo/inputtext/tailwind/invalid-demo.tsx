'use client';

import { InputText } from '@/ui/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center [&>input]:max-w-3xs">
            <InputText
                value={value1}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)}
                placeholder="Enter text"
                invalid={true}
            />
            <InputText
                value={value2}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)}
                placeholder="Enter text"
                invalid={true}
                variant="filled"
            />
        </div>
    );
}
