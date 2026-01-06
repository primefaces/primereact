'use client';

import { InputTagsInstance, useInputTagsValueChangeEvent } from '@primereact/types/shared/inputtags';
import { InputTags } from 'primereact/inputtags';
import * as React from 'react';

export default function InvalidDemo() {
    const [tags, setTags] = React.useState<string[]>([]);

    return (
        <InputTags.Root value={tags} invalid={tags.length === 0} onValueChange={(e: useInputTagsValueChangeEvent) => setTags(e.value as string[])}>
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
        </InputTags.Root>
    );
}
