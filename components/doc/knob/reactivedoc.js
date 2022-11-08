import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { Button } from '../../lib/button/button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ReactiveDoc(props) {
    const [value2, setValue2] = useState(0);
    const [disabledIncrementBtn, setDisabledIncrementBtn] = useState(false);
    const [disabledDecrementBtn, setDisabledDecrementBtn] = useState(true);

    const increment = () => {
        const value = value2 + 1;

        setValue2(value);
        setDisabledIncrementBtn(value === 100);
        setDisabledDecrementBtn(false);
    };

    const decrement = () => {
        const value = value2 - 1;

        setValue2(value);
        setDisabledIncrementBtn(false);
        setDisabledDecrementBtn(value === 0);
    };

    const code = {
        basic: `
<Knob value={value2} size={150} readOnly />
<Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
<Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDoc() {
    const [value2, setValue2] = useState(0);
    const [disabledIncrementBtn, setDisabledIncrementBtn] = useState(false);
    const [disabledDecrementBtn, setDisabledDecrementBtn] = useState(true);

    const increment = () => {
        const value = value2 + 1;

        setValue2(value);
        setDisabledIncrementBtn(value === 100);
        setDisabledDecrementBtn(false);
    };

    const decrement = () => {
        const value = value2 - 1;

        setValue2(value);
        setDisabledIncrementBtn(false);
        setDisabledDecrementBtn(value === 0);
    };

    return (
        <div className="text-center">
            <Knob value={value2} size={150} readOnly />
            <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
            <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDoc() {
    const [value2, setValue2] = useState<number>(0);
    const [disabledIncrementBtn, setDisabledIncrementBtn] = useState<boolean>(false);
    const [disabledDecrementBtn, setDisabledDecrementBtn] = useState<boolean>(true);

    const increment = () => {
        const value = value2 + 1;

        setValue2(value);
        setDisabledIncrementBtn(value === 100);
        setDisabledDecrementBtn(false);
    };

    const decrement = () => {
        const value = value2 - 1;

        setValue2(value);
        setDisabledIncrementBtn(false);
        setDisabledDecrementBtn(value === 0);
    };

    return (
        <div className="text-center">
            <Knob value={value2} size={150} readOnly />
            <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
            <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Reactive Knob</DocSectionText>
            <div className="card flex justify-content-center">
                <div className="text-center">
                    <Knob value={value2} size={150} readOnly />
                    <Button label="Increment" onClick={increment} className="mr-2" disabled={disabledIncrementBtn} />
                    <Button label="Decrement" onClick={decrement} disabled={disabledDecrementBtn} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
