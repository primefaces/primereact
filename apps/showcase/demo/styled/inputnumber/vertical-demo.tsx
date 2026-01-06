'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { InputNumberInstance, useInputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Button } from 'primereact/button';
import { InputGroup } from 'primereact/inputgroup';
import { InputNumber } from 'primereact/inputnumber';
import * as React from 'react';

export default function VerticalDemo() {
    const [value, setValue] = React.useState(50);

    const inputRef = React.useRef<InputNumberInstance>(null);

    const inputNumber = useInputNumber({
        target: inputRef,
        value: value,
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue(e.value)
    });

    return (
        <div className="flex justify-center">
            <InputGroup.Root className="flex-col w-[3rem]">
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-[3rem] border-r-[var(--p-inputtext-border-color)] border-b-0 rounded-se-md rounded-es-none"
                    onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef.current?.increment(e, 1)}
                    onPointerUp={inputRef.current?.stopSpin}
                >
                    <i className="pi pi-plus"></i>
                </InputGroup.Addon>
                <InputNumber ref={inputRef} value={value} min={0} max={100} onValueChange={inputNumber?.onValueChange} className="w-[3rem]" />
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-[3rem] border-l-[var(--p-inputtext-border-color)] border-l border-t-0 rounded-se-none rounded-es-md"
                    onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef.current?.decrement(e, -1)}
                    onPointerUp={inputRef.current?.stopSpin}
                >
                    <i className="pi pi-minus"></i>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
