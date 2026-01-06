'use client';

import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function BasicDemo() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>www</InputGroup.Addon>
                <InputText placeholder="Website" />
            </InputGroup.Root>
        </div>
    );
}
