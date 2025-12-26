'use client';

import { InputTagsInstance } from '@primereact/types/shared/inputtags';
import { InputTags } from 'primereact/inputtags';

export default function FilledDemo() {
    return (
        <InputTags.Root variant="filled">
            {(instance: InputTagsInstance) => {
                return (
                    <>
                        {instance?.state.value.map((value, index) => (
                            <InputTags.Item key={`${value}_${index}`} index={index} />
                        ))}
                        <InputTags.Input />
                        <InputTags.HiddenInput />
                    </>
                );
            }}
        </InputTags.Root>
    );
}
