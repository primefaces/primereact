'use client';

import { InputNumber } from 'primereact/inputnumber';
import { Label } from 'primereact/label';

export default function LocaleDemo() {
    return (
        <div className="flex flex-wrap gap-4">
            <div className="flex-auto">
                <Label htmlFor="locale-user" className="font-bold block mb-2">
                    User Locale
                </Label>
                <InputNumber defaultValue={151351} inputId="locale-user" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-us" className="font-bold block mb-2">
                    United States Locale
                </Label>
                <InputNumber defaultValue={115744} inputId="locale-us" locale="en-US" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-german" className="font-bold block mb-2">
                    German Locale
                </Label>
                <InputNumber defaultValue={635524} inputId="locale-german" locale="de-DE" minFractionDigits={2} fluid />
            </div>
            <div className="flex-auto">
                <Label htmlFor="locale-indian" className="font-bold block mb-2">
                    Indian Locale
                </Label>
                <InputNumber defaultValue={732762} inputId="locale-indian" locale="en-IN" minFractionDigits={2} fluid />
            </div>
        </div>
    );
}
