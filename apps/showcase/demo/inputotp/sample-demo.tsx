import { MinusIcon } from '@primereact/icons';
import { InputOtpInstance } from '@primereact/types/shared/inputotp';
import { Button } from 'primereact/button';
import { InputOtp } from 'primereact/inputotp';
import * as React from 'react';

export default function SampleDemo() {
    return (
        <div className="card flex justify-center">
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

                                    const inputClasses = [
                                        'w-12 h-12 text-2xl appearance-none text-center transition-all duration-200',
                                        'border border-[var(--p-inputtext-border-color)] bg-transparent',
                                        'outline-offset-[-2px] outline-transparent transition-[outline-color] duration-300',
                                        'text-[var(--p-inputtext-color)]',
                                        index === 0 || index === 3 ? 'rounded-l-xl' : 'rounded-none',
                                        index === 2 || index === 5 ? 'rounded-r-xl' : '',
                                        !(index === 2 || index === 5) ? 'border-r-0' : '',
                                        'focus:outline-2 focus:outline-[var(--p-focus-ring-color)]'
                                    ].join(' ');

                                    return (
                                        <React.Fragment key={index}>
                                            <input value={state.tokens[index] ?? ''} type="text" inputMode="text" className={inputClasses} maxLength={1} onInput={(e) => onInput(e, index)} onClick={onClick} onKeyDown={onKeyDown} onPaste={onPaste} />
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
