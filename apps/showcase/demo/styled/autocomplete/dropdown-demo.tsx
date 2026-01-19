'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';
import { ChevronDownIcon } from '@primereact/icons';

export default function DropdownDemo() {
    const [items, setItems] = React.useState<string[] | number[]>([...Array(10).keys()]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems(event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search}>
                <AutoComplete.Input />

                <AutoComplete.Trigger>
                    <ChevronDownIcon />
                </AutoComplete.Trigger>

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
