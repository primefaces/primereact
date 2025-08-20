import { useMask, type UseMaskChangeEvent } from '@primereact/hooks';
import * as React from 'react';

export default function SlotCharDemo() {
    const [value, setValue] = React.useState('');
    const ref = React.useRef<HTMLInputElement>(null);
    const [target, setTarget] = React.useState<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (ref.current) {
            setTarget(ref.current as HTMLInputElement);
        }
    }, []);

    const { onMaskInput, onMaskKeyDown, onMaskKeyPress, onMaskFocus, onMaskBlur, onMaskPaste } = useMask({
        mask: '99/99/9999',
        slotChar: 'mm/dd/yyyy',
        onMaskChange: (event: UseMaskChangeEvent) => setValue(event.value ?? ''),
        target: target as HTMLInputElement
    });

    return (
        <div className="card flex justify-center">
            <input
                type="text"
                ref={ref}
                placeholder="mm/dd/yyyy"
                value={value}
                onInput={onMaskInput}
                onKeyDown={onMaskKeyDown}
                onKeyPress={onMaskKeyPress}
                onFocus={onMaskFocus}
                onBlur={onMaskBlur}
                onPaste={onMaskPaste}
                className="border border-gray-300 rounded-md px-3 py-1"
            />
        </div>
    );
}
