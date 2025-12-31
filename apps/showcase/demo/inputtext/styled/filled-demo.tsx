'use client';

import { InputText } from '@primereact/ui/inputtext';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputText.Root placeholder="Enter text" variant="filled" />
        </div>
    );
}
