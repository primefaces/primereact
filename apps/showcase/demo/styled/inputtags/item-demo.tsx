'use client';
import { Times, TimesCircle } from '@primeicons/react';
import { InputTagsRootInstance, InputTagsRootValueChangeEvent } from '@primereact/types/shared/inputtags';
import { IconField } from '@primereact/ui/iconfield';
import { InputTags } from '@primereact/ui/inputtags';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

export default function ItemDemo() {
    const [tags, setTags] = React.useState<string[]>(['JavaScript', 'TypeScript']);

    return (
        <InputTags.Root value={tags} onValueChange={(e: InputTagsRootValueChangeEvent) => setTags(e.value as string[])}>
            {(instance: InputTagsRootInstance) => {
                return (
                    <>
                        {instance?.state.value.map((value, index) => (
                            <Tag key={`${value}_${index}`}>
                                {value}
                                <Times size={12} className="cursor-pointer ml-2" onClick={() => instance?.onItemRemoveClick(index)} />
                            </Tag>
                        ))}
                        <IconField.Root className="static">
                            <InputTags.Input />
                            <IconField.Icon>
                                <TimesCircle size={16} className="cursor-pointer" onClick={() => instance?.onRemoveAllItems()} />
                            </IconField.Icon>
                        </IconField.Root>
                    </>
                );
            }}
        </InputTags.Root>
    );
}
