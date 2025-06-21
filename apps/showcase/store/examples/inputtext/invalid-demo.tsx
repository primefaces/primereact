import { InputText } from 'primereact/inputtext';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');

    return (
        <div className="card flex flex-wrap gap-4 items-center justify-center">
            <InputText value={value1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue1(e.target.value)} placeholder="Enter text" invalid={value1 === ''} />
            <InputText value={value2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} placeholder="Enter text" invalid={value2 === ''} variant="filled" />
        </div>
    );
}
