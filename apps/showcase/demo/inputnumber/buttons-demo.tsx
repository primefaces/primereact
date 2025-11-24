'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { InputNumberInstance, useInputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputGroup } from 'primereact/inputgroup';
import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function ButtonsDemo() {
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(25);
    const [value3, setValue3] = React.useState(10.25);

    const inputRef1 = React.useRef<InputNumberInstance>(null);
    const inputRef2 = React.useRef<InputNumberInstance>(null);
    const inputRef3 = React.useRef<InputNumberInstance>(null);

    const inputNumber1 = useInputNumber({
        target: inputRef1,
        value: value1,
        mode: 'currency',
        currency: 'USD',
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue1(e.value)
    });

    const inputNumber2 = useInputNumber({
        target: inputRef2,
        value: value2,
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue2(e.value)
    });

    const inputNumber3 = useInputNumber({
        target: inputRef3,
        value: value3,
        mode: 'currency',
        currency: 'EUR',
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue3(e.value)
    });

    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="stacked-buttons" className="font-bold block mb-2">
                    Stacked
                </Label>
                <InputGroup>
                    <InputNumber
                        ref={inputRef1}
                        value={value1}
                        inputId="stacked-buttons"
                        mode="currency"
                        currency="USD"
                        fluid
                        onValueChange={inputNumber1?.onValueChange}
                    />
                    <InputGroup.Addon className="flex-col">
                        <Button
                            severity="secondary"
                            onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef1.current?.increment(e, 1)}
                            onPointerUp={inputRef1.current?.stopSpin}
                            className="py-0 text-[.5rem]"
                        >
                            <i className="pi pi-angle-up" />
                        </Button>
                        <Button
                            severity="secondary"
                            onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef1.current?.decrement(e, -1)}
                            onPointerUp={inputRef1.current?.stopSpin}
                            className="py-0 text-[.5rem]"
                        >
                            <i className="pi pi-angle-down" />
                        </Button>
                    </InputGroup.Addon>
                </InputGroup>
            </div>

            <div className="flex-auto">
                <Label htmlFor="minmax-buttons" className="font-bold block mb-2">
                    Min-Max
                </Label>
                <InputGroup>
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        iconOnly
                        disabled={value2 === 100}
                        onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef2.current?.increment(e, 1)}
                        onPointerUp={inputRef2.current?.stopSpin}
                    >
                        <i className="pi pi-plus"></i>
                    </InputGroup.Addon>
                    <InputNumber
                        ref={inputRef2}
                        value={value2}
                        inputId="minmax-buttons"
                        fluid
                        min={0}
                        max={100}
                        onValueChange={inputNumber2?.onValueChange}
                    />
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        iconOnly
                        disabled={value2 === 0}
                        onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef2.current?.decrement(e, -1)}
                        onPointerUp={inputRef2.current?.stopSpin}
                    >
                        <i className="pi pi-minus"></i>
                    </InputGroup.Addon>
                </InputGroup>
            </div>

            <div className="flex-auto">
                <Label htmlFor="horizontal-buttons" className="font-bold block mb-2">
                    Horizontal with Step
                </Label>
                <IconField>
                    <IconField.Icon
                        onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef3.current?.increment(e, 0.25)}
                        onPointerUp={inputRef3.current?.stopSpin}
                    >
                        <i className="pi pi-plus"></i>
                    </IconField.Icon>
                    <InputNumber
                        ref={inputRef3}
                        value={value3}
                        inputId="horizontal-buttons"
                        fluid
                        mode="currency"
                        currency="EUR"
                        onValueChange={inputNumber3?.onValueChange}
                    />
                    <IconField.Icon
                        onPointerDown={(e: React.PointerEvent<HTMLButtonElement>) => inputRef3.current?.decrement(e, -0.25)}
                        onPointerUp={inputRef3.current?.stopSpin}
                    >
                        <i className="pi pi-minus"></i>
                    </IconField.Icon>
                </IconField>
            </div>
        </div>
    );
}
