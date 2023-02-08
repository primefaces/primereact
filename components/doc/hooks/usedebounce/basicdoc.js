import React from 'react';
import { useDebounce } from '../../../lib/hooks/Hooks';
import { InputText } from '../../../lib/inputtext/InputText';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

    const code = {
        basic: `
<InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
<p>Debounced value: {debouncedValue}</p>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { useDebounce } from 'primereact/hooks';

export default function BasicDemo() {

    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div>
                <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <p>Debounced value: {debouncedValue}</p>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { useDebounce } from 'primereact/hooks';

export default function BasicDemo() {

    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div>
                <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <p>Debounced value: {debouncedValue}</p>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <div>
                    <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <p>Debounced value: {debouncedValue}</p>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
