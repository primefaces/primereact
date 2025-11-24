'use client';

import { useMask, type UseMaskChangeEvent } from '@primereact/hooks';
import { InputTextInstance } from '@primereact/types/shared/inputtext';
import { InputText } from 'primereact/inputtext';
import * as React from 'react';

export default function OptionalDemo() {
    const [value, setValue] = React.useState('');
    const ref = React.useRef<InputTextInstance>(null);
    const [target, setTarget] = React.useState<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (ref.current?.elementRef?.current) {
            setTarget(ref.current.elementRef.current as HTMLInputElement);
        }
    }, []);

    const { onMaskInput, onMaskKeyDown, onMaskKeyPress, onMaskFocus, onMaskBlur, onMaskPaste } = useMask({
        mask: '(999) 999-9999? x99999',
        onMaskChange: (event: UseMaskChangeEvent) => setValue(event.value ?? ''),
        target: target as HTMLInputElement
    });

    return (
        <div className="flex justify-center">
            <InputText
                ref={ref}
                placeholder="(999) 999-9999 x99999"
                value={value}
                onInput={onMaskInput}
                onKeyDown={onMaskKeyDown}
                onKeyPress={onMaskKeyPress}
                onFocus={onMaskFocus}
                onBlur={onMaskBlur}
                onPaste={onMaskPaste}
            />
        </div>
    );
}
