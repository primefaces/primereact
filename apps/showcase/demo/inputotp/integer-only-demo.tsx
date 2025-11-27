'use client';

import { InputOtp } from 'primereact/inputotp';

export default function IntegerOnlyDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp integerOnly>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
