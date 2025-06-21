import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="card flex flex-wrap justify-center items-end gap-4">
            <Label.Float>
                <InputText id="value1" value={value1} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue1(e.currentTarget.value)} invalid={!value1} />
                <Label htmlFor="value1">Username</Label>
            </Label.Float>

            <Label.Float variant="in">
                <InputText id="value2" value={value2} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue2(e.currentTarget.value)} autoComplete="off" invalid={!value2} />
                <Label htmlFor="value2">Username</Label>
            </Label.Float>

            <Label.Float variant="on">
                <InputText id="value3" value={value3} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue3(e.currentTarget.value)} autoComplete="off" invalid={!value3} />
                <Label htmlFor="value3">Username</Label>
            </Label.Float>
        </div>
    );
}
