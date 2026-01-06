'use client';

import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center">
            <Label.Ifta>
                <InputText id="username" />
                <Label.Root htmlFor="username">InputText</Label.Root>
            </Label.Ifta>
        </div>
    );
}
