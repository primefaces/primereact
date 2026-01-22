'use client';

import { InputText } from '@/components/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center [&>input]:max-w-3xs">
            <InputText placeholder="Disabled" disabled />
        </div>
    );
}
