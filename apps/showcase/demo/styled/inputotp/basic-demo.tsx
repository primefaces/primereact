'use client';

import { InputOtp } from '@primereact/ui/inputotp';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
        </div>
    );
}
