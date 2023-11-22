import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function PresetsDoc(props) {
    const code = {
        basic: `
<InputText keyfilter="int" />
<InputText keyfilter="pint" />
<InputText keyfilter="num" />
<InputText keyfilter="pnum" />
<InputText keyfilter="money" />
<InputText keyfilter="hex" />
<InputText keyfilter="alpha" />
<InputText keyfilter="alphanum" />
<InputText keyfilter="email" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function PresetsDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </label>
                    <InputText id="integer" keyfilter="int" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </label>
                    <InputText id="number" keyfilter="num" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </label>
                    <InputText id="money" keyfilter="money" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </label>
                    <InputText id="hex" keyfilter="hex" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </label>
                    <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </label>
                    <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="pint" className="font-bold block mb-2">
                            Positive Integer
                    </label>
                    <InputText id="pint" keyfilter="pint" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="pnum" className="font-bold block mb-2">
                            Positive Number
                    </label>
                    <InputText id="pnum" keyfilter="pnum" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="email" className="font-bold block mb-2">
                            Email
                    </label>
                    <InputText id="email" keyfilter="email" className="w-full" />
                </div>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function PresetsDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="integer" className="font-bold block mb-2">
                        Integer
                    </label>
                    <InputText id="integer" keyfilter="int" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="number" className="font-bold block mb-2">
                        Number
                    </label>
                    <InputText id="number" keyfilter="num" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="money" className="font-bold block mb-2">
                        Money
                    </label>
                    <InputText id="money" keyfilter="money" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex-auto">
                    <label htmlFor="hex" className="font-bold block mb-2">
                        Hex
                    </label>
                    <InputText id="hex" keyfilter="hex" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphabetic" className="font-bold block mb-2">
                        Alphabetic
                    </label>
                    <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="alphanumeric" className="font-bold block mb-2">
                        Alphanumeric
                    </label>
                    <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                </div>
            </div>
            <div className="flex flex-wrap gap-3">
                <div className="flex-auto">
                    <label htmlFor="pint" className="font-bold block mb-2">
                            Positive Integer
                    </label>
                    <InputText id="pint" keyfilter="pint" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="pnum" className="font-bold block mb-2">
                            Positive Number
                    </label>
                    <InputText id="pnum" keyfilter="pnum" className="w-full" />
                </div>
                <div className="flex-auto">
                    <label htmlFor="email" className="font-bold block mb-2">
                            Email
                    </label>
                    <InputText id="email" keyfilter="email" className="w-full" />
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
                <p>
                    KeyFilter provides various presets configured with the <i>keyfilter</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto">
                        <label htmlFor="integer" className="font-bold block mb-2">
                            Integer
                        </label>
                        <InputText id="integer" keyfilter="int" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="number" className="font-bold block mb-2">
                            Number
                        </label>
                        <InputText id="number" keyfilter="num" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="money" className="font-bold block mb-2">
                            Money
                        </label>
                        <InputText id="money" keyfilter="money" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex-auto">
                        <label htmlFor="hex" className="font-bold block mb-2">
                            Hex
                        </label>
                        <InputText id="hex" keyfilter="hex" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="alphabetic" className="font-bold block mb-2">
                            Alphabetic
                        </label>
                        <InputText id="alphabetic" keyfilter="alpha" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="alphanumeric" className="font-bold block mb-2">
                            Alphanumeric
                        </label>
                        <InputText id="alphanumeric" keyfilter="alphanum" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <div className="flex-auto">
                        <label htmlFor="pint" className="font-bold block mb-2">
                            Positive Integer
                        </label>
                        <InputText id="pint" keyfilter="pint" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="pnum" className="font-bold block mb-2">
                            Positive Number
                        </label>
                        <InputText id="pnum" keyfilter="pnum" className="w-full" />
                    </div>
                    <div className="flex-auto">
                        <label htmlFor="email" className="font-bold block mb-2">
                            Email
                        </label>
                        <InputText id="email" keyfilter="email" className="w-full" />
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
