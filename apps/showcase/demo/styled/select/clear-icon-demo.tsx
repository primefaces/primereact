'use client';
import { ChevronDownIcon, TimesIcon } from '@primereact/icons';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { Chip } from '@primereact/ui/chip';
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

const priceRanges = [
    { label: 'Under $25', value: '0-25' },
    { label: '$25 - $50', value: '25-50' },
    { label: '$50 - $100', value: '50-100' },
    { label: '$100 - $200', value: '100-200' },
    { label: 'Over $200', value: '200+' }
];

type CategoryOption = (typeof productCategories)[number] | null;
type PriceRangeOption = (typeof priceRanges)[number] | null;

export default function ClearIconDemo() {
    const [category, setCategory] = React.useState<CategoryOption>(null);
    const [priceRange, setPriceRange] = React.useState<PriceRangeOption>(null);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
                <Select.Root
                    value={category}
                    onValueChange={(e: SelectValueChangeEvent) => setCategory(e.value as CategoryOption)}
                    options={productCategories}
                    optionLabel="label"
                    className="w-40"
                >
                    <Select.Trigger placeholder="Category" />
                    {category && (
                        <Select.ClearIcon>
                            <TimesIcon />
                        </Select.ClearIcon>
                    )}
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>
                    <Select.Portal>
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
                    </Select.Portal>
                </Select.Root>

                <Select.Root
                    value={priceRange}
                    onValueChange={(e: SelectValueChangeEvent) => setPriceRange(e.value as PriceRangeOption)}
                    options={priceRanges}
                    optionLabel="label"
                    className="w-40"
                >
                    <Select.Trigger placeholder="Price" />
                    {priceRange && (
                        <Select.ClearIcon>
                            <TimesIcon className="w-3 h-3" />
                        </Select.ClearIcon>
                    )}
                    <Select.Dropdown>
                        <ChevronDownIcon />
                    </Select.Dropdown>
                    <Select.Portal>
                        <Select.List>
                            <Select.Options />
                        </Select.List>
                    </Select.Portal>
                </Select.Root>
            </div>

            <div className="flex items-center gap-2 h-6">
                <span className="text-sm text-surface-500">Active filters:</span>
                <>
                    {category && (
                        <Chip.Root onRemove={() => setCategory(null)}>
                            <Chip.Label>{category.label}</Chip.Label>
                            <Chip.RemoveIcon />
                        </Chip.Root>
                    )}
                    {priceRange && (
                        <Chip.Root onRemove={() => setPriceRange(null)}>
                            <Chip.Label>{priceRange.label}</Chip.Label>
                            <Chip.RemoveIcon />
                        </Chip.Root>
                    )}
                </>
            </div>
        </div>
    );
}
