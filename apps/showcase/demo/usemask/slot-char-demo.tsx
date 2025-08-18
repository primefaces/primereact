import { useMask, type UseMaskChangeEvent } from '@primereact/hooks';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';

export default function SlotCharDemo() {
    const ref = React.useRef(null);
    const [value, setValue] = React.useState('');
    const { onMaskInput, onMaskKeyDown, onMaskKeyPress, onMaskFocus, onMaskBlur, onMaskPaste } = useMask({
        mask: '99/99/9999',
        slotChar: 'mm/dd/yyyy',
        onMaskChange: (event: UseMaskChangeEvent) => setValue(event.value ?? ''),
        inputRef: ref
    });

    return (
        <div className="card flex justify-center">
            <InputText ref={ref} placeholder="mm/dd/yyyy" value={value} onInput={onMaskInput} onKeyDown={onMaskKeyDown} onKeyPress={onMaskKeyPress} onFocus={onMaskFocus} onBlur={onMaskBlur} onPaste={onMaskPaste} />
        </div>
    );
}
