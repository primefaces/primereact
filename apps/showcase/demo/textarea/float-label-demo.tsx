'use client';

import { Label } from 'primereact/label';
import { Textarea } from 'primereact/textarea';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [value3, setValue3] = React.useState('');

    return (
        <div className="flex flex-wrap justify-center items-stretch gap-4">
            <Label.Float>
                <Textarea
                    value={value1}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue1(e.currentTarget.value)}
                    id="over_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label.Root htmlFor="over_label">Over Label</Label.Root>
            </Label.Float>
            <Label.Float variant="in">
                <Textarea
                    value={value2}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue2(e.currentTarget.value)}
                    id="in_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label.Root htmlFor="in_label">In Label</Label.Root>
            </Label.Float>
            <Label.Float variant="on">
                <Textarea
                    value={value3}
                    onInput={(e: React.FormEvent<HTMLTextAreaElement>) => setValue3(e.currentTarget.value)}
                    id="on_label"
                    rows={5}
                    cols={30}
                    style={{ resize: 'none' }}
                    className="h-full"
                />
                <Label.Root htmlFor="on_label">On Label</Label.Root>
            </Label.Float>
        </div>
    );
}
