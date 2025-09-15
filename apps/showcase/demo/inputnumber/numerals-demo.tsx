import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function NumeralsDemo() {
    return (
        <div className="card flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="integeronly" className="font-bold block mb-2">
                    Integer Only
                </Label>
                <InputNumber defaultValue={42723} inputId="integeronly" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="withoutgrouping" className="font-bold block mb-2">
                    Without Grouping
                </Label>
                <InputNumber defaultValue={58151} inputId="withoutgrouping" useGrouping={false} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmaxfraction" className="font-bold block mb-2">
                    Min-Max Fraction Digits
                </Label>
                <InputNumber defaultValue={2351.35} inputId="minmaxfraction" minFractionDigits={2} maxFractionDigits={5} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="minmax" className="font-bold block mb-2">
                    Min-Max Boundaries
                </Label>
                <InputNumber defaultValue={50} inputId="minmax" min={0} max={100} fluid />
            </div>
        </div>
    );
}
