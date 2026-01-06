'use client';

import { Label } from 'primereact/label';
import { Textarea } from 'primereact/textarea';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <Label.Ifta>
                <Textarea
                    id="description"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value)}
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                />
                <Label.Root htmlFor="description">Description</Label.Root>
            </Label.Ifta>
        </div>
    );
}
