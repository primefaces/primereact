'use client';
import { InputTagsRootInstance } from '@primereact/types/shared/inputtags';
import { InputTags } from '@primereact/ui/inputtags';

export default function InputTagsPTDemo() {
    return (
        <InputTags.Root>
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
