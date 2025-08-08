import { InputNumber } from 'primereact/inputnumber';

export default function VerticalDemo() {
    return (
        <div className="card flex justify-center">
            <InputNumber defaultValue={50} buttonLayout="vertical" style={{ width: '3rem' }} min={0} max={99}>
                <InputNumber.Increment />
                <InputNumber.Decrement />
            </InputNumber>
        </div>
    );
}
