'use client';

import { InputTagsInstance } from '@primereact/types/shared/inputtags';
import { InputTags } from 'primereact/inputtags';

export default function BasicDemo() {
    return (
        <InputTags delimiter=",">
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
    );
}
