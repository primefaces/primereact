import { InputNumber } from '@primereact/ui/inputnumber';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <InputNumber defaultValue={50} disabled prefix="%" />
        </div>
    );
}
