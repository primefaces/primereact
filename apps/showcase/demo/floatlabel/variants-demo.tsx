import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function VariantsDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="card flex flex-wrap justify-center items-end gap-4">
            <Label.Float variant="in">
                <InputText id="in_label" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} autoComplete="off" />
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>

            <Label.Float variant="on">
                <InputText id="on_label" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} autoComplete="off" />
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>
        </div>
    );
}
