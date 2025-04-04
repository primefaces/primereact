import { useCheckbox } from '@primereact/headless/checkbox';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

function MyComponent(inProps: { value: boolean; onValueChange: (value: boolean) => void }) {
    const { state, onChange, props, attrs } = useCheckbox({
        onCheckedChange: (e) => inProps.onValueChange(e.checked),
        checked: inProps.value,
        'data-testid': 'my-checkbox'
    });

    return (
        <div className="p-checkbox p-component" {...attrs}>
            <input type="checkbox" className="p-checkbox-input" checked={state.checked} onChange={onChange} />
            <div className="p-checkbox-box">{state.checked && <i className="pi pi-home" />}</div>
        </div>
    );
}

export default function BasicDemo() {
    const [checked1, setChecked1] = React.useState(false);

    const [checked2, setChecked2] = React.useState(false);

    const uncontrolledCheckbox = useCheckbox({
        defaultChecked: true
    });

    return (
        <div className="card flex justify-center flex-col gap-3">
            <Checkbox checked={checked1} onCheckedChange={(e) => setChecked1(e.checked)} />

            <h3>controlled</h3>
            <MyComponent value={checked2} onValueChange={(value) => setChecked2(value)} />

            <h3>uncontrolled</h3>
            <div className="p-checkbox p-component">
                <input type="checkbox" className="p-checkbox-input" defaultChecked={true} onChange={uncontrolledCheckbox.onChange} />
                <div className="p-checkbox-box">{uncontrolledCheckbox.state.checked && <i className="pi pi-check" />}</div>
            </div>
        </div>
    );
}
