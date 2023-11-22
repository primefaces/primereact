import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { useState } from 'react';

export function RegexWordDoc(props) {
    const [prevValue, setPrevValue] = useState('');

    const validateInput = (event, validated) => {
        const target = event.target;

        // validated is the result of the regex against the whole input string
        if (validated) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

            // key was OK so do nothing
            return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    };

    const code = {
        basic: `
<InputText id="numkeys" keyfilter={/^[+]?(\d{1,12})?$/} validateOnly onInput={validateInput} />
        `,
        javascript: `
import React, { useState }  from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    const [prevValue, setPrevValue] = useState('');

    const validateInput = (event, validatePattern) => {
        const target = event.target;

        // validatePattern is the result of the regex against the whole input string
        if (validatePattern) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

            // key was OK so do nothing
            return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    };

    return (
        <div className="card flex justify-content-center">
            <div>
                <label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow "+" only once at start)
                </label>
                <InputText id="numkeys" keyfilter={/^[+]?(\d{1,12})?$/} validateOnly onInput={validateInput} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState }  from 'react'; 
import { InputText } from 'primereact/inputtext';

export default function RegexDemo() {
    const [prevValue, setPrevValue] = useState('');

    const validateInput = (event: React.FormEvent<HTMLInputElement>, validatePattern: boolean) => {
        const target = event.target as HTMLInputElement;

        // validated is the result of the regex against the whole input string
        if (validatePattern) {
            if (target.value.length > 0) {
                setPrevValue(target.value);
            }

        // key was OK so do nothing
        return;
        }

        // key made the whole input not valid so block this key
        //  Compare current value with previous value
        if (target.value.length > 0) {
            // Set previous valid value
            target.value = prevValue;
        }
    };

    return (
        <div className="card flex justify-content-center">
            <div>
                <label htmlFor="numkeys" className="font-bold block mb-2">
                    Block Numeric (allow "+" only once at start)
                </label>
                <InputText id="numkeys" keyfilter={/^[+]?(\d{1,12})?$/} validateOnly onInput={validateInput} />
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
                    In addition to the presets, a regular expression can be used to validate the entire word using <i>validateOnly</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div>
                    <label htmlFor="numkeys" className="font-bold block mb-2">
                        Numeric (allow "+" only once at start)
                    </label>
                    <InputText id="numkeys" keyfilter={/^[+]?(\d{1,12})?$/} validateOnly onInput={validateInput} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
