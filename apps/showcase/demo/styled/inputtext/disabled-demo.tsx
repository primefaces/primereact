'use client';

import { InputText } from '@primereact/ui/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputText.Root placeholder="Disabled" disabled />
        </div>
    );
}
