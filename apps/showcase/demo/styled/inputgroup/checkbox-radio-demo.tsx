'use client';

import { Checkbox } from 'primereact/checkbox';
import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';

export default function CheckboxRadioDemo() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <InputGroup.Root>
                <InputText placeholder="Price" />
                <InputGroup.Addon>
                    <RadioButton.Root name="rb1" value="rb1" />
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root />
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <Checkbox.Root />
                </InputGroup.Addon>
                <InputText placeholder="Website" />
                <InputGroup.Addon>
                    <RadioButton.Root name="rb2" value="rb2" />
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
