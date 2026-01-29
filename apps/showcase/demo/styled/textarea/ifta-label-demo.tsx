'use client';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import { Textarea } from '@primereact/ui/textarea';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [value, setValue] = React.useState('');

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <Textarea
                    id="description"
                    value={value}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue(e.currentTarget.value)}
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                />
                <Label htmlFor="description">Description</Label>
            </IftaLabel>
        </div>
    );
}
