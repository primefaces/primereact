'use client';

import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function MultipleDemo() {
    return (
        <div className="flex justify-center">
            <InputGroup.Root className="sm:!w-96">
                <InputGroup.Addon>
                    <i className="pi pi-clock"></i>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <i className="pi pi-star-fill"></i>
                </InputGroup.Addon>
                <InputText placeholder="Price" />
                <InputGroup.Addon>$</InputGroup.Addon>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
