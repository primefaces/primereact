'use client';

import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp mask>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtp.Text key={index} />
                ))}
            </InputOtp>
        </div>
    );
}
