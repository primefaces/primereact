import { InputOtp } from '@primereact/ui/inputotp';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputOtp.Root disabled>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp.Root>
        </div>
    );
}
