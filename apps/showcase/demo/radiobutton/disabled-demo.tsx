'use client';

import { RadioButton } from 'primereact/radiobutton';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <RadioButton.Group className="flex items-center gap-2" value="2">
                <RadioButton.Root disabled />
                <RadioButton.Root value="2" disabled />
            </RadioButton.Group>
        </div>
    );
}
