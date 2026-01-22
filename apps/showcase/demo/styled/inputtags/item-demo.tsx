'use client';
import { SpinnerIcon } from '@primereact/icons';
import { InputTagsRootInstance } from '@primereact/types/shared/inputtags';
import { IconField } from '@primereact/ui/iconfield';
import { InputTags } from '@primereact/ui/inputtags';
import { Tag } from '@primereact/ui/tag';

export default function ItemDemo() {
    return (
        <InputTags.Root>
            {(instance: InputTagsRootInstance) => {
                return (
                    <>
                        <SpinnerIcon spin className="mx-1" />
                        {instance?.state.value.map((value, index) => (
                            <Tag.Root key={`${value}_${index}`}>
                                <Tag.Label>{value}</Tag.Label>
                                <Tag.Icon>
                                    <i className="pi pi-trash" onClick={() => instance?.onItemRemoveClick(index)} />
                                </Tag.Icon>
                            </Tag.Root>
                        ))}
                        <IconField.Root className="static">
                            <InputTags.Input />
                            <IconField.InputIcon>
                                <i className="pi pi-times" onClick={() => instance?.onRemoveAllItems()} />
                            </IconField.InputIcon>
                        </IconField.Root>
                    </>
                );
            }}
        </InputTags.Root>
    );
}
