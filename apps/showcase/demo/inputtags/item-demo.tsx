'use client';

import { SpinnerIcon } from '@primereact/icons';
import { InputTagsInstance } from '@primereact/types/shared/inputtags';
import { IconField } from 'primereact/iconfield';
import { InputTags } from 'primereact/inputtags';
import { Tag } from 'primereact/tag';

export default function ItemDemo() {
    return (
        <InputTags>
            {(instance: InputTagsInstance) => {
                return (
                    <>
                        <SpinnerIcon spin className="mx-1" />
                        {instance?.state.value.map((value, index) => (
                            <Tag key={`${value}_${index}`}>
                                <Tag.Label>{value}</Tag.Label>
                                <Tag.Icon>
                                    <i className="pi pi-trash" onClick={() => instance?.onItemRemoveClick(index)} />
                                </Tag.Icon>
                            </Tag>
                        ))}
                        <IconField className="static">
                            <InputTags.Input />
                            <IconField.Icon>
                                <i className="pi pi-times" onClick={() => instance?.onRemoveAllItems()} />
                            </IconField.Icon>
                        </IconField>
                    </>
                );
            }}
        </InputTags>
    );
}
