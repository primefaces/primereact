import { useCheckbox } from '@primereact/headless/checkbox';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

export default function BasicDemo() {
    const [checked, setChecked] = React.useState(false);
    const { state, onChange } = useCheckbox({ binary: true });

    return (
        <div className="card flex justify-center flex-col gap-3">
            <Checkbox checked={checked} onChange={(e) => setChecked(e.checked)} binary={true} size="large" />

            <div className="p-checkbox p-component p-checkbox-lg p-inputfield-lg">
                <input type="checkbox" className="p-checkbox-input" checked={state.checked} onChange={onChange} />
                <div className="p-checkbox-box">{state.checked && <i className="pi pi-check" />}</div>
            </div>
        </div>
    );
}
