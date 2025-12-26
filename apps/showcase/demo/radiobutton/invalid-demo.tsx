'use client';

import { RadioButton } from 'primereact/radiobutton';

export default function InvalidDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton.Root invalid />
        </div>
    );
}
