import { InputOtp } from '@primereact/ui/inputotp';

export default function IntegerOnlyDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root integerOnly>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
        </div>
    );
}
