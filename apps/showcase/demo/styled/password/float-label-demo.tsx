'use client';
import { PasswordChangeEvent, usePasswordProps } from '@primereact/types/shared/password';
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
                <Password.Root value={value} onValueChange={(e: PasswordChangeEvent) => setValue(e.value as string)}>
                    <Password.Input />
                </Password.Root>
                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <Password.Root value={value2} onValueChange={(e: PasswordChangeEvent) => setValue2(e.value as string)}>
                    <Password.Input id="in_label" />
                </Password.Root>
                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <Password.Root value={value3} onValueChange={(e: PasswordChangeEvent) => setValue3(e.value as string)}>
                    <Password.Input id="on_label" />
                </Password.Root>
                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
