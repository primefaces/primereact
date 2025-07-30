import { InputOtp } from 'primereact/inputotp';

export default function SizesDemo() {
    return (
        <div className="card flex flex-col items-center gap-4">
            <InputOtp defaultValue={''} size="small">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
            <InputOtp defaultValue={''}>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
            <InputOtp defaultValue={''} size="large">
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
