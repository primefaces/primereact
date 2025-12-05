'use client';

import { SpinnerIcon } from '@primereact/icons';
import { InputTagsControlInstance } from '@primereact/types/shared/inputtags';
import { IconField } from 'primereact/iconfield';
import { InputTags } from 'primereact/inputtags';
import { Tag } from 'primereact/tag';

export default function ItemDemo() {
    return (
        <InputTags>
            <InputTags.Control>
                {(instance: InputTagsControlInstance) => {
                    const { inputtags } = instance;

                    return (
                        <>
                            <SpinnerIcon spin className="mx-1" />
                            {inputtags?.state.value.map((value, index) => (
                                <Tag key={`${value}_${index}`}>
                                    <Tag.Label>{value}</Tag.Label>
                                    <Tag.Icon>
                                        <i className="pi pi-trash" onClick={() => inputtags?.onItemRemoveClick(index)} />
                                    </Tag.Icon>
                                </Tag>
                            ))}
                            <IconField className="static">
                                <InputTags.Input />
                                <IconField.Icon>
                                    <i className="pi pi-times" onClick={() => inputtags?.onRemoveAllItems()} />
                                </IconField.Icon>
                            </IconField>
                        </>
                    );
                }}
            </InputTags.Control>
        </InputTags>
    );
}
