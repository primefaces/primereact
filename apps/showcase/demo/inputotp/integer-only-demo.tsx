import { InputOtp } from 'primereact/inputotp';

export default function IntegerOnlyDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp defaultValue={''} integerOnly>
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
                <InputOtp.Text />
            </InputOtp>
        </div>
    );
}
