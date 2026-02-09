'use client';
import { PasswordValueChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { Label } from '@primereact/ui/label';
import { Password } from '@primereact/ui/password';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value, setValue] = React.useState<usePasswordProps['value']>('');
    const [value2, setValue2] = React.useState<usePasswordProps['value']>('');
    const [value3, setValue3] = React.useState<usePasswordProps['value']>('');

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <Password value={value} onValueChange={(e: PasswordValueChangeEvent) => setValue(e.value as string)} />
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <Password value={value2} onValueChange={(e: PasswordValueChangeEvent) => setValue2(e.value as string)} />
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <Password value={value3} onValueChange={(e: PasswordValueChangeEvent) => setValue3(e.value as string)} />
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
