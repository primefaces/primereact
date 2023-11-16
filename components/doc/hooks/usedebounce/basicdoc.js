import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useDebounce } from '@/components/lib/hooks/Hooks';
import { InputText } from '@/components/lib/inputtext/InputText';

export function BasicDoc(props) {
    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

    const code = {
        basic: `
<InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
<span className="text-xl">
    Debounced Value: <strong>{debouncedValue}</strong>
</span>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { useDebounce } from 'primereact/hooks';

export default function BasicDemo() {
    const [inputValue, debouncedValue, setInputValue] = useDebounce('', 400);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <span className="text-xl">
                Debounced Value: <strong>{debouncedValue}</strong>
            </span>
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
        <div className="card flex flex-column align-items-center gap-3">
            <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <span className="text-xl">
                Debounced Value: <strong>{debouncedValue}</strong>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>The value will only be reflected when time between keystrokes is above 400ms.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <InputText type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <span className="text-xl">
                    Debounced Value: <strong>{debouncedValue}</strong>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
