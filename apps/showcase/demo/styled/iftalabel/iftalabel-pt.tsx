'use client';

import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function IftaLabelDemo() {
    return (
        <Label.Ifta>
            <InputText id="username" />
            <Label.Root htmlFor="username">InputText</Label.Root>
        </Label.Ifta>
    );
}
