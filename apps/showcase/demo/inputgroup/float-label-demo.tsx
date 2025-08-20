import { InputGroup } from 'primereact/inputgroup';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="card flex flex-col md:items-end md:flex-row gap-4">
            <InputGroup>
                <InputGroup.Addon>
                    <i className="pi pi-user"></i>
                </InputGroup.Addon>
                <Label.Float>
                    <InputText id="over_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} />
                    <Label htmlFor="over_label">Over Label</Label>
                </Label.Float>
            </InputGroup>

            <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <Label.Float variant="in">
                    <InputText id="in_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} />
                    <Label htmlFor="in_label">In Label</Label>
                </Label.Float>
                <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>

            <InputGroup>
                <InputGroup.Addon>www</InputGroup.Addon>
                <Label.Float variant="on">
                    <InputText id="on_label" value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} />
                    <Label htmlFor="on_label">On Label</Label>
                </Label.Float>
            </InputGroup>
        </div>
    );
}
