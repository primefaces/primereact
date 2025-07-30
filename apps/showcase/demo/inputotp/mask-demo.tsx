import { InputOtp } from 'primereact/inputotp';

export default function MaskDemo() {
    return (
        <div className="card flex justify-center">
            <InputOtp defaultValue={''} mask>
                {Array.from({ length: 4 }, (_, index) => (
                    <InputOtp.Text key={index} />
                ))}
            </InputOtp>
        </div>
    );
}
