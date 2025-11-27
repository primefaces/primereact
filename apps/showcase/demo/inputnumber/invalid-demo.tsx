'use client';

import type { InputNumberValueChangeEvent } from '@primereact/types/shared/inputnumber';
import { InputNumber } from 'primereact/inputnumber';
import * as React from 'react';

export default function InvalidDemo() {
    const [value1, setValue1] = React.useState<number | null>(null);
    const [value2, setValue2] = React.useState<number | null>(null);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <InputNumber
                value={value1}
                onValueChange={(e: InputNumberValueChangeEvent) => setValue1(e.value)}
                invalid={value1 === null}
                mode="decimal"
                minFractionDigits={2}
                placeholder="Amount"
            />
            <InputNumber
                value={value2}
                onValueChange={(e: InputNumberValueChangeEvent) => setValue2(e.value)}
                invalid={value2 === null}
                mode="decimal"
                minFractionDigits={2}
                variant="filled"
                placeholder="Amount"
            />
        </div>
    );
}
