import { useInputText } from '@primereact/headless/inputtext';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';

function MyInputText(inProps: { value: string; onValueChange: (e: { value: string }) => void }) {
    const { state, onInput, attrs } = useInputText({
        onValueChange: (e: { originalEvent: React.FormEvent<HTMLInputElement>; value: string }) => inProps.onValueChange({ value: e.value }),
        value: inProps.value
    });

    return <input className="p-inputtext p-component" type="text" value={state.value} onChange={onInput} {...attrs} />;
}

export default function BasicDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const uncontrolledInputText = useInputText({ defaultValue: '' });

    return (
        <div className="card flex justify-center flex-col gap-3">
            <InputText value={value1} onValueChange={(e) => setValue1(e.value)} />

            <h3>controlled</h3>
            <MyInputText value={value2} onValueChange={(e) => setValue2(e.value)} />

            <h3>uncontrolled</h3>
            <input className="p-inputtext p-component" type="text" defaultValue={''} onChange={uncontrolledInputText.onInput} />
        </div>
    );
}
