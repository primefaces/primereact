'use client';

import { InputNumber } from 'primereact/inputnumber';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputNumber size="small" placeholder="Small" mode="currency" currency="USD" locale="en-US" />
            <InputNumber placeholder="Normal" mode="currency" currency="USD" locale="en-US" />
            <InputNumber size="large" placeholder="Large" mode="currency" currency="USD" locale="en-US" />
        </div>
    );
}
