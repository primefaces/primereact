import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
