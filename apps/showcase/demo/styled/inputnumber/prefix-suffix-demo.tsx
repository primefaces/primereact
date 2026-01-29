import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function PrefixSuffixDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="mile" className="font-bold text-sm block mb-2">
                    Mile
                </Label>
                <InputNumber defaultValue={20} id="mile" suffix=" mi" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="percent" className="font-bold text-sm block mb-2">
                    Percent
                </Label>
                <InputNumber defaultValue={50} id="percent" prefix="%" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="expiry" className="font-bold text-sm block mb-2">
                    Expiry
                </Label>
                <InputNumber defaultValue={10} id="expiry" prefix="Expires in " suffix=" days" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="temperature" className="font-bold text-sm block mb-2">
                    Temperature
                </Label>
                <InputNumber defaultValue={20} id="temperature" prefix="&uarr; " suffix="℃" min={0} max={40} fluid />
            </div>
        </div>
    );
}
