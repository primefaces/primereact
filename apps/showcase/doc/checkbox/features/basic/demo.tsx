import { useCheckbox } from '@primereact/headless/checkbox';
import { Checkbox } from 'primereact/checkbox';
import * as React from 'react';

export default function BasicDemo() {
    const [checked1, setChecked1] = React.useState(false);

    const [checked2, setChecked2] = React.useState(false);
    const controlledCheckbox = useCheckbox({
        onCheckedChange: (e) => setChecked2(e.checked),
        checked: checked2
    });

    const uncontrolledCheckbox = useCheckbox({
        defaultChecked: true
    });

    return (
        <div className="card flex justify-center flex-col gap-3">
            <Checkbox checked={checked1} onChange={(e) => setChecked1(e.checked)} />

            <h3>controlled</h3>
            <div className="p-checkbox p-component">
                <input type="checkbox" className="p-checkbox-input" checked={checked2} onChange={controlledCheckbox.onChange} />
                <div className="p-checkbox-box">{checked2 && <i className="pi pi-check" />}</div>
            </div>

            <h3>uncontrolled</h3>
            <div className="p-checkbox p-component">
                <input type="checkbox" className="p-checkbox-input" defaultChecked={true} onChange={uncontrolledCheckbox.onChange} />
                <div className="p-checkbox-box">{uncontrolledCheckbox.state.checked && <i className="pi pi-check" />}</div>
            </div>
        </div>
    );
}
