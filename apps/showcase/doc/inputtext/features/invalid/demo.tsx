import { InputText } from 'primereact/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    return (
        <div className="card flex flex-wrap justify-center gap-4">
            <InputText value={value1} onValueChange={(e) => setValue1(e.value)} invalid={!value1} placeholder="Name" />
            <InputText value={value2} onValueChange={(e) => setValue2(e.value)} invalid={!value2} variant="filled" placeholder="Name" />
        </div>
    );
}
