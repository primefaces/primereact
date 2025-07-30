import { InputOtp } from 'primereact/inputotp';

export default function InputOtpPTDemo() {
    return (
        <InputOtp defaultValue={''}>
            <InputOtp.Text />
            <InputOtp.Text />
            <InputOtp.Text />
            <InputOtp.Text />
        </InputOtp>
    );
}
