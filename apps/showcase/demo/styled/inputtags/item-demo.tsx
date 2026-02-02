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
                            <Tag key={`${value}_${index}`}>
                                {value}

                                <i className="pi pi-trash" onClick={() => instance?.onItemRemoveClick(index)} />
                            </Tag>
                        ))}
                        <IconField.Root className="static">
                            <InputTags.Input />
                            <IconField.Icon>
                                <i className="pi pi-times" onClick={() => instance?.onRemoveAllItems()} />
                            </IconField.Icon>
                        </IconField.Root>
                    </>
                );
            }}
        </InputTags.Root>
    );
}
