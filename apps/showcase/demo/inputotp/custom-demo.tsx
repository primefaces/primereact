import { InputOtp } from 'primereact/inputotp';

export default function CustomDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp defaultValue={''}>
                {Array.from({ length: 4 }, (_, index) => {
                    return (
                        <InputOtp.Text
                            key={index}
                            className="w-[40px] text-4xl appearance-none text-center transition-all duration-200 bg-transparent border-0 border-b-2 border-b-[var(--p-inputtext-border-color)] rounded-none focus:outline-none focus:border-b-[var(--p-primary-color)]"
                        />
                    );
                })}
            </InputOtp>
        </div>
    );
}
