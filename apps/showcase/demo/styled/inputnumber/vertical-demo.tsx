'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { useInputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';

export default function VerticalDemo() {
    const [value, setValue] = React.useState(50);

    const inputNumber = useInputNumber({
        value: value,
        onValueChange: (e: useInputNumberValueChangeEvent) => setValue(e.value)
    });

    return (
        <div className="flex justify-center">
            <InputGroup.Root className="flex-col w-12">
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-12 border-(--p-inputtext-border-color) border-b-0 rounded-se-md rounded-es-none"
                    onClick={() => setValue((prev) => Number(prev) + 1)}
                >
                    <i className="pi pi-plus"></i>
                </InputGroup.Addon>
                <InputText
                    value={inputNumber.state.formattedValue}
                    className="w-12 text-center rounded-none"
                    onChange={inputNumber.onInput}
                    onKeyDown={inputNumber.onInputKeyDown}
                    onKeyPress={inputNumber.onInputKeyPress}
                />
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-12 border-(--p-inputtext-border-color) border-t-0 rounded-se-none rounded-es-md"
                    onClick={() => setValue((prev) => Number(prev) - 1)}
                >
                    <i className="pi pi-minus"></i>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
