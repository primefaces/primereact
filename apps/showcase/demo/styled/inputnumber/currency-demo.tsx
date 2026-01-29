import { InputNumber } from '@primereact/ui/inputnumber';
import { Label } from '@primereact/ui/label';

export default function CurrencyDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="currency-us" className="font-bold text-sm block mb-2">
                    United States
                </Label>
                <InputNumber defaultValue={1500} id="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-germany" className="font-bold text-sm block mb-2">
                    Germany
                </Label>
                <InputNumber defaultValue={2500} id="currency-germany" mode="currency" currency="EUR" locale="de-DE" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-india" className="font-bold text-sm block mb-2">
                    India
                </Label>
                <InputNumber defaultValue={4250} id="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-japan" className="font-bold text-sm block mb-2">
                    Japan
                </Label>
                <InputNumber defaultValue={5002} id="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
            </div>
        </div>
    );
}
