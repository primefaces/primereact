'use client';

import { InputText } from '@/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center [&>input]:max-w-3xs">
            <InputText placeholder="Disabled" disabled />
            <InputText placeholder="Disabled" disabled variant="filled" />
        </div>
    );
}
