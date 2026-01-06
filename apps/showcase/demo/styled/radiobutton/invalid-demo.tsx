'use client';

import { RadioButton } from '@primereact/ui/radiobutton';

export default function InvalidDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton.Root invalid />
        </div>
    );
}
