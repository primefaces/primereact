'use client';

import { InputText } from 'primereact/inputtext';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputText placeholder="Disabled" disabled />
        </div>
    );
}
