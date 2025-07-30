import { InputOtp } from 'primereact/inputotp';

export default function FilledDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp defaultValue={''}>
                <InputOtp.Text variant="filled" />
                <InputOtp.Text variant="filled" />
                <InputOtp.Text variant="filled" />
                <InputOtp.Text variant="filled" />
            </InputOtp>
        </div>
    );
}
