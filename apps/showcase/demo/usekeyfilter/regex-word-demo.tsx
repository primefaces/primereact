import { useKeyFilter } from '@primereact/hooks';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function RegexWordDemo() {
    const { onKeyPress, validate } = useKeyFilter({ pattern: /^[+]?(\d{1,12})?$/, validateOnly: true });

    const [text, setText] = React.useState('');

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (validate(e)) {
            setText(e.target.value);
        }
    };

    return (
        <div className="card flex justify-center">
            <div>
                <Label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow &quot;+&quot; only once at start)
                </Label>
                <InputText id="numkeys" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateInput(e)} onKeyPress={onKeyPress} fluid />
            </div>
        </div>
    );
}
