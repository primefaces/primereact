import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';

export function MaskDoc(props) {
    const code = {
        basic: `
<label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
<InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>

<label htmlFor="phone" className="font-bold block mb-2">Phone</label>
<InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>

<label htmlFor="serial" className="font-bold block mb-2">Serial</label>
<InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="card p-fluid flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="card p-fluid flex flex-wrap gap-3">
            <div className="flex-auto">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div className="flex-auto">
                <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Mask format can be a combination of the following definitions; <i>a</i> for alphabetic characters, <i>9</i> for numeric characters and <i>*</i> for alphanumberic characters. In addition, formatting characters like <i>(</i> ,{' '}
                    <i>)</i> , <i>-</i> are also accepted.
                </p>
            </DocSectionText>
            <div className="card p-fluid flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="ssn" className="font-bold block mb-2">
                        SSN
                    </label>
                    <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
                </div>

                <div className="flex-auto">
                    <label htmlFor="phone" className="font-bold block mb-2">
                        Phone
                    </label>
                    <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
                </div>

                <div className="flex-auto">
                    <label htmlFor="serial" className="font-bold block mb-2">
                        Serial
                    </label>
                    <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
