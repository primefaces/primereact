import { InputOtp } from '@primereact/ui/inputotp';

export default function CustomDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtp.Text
                        key={index}
                        className="w-12 h-12 text-3xl text-center bg-transparent border-0 border-b-2 border-surface-300 dark:border-surface-600 rounded-none outline-none transition-colors duration-200 focus:border-primary"
                    />
                ))}
            </InputOtp.Root>
        </div>
    );
}
