'use client';

import { InputText } from '@/ui/inputtext';

export default function FilledDemo() {
    return (
        <div className="flex justify-center [&>input]:max-w-3xs">
            <InputText placeholder="Enter text" variant="filled" />
        </div>
    );
}
