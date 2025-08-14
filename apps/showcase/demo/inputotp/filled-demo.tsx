import { InputOtp } from 'primereact/inputotp';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp variant="filled">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
