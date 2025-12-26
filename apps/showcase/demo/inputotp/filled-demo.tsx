'use client';

import { InputOtp } from 'primereact/inputotp';

export default function FilledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root variant="filled">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
        </div>
    );
}
