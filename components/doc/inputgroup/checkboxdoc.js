import { useState } from 'react';
import { InputText } from '../../lib/inputtext/InputText';
import { Checkbox } from '../../lib/checkbox/Checkbox';
import { RadioButton } from '../../lib/radiobutton/RadioButton';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function CheckboxDoc(props) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('');

    const code = {
        basic: `
<span className="p-inputgroup-addon"><Checkbox checked={checked} onChange={(e) => setChecked(!checked)} /></span><InputText placeholder="Username"/>
<InputText placeholder="Price"/><span className="p-inputgroup-addon"><RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} /></span>
<span className="p-inputgroup-addon"><Checkbox checked={checked} onChange={(e) => setChecked(!checked)} /></span><InputText placeholder="Website"/><span className="p-inputgroup-addon"><RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} /></span>
        `,
        javascript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

export default function CheckboxDoc() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <div className="col-12">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked} onChange={(e) => setChecked(!checked)} />
                    </span>
                    <InputText placeholder="Username"/>
                </div>
            </div>
            <div className="col-12">
                <div className="p-inputgroup">
                    <InputText placeholder="Price"/>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>
            </div>
            <div className="col-12">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked} onChange={(e) => setChecked(!checked)} />
                    </span>
                    <InputText placeholder="Website"/>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} />
                    </span>
                </div>
            </div>
        </div>  
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';

export default function CheckboxDoc() {
    const [checked, setChecked] = useState<boolean>(false);
    const [radioValue, setRadioValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <div className="col-12">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked as any} onChange={(e : CheckboxChangeParams) => setChecked(!checked)} />
                    </span>
                    <InputText placeholder="Username"/>
                </div>
            </div>
            <div className="col-12">
                <div className="p-inputgroup">
                    <InputText placeholder="Price"/>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e : CheckboxChangeParams) => setRadioValue(e.value)} />
                    </span>
                </div>
            </div>
            <div className="col-12">
                <div className="p-inputgroup">
                    <span className="p-inputgroup-addon">
                        <Checkbox checked={checked as any} onChange={(e : CheckboxChangeParams) => setChecked(!checked)} />
                    </span>
                    <InputText placeholder="Website"/>
                    <span className="p-inputgroup-addon">
                        <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e : CheckboxChangeParams) => setRadioValue(e.value)} />
                    </span>
                </div>
            </div>
        </div>        
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Checkbox and RadioButton</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="grid p-fluid">
                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked} onChange={(e) => setChecked(!checked)} />
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-inputgroup">
                            <InputText placeholder="Price" />
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb1" value="rb1" checked={radioValue === 'rb1'} onChange={(e) => setRadioValue(e.value)} />
                            </span>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <Checkbox checked={checked} onChange={(e) => setChecked(!checked)} />
                            </span>
                            <InputText placeholder="Website" />
                            <span className="p-inputgroup-addon">
                                <RadioButton name="rb2" value="rb2" checked={radioValue === 'rb2'} onChange={(e) => setRadioValue(e.value)} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
