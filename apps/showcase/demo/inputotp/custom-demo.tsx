import { InputOtpInstance } from '@primereact/types/shared/inputotp';
import { InputOtp } from 'primereact/inputotp';

export default function CustomDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp defaultValue={''}>
                {(instance: InputOtpInstance) => {
                    const { onInput, onClick, onKeyDown, onPaste, state, registerText } = instance;

                    return (
                        <>
                            {Array.from({ length: 4 }, (_, index) => {
                                registerText();

                                return (
                                    <input
                                        value={state.tokens[index] ?? ''}
                                        key={index}
                                        type="text"
                                        inputMode="text"
                                        className="w-10 text-4xl border-0 appearance-none text-center transition-all duration-200 bg-transparent border-b-2 border-b-[var(--p-inputtext-border-color)] focus:outline-none focus:border-b-[var(--p-primary-color)]"
                                        maxLength={1}
                                        onInput={(e) => onInput(e, index)}
                                        onClick={onClick}
                                        onKeyDown={onKeyDown}
                                        onPaste={onPaste}
                                    />
                                );
                            })}
                        </>
                    );
                }}
            </InputOtp>
        </div>
    );
}
