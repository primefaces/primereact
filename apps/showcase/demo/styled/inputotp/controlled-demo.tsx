'use client';
import type { useInputOtpValueChangeEvent } from '@primereact/types/shared/inputotp';
import { Button } from '@primereact/ui/button';
import { InputOtp } from '@primereact/ui/inputotp';
import * as React from 'react';

export default function ControlledDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex flex-col items-center gap-6">
            <InputOtp.Root value={value} onValueChange={(e: useInputOtpValueChangeEvent) => setValue(e.value)}>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
            <div className="flex items-center gap-4">
                <span className="text-sm text-muted-color">
                    Value: <strong className="text-color">{value || ''}</strong>
                </span>
                <Button severity="secondary" size="small" onClick={() => setValue('')}>
                    Reset
                </Button>
            </div>
        </div>
    );
}
