import { PasswordChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { Label } from 'primereact/label';
import { Password } from 'primereact/password';

import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="card flex justify-center">
            <Label.Ifta>
                <Password
                    value={value}
                    inputId="new-password"
                    variant="filled"
                    onValueChange={(e: PasswordChangeEvent) => setValue(e.value as string)}
                >
                    <Password.Input />
                </Password>
                <Label htmlFor="new-password" className="mb-2">
                    Password
                </Label>
            </Label.Ifta>
        </div>
    );
}
