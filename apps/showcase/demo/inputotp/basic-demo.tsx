'use client';

import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
