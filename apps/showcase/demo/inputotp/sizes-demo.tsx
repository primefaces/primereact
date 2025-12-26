'use client';

import { InputOtp } from 'primereact/inputotp';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <InputOtp.Root size="small">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
            <InputOtp.Root>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
            <InputOtp.Root size="large">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
        </div>
    );
}
