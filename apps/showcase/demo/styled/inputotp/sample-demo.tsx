import { Minus } from '@primeicons/react/minus';
import { Button } from '@primereact/ui/button';
import { InputOtp } from '@primereact/ui/inputotp';
import * as React from 'react';

export default function SampleDemo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                    <span className="font-bold text-xl">Authenticate Your Account</span>
                    <p className="text-muted-color">Please enter the code sent to your phone.</p>
                </div>
                <InputOtp.Root integerOnly className="gap-0">
                    {Array.from({ length: 6 }, (_, index) => {
                        const inputClasses = [
                            'w-12 h-12 text-lg text-center transition-all duration-200',
                            'border border-surface-300 dark:border-surface-600 bg-transparent rounded-none',
                            'outline-offset-0 outline-transparent transition-[outline-color] duration-200',
                            'text-color',
                            index === 0 || index === 3 ? 'rounded-l-lg' : '',
                            index === 2 || index === 5 ? 'rounded-r-lg' : '',
                            !(index === 2 || index === 5) ? 'border-r-0' : '',
                            'focus:outline-2 focus:outline-primary focus:-outline-offset-2'
                        ].join(' ');

                        return (
                            <React.Fragment key={index}>
                                <InputOtp.Text className={inputClasses} />
                                {index === 2 && (
                                    <div className="px-4 flex items-center">
                                        <Minus />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </InputOtp.Root>
                <div className="flex justify-between self-stretch">
                    <Button variant="link" className="p-0">
                        Resend Code
                    </Button>
                    <Button>Submit Code</Button>
                </div>
            </div>
        </div>
    );
}
