'use client';

import { useInputNumber } from '@primereact/headless/inputnumber';
import type { useInputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { Button } from '@primereact/ui/button';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';
import * as React from 'react';
import { Minus } from '@primeicons/react/minus';
import { Plus } from '@primeicons/react/plus';

export default function VerticalDemo() {
    const [value, setValue] = React.useState(50);

    const { state, onInput, onInputKeyDown, onInputKeyPress } = useInputNumber({
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
                    <Plus></Plus>
                </InputGroup.Addon>
                <InputText
                    value={state.formattedValue}
                    className="w-12 text-center rounded-none"
                    onChange={onInput}
                    onKeyDown={onInputKeyDown}
                    onKeyPress={onInputKeyPress}
                />
                <InputGroup.Addon
                    as={Button}
                    severity="secondary"
                    iconOnly
                    className="w-12 border-(--p-inputtext-border-color) border-t-0 rounded-se-none rounded-es-md"
                    onClick={() => setValue((prev) => Number(prev) - 1)}
                >
                    <Minus></Minus>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
