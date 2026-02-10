'use client';
import { ChevronDown } from '@primeicons/react/chevron-down';
import { Times } from '@primeicons/react/times';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { Select } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const productCategories = [
    { label: 'Electronics', value: 'electronics', count: 1247 },
    { label: 'Clothing', value: 'clothing', count: 856 },
    { label: 'Garden', value: 'home', count: 634 },
    { label: 'Sports', value: 'sports', count: 421 },
    { label: 'Books', value: 'books', count: 2103 },
    { label: 'Toys', value: 'toys', count: 312 }
];

type CategoryOption = (typeof productCategories)[number] | null;

export default function ClearIconDemo() {
    const [category, setCategory] = React.useState<CategoryOption>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
                <Select.Root
                    value={category}
                    onValueChange={(e: SelectValueChangeEvent) => setCategory(e.value as CategoryOption)}
                    options={productCategories}
                    optionLabel="label"
                    className="w-full md:w-56"
                >
                    <Select.Trigger>
                        <Select.Value placeholder="Category" />
                        <Select.ClearIcon>
                            <Times />
                        </Select.ClearIcon>
                        <Select.Icon>
                            <ChevronDown />
                        </Select.Icon>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Positioner>
                            <Select.Panel>
                                <Select.List>
                                    <Select.Options>
                                        {productCategories.map((cat, index) => (
                                            <Select.Option key={cat.value} index={index} uKey={cat.value}>
                                                <div className="flex items-center justify-between w-full">
                                                    <span>{cat.label}</span>
                                                    <Tag severity="secondary" rounded>
                                                        {cat.count}
                                                    </Tag>
                                                </div>
                                            </Select.Option>
                                        ))}
                                    </Select.Options>
                                </Select.List>
                            </Select.Panel>
                        </Select.Positioner>
                    </Select.Portal>
                </Select.Root>
            </div>
        </div>
    );
}
