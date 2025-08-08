import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <InputNumber defaultValue={50} disabled prefix="%" />
        </div>
    );
}
