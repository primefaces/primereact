'use client';

import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { ChevronDownIcon, TimesIcon } from '@primereact/icons';
import { Chip } from '@primereact/ui/chip';
import { Select } from '@primereact/ui/select';
import { Tag } from '@primereact/ui/tag';
import * as React from 'react';

const productCategories = [
    { label: 'Electronics', value: 'electronics', count: 1247 },
    { label: 'Clothing', value: 'clothing', count: 856 },
    { label: 'Home & Garden', value: 'home', count: 634 },
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

export default function ClearIconDemo() {
    const [category, setCategory] = React.useState<string | null>(null);
    const [priceRange, setPriceRange] = React.useState<string | null>(null);

    const selectedCategory = productCategories.find((c) => c.value === category);
    const hasFilters = category !== null || priceRange !== null;

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3">
                <Select.Root
                    value={category}
                    onValueChange={(e: SelectValueChangeEvent) => setCategory(e.value as string | null)}
                    options={productCategories}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <Select.Trigger>
                        <span className={category ? '' : 'text-surface-400'}>{selectedCategory?.label || 'Category'}</span>
                    </Select.Trigger>
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
                                            <Tag.Root severity="secondary" rounded>
                                                <Tag.Label>{cat.count}</Tag.Label>
                                            </Tag.Root>
                                        </div>
                                    </Select.Option>
                                ))}
                            </Select.Options>
                        </Select.List>
                    </Select.Portal>
                </Select.Root>

                <Select.Root
                    value={priceRange}
                    onValueChange={(e: SelectValueChangeEvent) => setPriceRange(e.value as string | null)}
                    options={priceRanges}
                    optionLabel="label"
                    optionValue="value"
                    className="w-40"
                >
                    <Select.Trigger>
                        <span className={priceRange ? '' : 'text-surface-400'}>
                            {priceRanges.find((p) => p.value === priceRange)?.label || 'Price'}
                        </span>
                    </Select.Trigger>
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
                {hasFilters && (
                    <>
                        {category && (
                            <Chip.Root onRemove={() => setCategory(null)}>
                                <Chip.Label>{selectedCategory?.label}</Chip.Label>
                                <Chip.RemoveIcon />
                            </Chip.Root>
                        )}
                        {priceRange && (
                            <Chip.Root onRemove={() => setPriceRange(null)}>
                                <Chip.Label>{priceRanges.find((p) => p.value === priceRange)?.label}</Chip.Label>
                                <Chip.RemoveIcon />
                            </Chip.Root>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
