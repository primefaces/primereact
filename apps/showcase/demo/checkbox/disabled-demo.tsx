'use client';

import { Checkbox } from 'primereact/checkbox';

export default function DisabledDemo() {
    return (
        <div className="flex items-center justify-center gap-4">
            <Checkbox inputId="disabled" disabled />
            <Checkbox inputId="disabled" disabled checked />
        </div>
    );
}
