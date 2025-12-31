'use client';

import { InputText } from '@primereact/ui/inputtext';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputText.Root size="small" placeholder="Small" />
            <InputText.Root placeholder="Normal" />
            <InputText.Root size="large" placeholder="Large" />
        </div>
    );
}
