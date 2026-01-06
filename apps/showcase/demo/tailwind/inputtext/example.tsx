'use client';

import { InputText } from '@/ui/inputtext';

export default function Example() {
    return (
        <div className="flex justify-center [&>input]:max-w-3xs">
            <InputText className="max-w-xs" placeholder="Enter text" />
        </div>
    );
}
