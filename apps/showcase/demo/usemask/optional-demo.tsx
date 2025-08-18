import { useMask, type UseMaskChangeEvent } from '@primereact/hooks';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';

export default function OptionalDemo() {
    const ref = React.useRef(null);
    const [value, setValue] = React.useState('');
    const { onMaskInput, onMaskKeyDown, onMaskKeyPress, onMaskFocus, onMaskBlur, onMaskPaste } = useMask({
        mask: '(999) 999-9999? x99999',
        onMaskChange: (event: UseMaskChangeEvent) => setValue(event.value ?? ''),
        inputRef: ref
    });

    return (
        <div className="card flex justify-center">
            <InputText ref={ref} placeholder="(999) 999-9999 x99999" value={value} onInput={onMaskInput} onKeyDown={onMaskKeyDown} onKeyPress={onMaskKeyPress} onFocus={onMaskFocus} onBlur={onMaskBlur} onPaste={onMaskPaste} />
        </div>
    );
}
