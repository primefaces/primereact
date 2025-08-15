import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function CurrencyDemo() {
    return (
        <div className="card flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="currency-us" className="font-bold block mb-2">
                    United States
                </Label>
                <InputNumber defaultValue={1500} inputId="currency-us" mode="currency" currency="USD" locale="en-US" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-germany" className="font-bold block mb-2">
                    Germany
                </Label>
                <InputNumber defaultValue={2500} inputId="currency-germany" mode="currency" currency="EUR" locale="de-DE" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-india" className="font-bold block mb-2">
                    India
                </Label>
                <InputNumber defaultValue={4250} inputId="currency-india" mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="currency-japan" className="font-bold block mb-2">
                    Japan
                </Label>
                <InputNumber defaultValue={5002} inputId="currency-japan" mode="currency" currency="JPY" locale="jp-JP" fluid />
            </div>
        </div>
    );
}
