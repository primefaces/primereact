import { MinusIcon } from '@primereact/icons';
import { InputOtpInstance } from '@primereact/types/shared/inputotp';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
import * as React from 'react';

export default function SampleDemo() {
    return (
        <div className="card flex justify-center">
            <style scoped>
                {`
                    .custom-otp-input-sample {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border-radius: 0;
                        border: 1px solid var(--p-inputtext-border-color);
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-right: 0 none;
                        transition: outline-color 0.3s;
                        color: var(--p-inputtext-color);
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--p-focus-ring-color);
                    }

                    .custom-otp-input-sample:first-child,
                    .custom-otp-input-sample:nth-child(5) {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    .custom-otp-input-sample:nth-child(3),
                    .custom-otp-input-sample:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        border-right-width: 1px;
                        border-right-style: solid;
                        border-color: var(--p-inputtext-border-color);
                    }
                `}
            </style>
            <div className="flex flex-col items-center">
                <div className="font-bold text-xl mb-2">Authenticate Your Account</div>
                <p className="text-surface-500 dark:text-surface-400 block mb-8">Please enter the code sent to your phone.</p>
                <InputOtp defaultValue={''} className="gap-0">
                    {(instance: InputOtpInstance) => {
                        const { onInput, onClick, onKeyDown, onPaste, state, registerText } = instance;

                        return (
                            <>
                                {Array.from({ length: 6 }, (_, index) => {
                                    registerText();

                                    return (
                                        <React.Fragment key={index}>
                                            <input
                                                value={state.tokens[index] ?? ''}
                                                type="text"
                                                inputMode="text"
                                                className="custom-otp-input-sample"
                                                maxLength={1}
                                                onInput={(e) => onInput(e, index)}
                                                onClick={onClick}
                                                onKeyDown={onKeyDown}
                                                onPaste={onPaste}
                                            />
                                            {index === 2 && (
                                                <div className="px-4">
                                                    <MinusIcon />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                })}
                            </>
                        );
                    }}
                </InputOtp>
                <div className="flex justify-between mt-8 self-stretch">
                    <Button variant="link" className="p-0">
                        Resend Code
                    </Button>
                    <Button>Submit Code</Button>
                </div>
            </div>
        </div>
    );
}
