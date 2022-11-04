import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MaskDoc(props) {
    const code = {
        basic: `
<div className="p-fluid flex flex-column lg:flex-row gap-3">
    <div class="flex-1">
        <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
        <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
    </div>

    <div class="flex-1">
        <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
        <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
    </div>

    <div class="flex-1">
        <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
        <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
    </div>
</div>
        `,
        javascript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="p-fluid flex flex-column lg:flex-row gap-3">
            <div class="flex-1">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div class="flex-1">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div class="flex-1">
                <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
            </div>
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function MaskDemo() {
    return (
        <div className="p-fluid flex flex-column lg:flex-row gap-3">
            <div class="flex-1">
                <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
            </div>

            <div class="flex-1">
                <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
            </div>

            <div class="flex-1">
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
                Mask format can be a combination of the the following definitions; <i>a</i> for alphabetic characters, <i>9</i> for numeric characters and * for alphanumberic characters. In addition,
                formatting characters like <i>(</i> , <i>)</i> , <i>-</i> are also accepted.
            </DocSectionText>
            <div className="card">
                <div className="p-fluid flex flex-column lg:flex-row gap-3">
                    <div class="flex-1">
                        <label htmlFor="ssn" className="font-bold block mb-2">SSN</label>
                        <InputMask id="ssn" mask="999-99-9999" placeholder="999-99-9999"></InputMask>
                    </div>

                    <div class="flex-1">
                        <label htmlFor="phone" className="font-bold block mb-2">Phone</label>
                        <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"></InputMask>
                    </div>

                    <div class="flex-1">
                        <label htmlFor="serial" className="font-bold block mb-2">Serial</label>
                        <InputMask id="serial" mask="a*-999-a999" placeholder="a*-999-a999"></InputMask>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
