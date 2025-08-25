import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function ButtonsDemo() {
    return (
        <div className="card flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="stacked-buttons" className="font-bold block mb-2">
                    Stacked
                </Label>
                <InputNumber defaultValue={20} inputId="stacked-buttons" mode="currency" currency="USD" fluid>
                    <InputNumber.Increment />
                    <InputNumber.Decrement />
                </InputNumber>
            </div>

            <div className="flex-auto">
                <Label htmlFor="minmax-buttons" className="font-bold block mb-2">
                    Min-Max Boundaries
                </Label>
                <InputNumber defaultValue={25} inputId="minmax-buttons" mode="decimal" min={0} max={100} fluid>
                    <InputNumber.Increment />
                    <InputNumber.Decrement />
                </InputNumber>
            </div>
            <div className="flex-auto">
                <Label htmlFor="horizontal-buttons" className="font-bold block mb-2">
                    Horizontal with Step
                </Label>
                <InputNumber defaultValue={10.25} inputId="horizontal-buttons" buttonLayout="horizontal" step={0.25} mode="currency" currency="EUR" fluid>
                    <InputNumber.Increment />
                    <InputNumber.Decrement />
                </InputNumber>
            </div>
        </div>
    );
}
