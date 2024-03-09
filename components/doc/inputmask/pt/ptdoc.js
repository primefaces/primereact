import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask
    value={value}
    onChange={(e) => setValue(e.target.value)}
    mask="99-999999"
    placeholder="99-999999"
    pt={{
        input: {
            root: {
                className: 'border-teal-400'
            }
        }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function PTDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputMask
                value={value}
                onChange={(e) => setValue(e.target.value)}
                mask="99-999999"
                placeholder="99-999999"
                pt={{
                    input: {
                        root: {
                            className: 'border-teal-400'
                        }
                    }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function PTDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputMask
                value={value}
                onChange={(e) => setValue(e.target.value)}
                mask="99-999999"
                placeholder="99-999999"
                pt={{
                    input: {
                        root: {
                            className: 'border-teal-400'
                        }
                    }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    mask="99-999999"
                    placeholder="99-999999"
                    pt={{
                        root: {
                            className: 'border-teal-400'
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
