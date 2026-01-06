'use client';

import { InputText } from '@/ui/inputtext';

export default function SizeDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputText size="small" placeholder="Small" className="max-w-3xs" />
            <InputText placeholder="Normal" className="max-w-2xs" />
            <InputText size="large" placeholder="Large" className="max-w-xs" />
            <InputText size="small" placeholder="Small" className="max-w-3xs" variant="filled" />
            <InputText placeholder="Normal" className="max-w-2xs" variant="filled" />
            <InputText size="large" placeholder="Large" className="max-w-xs" variant="filled" />
        </div>
    );
}
