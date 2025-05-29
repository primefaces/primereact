import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <Label.Float>
            <InputText value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} id="username" />
            <Label htmlFor="username">InputText</Label>
        </Label.Float>
    );
}
