import { useMask, type UseMaskChangeEvent } from '@primereact/hooks';
import { InputTextInstance } from '@primereact/types/shared/inputtext';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FormatPatternsDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');
    const input1 = React.useRef<InputTextInstance>(null);
    const input2 = React.useRef<InputTextInstance>(null);
    const input3 = React.useRef<InputTextInstance>(null);
    const [target1, setTarget1] = React.useState<HTMLInputElement | null>(null);
    const [target2, setTarget2] = React.useState<HTMLInputElement | null>(null);
    const [target3, setTarget3] = React.useState<HTMLInputElement | null>(null);

    React.useEffect(() => {
        if (input1.current?.elementRef?.current) {
            setTarget1(input1.current.elementRef.current as HTMLInputElement);
        }

        if (input2.current?.elementRef?.current) {
            setTarget2(input2.current.elementRef.current as HTMLInputElement);
        }

        if (input3.current?.elementRef?.current) {
            setTarget3(input3.current.elementRef.current as HTMLInputElement);
        }
    }, []);

    // SSN Mask
    const {
        onMaskInput: onMaskInput1,
        onMaskKeyDown: onMaskKeyDown1,
        onMaskKeyPress: onMaskKeyPress1,
        onMaskFocus: onMaskFocus1,
        onMaskBlur: onMaskBlur1,
        onMaskPaste: onMaskPaste1
    } = useMask({
        mask: '999-99-9999',
        onMaskChange: (event: UseMaskChangeEvent) => setValue1(event.value ?? ''),
        target: target1 as HTMLInputElement
    });

    // Phone Mask
    const {
        onMaskInput: onMaskInput2,
        onMaskKeyDown: onMaskKeyDown2,
        onMaskKeyPress: onMaskKeyPress2,
        onMaskFocus: onMaskFocus2,
        onMaskBlur: onMaskBlur2,
        onMaskPaste: onMaskPaste2
    } = useMask({
        mask: '(999) 999-9999',
        onMaskChange: (event: UseMaskChangeEvent) => setValue2(event.value ?? ''),
        target: target2 as HTMLInputElement
    });

    // Serial Mask
    const {
        onMaskInput: onMaskInput3,
        onMaskKeyDown: onMaskKeyDown3,
        onMaskKeyPress: onMaskKeyPress3,
        onMaskFocus: onMaskFocus3,
        onMaskBlur: onMaskBlur3,
        onMaskPaste: onMaskPaste3
    } = useMask({
        mask: 'a*-999-a999',
        onMaskChange: (event: UseMaskChangeEvent) => setValue3(event.value ?? ''),
        target: target3 as HTMLInputElement
    });

    return (
        <div className="card flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="ssn" className="font-bold block mb-2">
                    SSN
                </Label>
                <InputText
                    ref={input1}
                    value={value1}
                    id="ssn"
                    placeholder="999-99-9999"
                    fluid
                    onInput={onMaskInput1}
                    onKeyDown={onMaskKeyDown1}
                    onKeyPress={onMaskKeyPress1}
                    onFocus={onMaskFocus1}
                    onBlur={onMaskBlur1}
                    onPaste={onMaskPaste1}
                />
            </div>

            <div className="flex-auto">
                <Label htmlFor="phone" className="font-bold block mb-2">
                    Phone
                </Label>
                <InputText
                    ref={input2}
                    value={value2}
                    id="phone"
                    placeholder="(999) 999-9999"
                    fluid
                    onInput={onMaskInput2}
                    onKeyDown={onMaskKeyDown2}
                    onKeyPress={onMaskKeyPress2}
                    onFocus={onMaskFocus2}
                    onBlur={onMaskBlur2}
                    onPaste={onMaskPaste2}
                />
            </div>

            <div className="flex-auto">
                <Label htmlFor="serial" className="font-bold block mb-2">
                    Serial
                </Label>
                <InputText
                    ref={input3}
                    value={value3}
                    id="serial"
                    placeholder="a*-999-a999"
                    fluid
                    onInput={onMaskInput3}
                    onKeyDown={onMaskKeyDown3}
                    onKeyPress={onMaskKeyPress3}
                    onFocus={onMaskFocus3}
                    onBlur={onMaskBlur3}
                    onPaste={onMaskPaste3}
                />
            </div>
        </div>
    );
}
