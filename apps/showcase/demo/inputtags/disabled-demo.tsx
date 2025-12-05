'use client';

import { InputTagsControlInstance } from '@primereact/types/shared/inputtags';
import { InputTags } from 'primereact/inputtags';

export default function DisabledDemo() {
    return (
        <InputTags disabled>
            <InputTags.Control>
                {(instance: InputTagsControlInstance) => {
                    const { inputtags } = instance;

                    return (
                        <>
                            {inputtags?.state.value.map((value, index) => (
                                <InputTags.Item key={`${value}_${index}`} index={index} />
                            ))}
                            <InputTags.Input />
                        </>
                    );
                }}
            </InputTags.Control>
        </InputTags>
    );
}
