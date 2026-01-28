'use client';
import { InputTagsRootInstance, InputTagsRootValueChangeEvent } from '@primereact/types/shared/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <Label.Float>
            <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
                {(instance: InputTagsRootInstance) => {
                    return (
                        <>
                            {instance?.state.value.map((value, index) => (
                                <InputTags.Item key={`${value}_${index}`} index={index} />
                            ))}
                            <InputTags.Input />
                        </>
                    );
                }}
            </InputTags.Root>
            <Label.Root htmlFor="over_label">Over Label</Label.Root>
        </Label.Float>
    );
}
