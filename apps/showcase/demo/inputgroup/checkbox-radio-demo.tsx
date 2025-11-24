'use client';

import { Checkbox } from 'primereact/checkbox';
import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';

export default function CheckboxRadioDemo() {
    return (
        <div className="flex flex-col md:flex-row gap-4">
            <InputGroup>
                <InputText placeholder="Price" />
                <InputGroup.Addon>
                    <RadioButton name="rb1" value="rb1" />
                </InputGroup.Addon>
            </InputGroup>

            <InputGroup>
                <InputGroup.Addon>
                    <Checkbox />
                </InputGroup.Addon>
                <InputText placeholder="Username" />
            </InputGroup>

            <InputGroup>
                <InputGroup.Addon>
                    <Checkbox />
                </InputGroup.Addon>
                <InputText placeholder="Website" />
                <InputGroup.Addon>
                    <RadioButton name="rb2" value="rb2" />
                </InputGroup.Addon>
            </InputGroup>
        </div>
    );
}
