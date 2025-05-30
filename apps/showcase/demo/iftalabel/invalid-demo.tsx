import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="card flex flex-wrap justify-center ">
            <Label.Ifta>
                <InputText id="invalid" value={value} onInput={(e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value)} invalid={!value} />
                <Label htmlFor="invalid">Username</Label>
            </Label.Ifta>
        </div>
    );
}
