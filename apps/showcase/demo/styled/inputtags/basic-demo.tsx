'use client';
import { InputTagsRootInstance, InputTagsRootValueChangeEvent } from '@primereact/types/shared/inputtags';
import { InputTags } from '@primereact/ui/inputtags';
import * as React from 'react';

export default function BasicDemo() {
    const [tags, setTags] = React.useState<string[]>(['React']);

    return (
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
    );
}
