import { InputOtpInstance } from '@primereact/types/shared/inputotp';
import { InputOtp } from 'primereact/inputotp';

export default function CustomDemo() {
    return (
        <div className="card flex justify-center">
            <style scoped>
                {`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--p-inputtext-border-color);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--p-primary-color);
                    }
                `}
            </style>
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
                                        className="custom-otp-input"
                                        maxLength={1}
                                        onInput={(e) => onInput(e, index)}
                                        onClick={onClick}
                                        onKeyDown={onKeyDown}
                                        onPaste={onPaste}
                                    />
                                );
                                // return (
                                //     <input
                                //         value={state.tokens[index] ?? ''}
                                //         key={index}
                                //         type="text"
                                //         className="custom-otp-input"
                                //         onInput={(e) => {
                                //             const target = e.target as HTMLInputElement;

                                //             if (target.value.length > 1) {
                                //                 target.value = target.value.slice(0, 1);
                                //             }

                                //             onInput(e, index);
                                //         }}
                                //         onClick={onClick}
                                //         onKeyDown={onKeyDown}
                                //         onPaste={onPaste}
                                //     />
                                // );
                            })}
                        </>
                    );
                }}
            </InputOtp>
        </div>
    );
}
