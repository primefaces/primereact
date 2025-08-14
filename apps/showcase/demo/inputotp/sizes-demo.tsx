import { InputOtp } from 'primereact/inputotp';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <InputOtp size="small">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
            <InputOtp>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
            <InputOtp size="large">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
