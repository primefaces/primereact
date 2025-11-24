'use client';

import { PasswordChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { Label } from 'primereact/label';
import { Password } from 'primereact/password';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value, setValue] = React.useState<usePasswordProps['value']>('');
    const [value2, setValue2] = React.useState<usePasswordProps['value']>('');
    const [value3, setValue3] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <Label.Float>
                <Password value={value} onValueChange={(e: PasswordChangeEvent) => setValue(e.value as string)}>
                    <Password.Input />
                </Password>
                <Label htmlFor="over_label">Over Label</Label>
            </Label.Float>

            <Label.Float variant="in">
                <Password value={value2} onValueChange={(e: PasswordChangeEvent) => setValue2(e.value as string)}>
                    <Password.Input id="in_label" />
                </Password>
                <Label htmlFor="in_label">In Label</Label>
            </Label.Float>

            <Label.Float variant="on">
                <Password value={value3} onValueChange={(e: PasswordChangeEvent) => setValue3(e.value as string)}>
                    <Password.Input id="on_label" />
                </Password>
                <Label htmlFor="on_label">On Label</Label>
            </Label.Float>
        </div>
    );
}
