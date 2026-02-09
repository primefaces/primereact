'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { useInputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Button } from '@primereact/ui/button';
import { IconField } from '@primereact/ui/iconfield';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';
import { AngleDown } from '@primeicons/react/angle-down';
import { AngleUp } from '@primeicons/react/angle-up';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';

export default function ButtonsDemo() {
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(25);
    const [value3, setValue3] = React.useState(10.25);

    const inputNumber1 = useInputNumber({
        value: value1,
        mode: 'currency',
        currency: 'USD',
        onChange: (e: useInputNumberValueChangeEvent) => setValue1(e.value)
    });

    const inputNumber2 = useInputNumber({
        value: value2,
        min: 0,
        max: 100,
        onChange: (e: useInputNumberValueChangeEvent) => setValue2(e.value)
    });

    const inputNumber3 = useInputNumber({
        value: value3,
        mode: 'currency',
        currency: 'EUR',
        onChange: (e: useInputNumberValueChangeEvent) => setValue3(e.value)
    });

    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="stacked-buttons" className="font-bold text-sm block mb-2">
                    Stacked
                </Label>
                <InputGroup.Root>
                    <InputText
                        value={inputNumber1.state.formattedValue}
                        id="stacked-buttons"
                        fluid
                        onChange={inputNumber1.onInput}
                        onKeyDown={inputNumber1.onInputKeyDown}
                        onKeyPress={inputNumber1.onInputKeyPress}
                    />
                    <InputGroup.Addon className="flex-col">
                        <Button severity="secondary" onClick={() => setValue1((prev) => Number(prev) + 1)} className="py-0 text-[.5rem]">
                            <AngleUp />
                        </Button>
                        <Button severity="secondary" onClick={() => setValue1((prev) => Number(prev) - 1)} className="py-0 text-[.5rem]">
                            <AngleDown />
                        </Button>
                    </InputGroup.Addon>
                </InputGroup.Root>
            </div>

            <div className="flex-auto">
                <Label htmlFor="minmax-buttons" className="font-bold text-sm block mb-2">
                    Min-Max
                </Label>
                <InputGroup.Root>
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        className="border-(--p-inputtext-border-color) border-r-0"
                        iconOnly
                        disabled={value2 >= 100}
                        onClick={() => setValue2((prev) => Math.min(Number(prev) + 1, 100))}
                    >
                        <Plus></Plus>
                    </InputGroup.Addon>
                    <InputText
                        value={inputNumber2.state.formattedValue}
                        id="minmax-buttons"
                        fluid
                        onChange={inputNumber2.onInput}
                        onKeyDown={inputNumber2.onInputKeyDown}
                        onKeyPress={inputNumber2.onInputKeyPress}
                    />
                    <InputGroup.Addon
                        as={Button}
                        severity="secondary"
                        className="border-(--p-inputtext-border-color) border-l-0"
                        iconOnly
                        disabled={value2 <= 0}
                        onClick={() => setValue2((prev) => Math.max(Number(prev) - 1, 0))}
                    >
                        <Minus></Minus>
                    </InputGroup.Addon>
                </InputGroup.Root>
            </div>

            <div className="flex-auto">
                <Label htmlFor="horizontal-buttons" className="font-bold text-sm block mb-2">
                    Horizontal with Step
                </Label>
                <IconField.Root>
                    <IconField.Icon onClick={() => setValue3((prev) => Number(prev) + 0.25)} className="cursor-pointer">
                        <Plus></Plus>
                    </IconField.Icon>
                    <InputText
                        value={inputNumber3.state.formattedValue}
                        id="horizontal-buttons"
                        fluid
                        onChange={inputNumber3.onInput}
                        onKeyDown={inputNumber3.onInputKeyDown}
                        onKeyPress={inputNumber3.onInputKeyPress}
                    />
                    <IconField.Icon onClick={() => setValue3((prev) => Number(prev) - 0.25)} className="cursor-pointer">
                        <Minus></Minus>
                    </IconField.Icon>
                </IconField.Root>
            </div>
        </div>
    );
}
