'use client';

import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber defaultValue={50} disabled prefix="%" />
        </div>
    );
}
