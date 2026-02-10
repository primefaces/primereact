'use client';
import { Times } from '@primeicons/react';
import { ChevronDownIcon } from '@primereact/icons';
import type { SelectValueChangeEvent } from '@primereact/types/shared/select';
import { Select } from '@primereact/ui/select';
import * as React from 'react';

const toppings = [
    { label: 'Pepperoni', value: 'pepperoni' },
    { label: 'Mushrooms', value: 'mushrooms' },
    { label: 'Onions', value: 'onions' },
    { label: 'Black Olives', value: 'olives' },
    { label: 'Green Peppers', value: 'peppers' },
    { label: 'Mozzarella', value: 'mozzarella' },
    { label: 'Basil', value: 'basil' },
    { label: 'Tomatoes', value: 'tomatoes' }
];

export default function MultipleDemo() {
    const [selected, setSelected] = React.useState<string[]>([]);

    const getLabel = () => {
        const first = toppings.find((t) => t.value === selected[0])?.label ?? selected[0];

        return selected.length > 1 ? `${first} (+${selected.length - 1} more)` : first;
    };

    return (
        <div className="flex justify-center">
            <Select.Root
                value={selected}
                onValueChange={(e: SelectValueChangeEvent) => setSelected(e.value as string[])}
                options={toppings}
                optionLabel="label"
                optionValue="value"
                multiple
                checkmark
                className="w-full md:w-56"
            >
                <Select.Trigger>
                    <Select.Value placeholder="Select toppings">{getLabel()}</Select.Value>
                    {selected.length > 0 && (
                        <Select.ClearIcon>
                            <Times />
                        </Select.ClearIcon>
                    )}
                    <Select.Icon>
                        <ChevronDownIcon />
                    </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                    <Select.Positioner>
                        <Select.Panel>
                            <Select.List>
                                <Select.Options style={{ maxHeight: '14rem' }} />
                            </Select.List>
                        </Select.Panel>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
}
