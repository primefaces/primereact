'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';
import { ChevronDown } from '@primeicons/react/chevron-down';

export default function DropdownDemo() {
    const [items, setItems] = React.useState<string[] | number[]>([...Array(10).keys()]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems(event.query ? [...Array(10).keys()].map((item) => event.query + '-' + item) : [...Array(10).keys()]);
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search}>
                <AutoComplete.Value />

                <AutoComplete.Trigger>
                    <ChevronDown />
                </AutoComplete.Trigger>

                <AutoComplete.Portal>
                    <AutoComplete.Positioner>
                        <AutoComplete.Panel>
                            <AutoComplete.List>
                                <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                            </AutoComplete.List>
                        </AutoComplete.Panel>
                    </AutoComplete.Positioner>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
