import { InputOtp } from 'primereact/inputotp';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <InputOtp defaultValue={''}>
                <InputOtp.Text size="small" />
                <InputOtp.Text size="small" />
                <InputOtp.Text size="small" />
                <InputOtp.Text size="small" />
            </InputOtp>
            <InputOtp defaultValue={''}>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
            <InputOtp defaultValue={''}>
                <InputOtp.Text size="large" />
                <InputOtp.Text size="large" />
                <InputOtp.Text size="large" />
                <InputOtp.Text size="large" />
            </InputOtp>
        </div>
    );
}
