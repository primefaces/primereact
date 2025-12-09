'use client';

import { InputTagsInstance, InputTagsValueChangeEvent } from '@primereact/types/shared/inputtags';
import { InputTags } from 'primereact/inputtags';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <Label.Float>
            <InputTags value={tags} onValueChange={(e: InputTagsValueChangeEvent) => setTags(e.value as string[])}>
                {(instance: InputTagsInstance) => {
                    return (
                        <>
                            {instance?.state.value.map((value, index) => (
                                <InputTags.Item key={`${value}_${index}`} index={index} />
                            ))}
                            <InputTags.Input />
                        </>
                    );
                }}
            </InputTags>
            <Label htmlFor="over_label">Over Label</Label>
        </Label.Float>
    );
}
