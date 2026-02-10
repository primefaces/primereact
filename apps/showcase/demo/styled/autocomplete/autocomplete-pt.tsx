'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

export default function AutoCompletePTDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <AutoComplete.Root options={items} onComplete={search}>
            <AutoComplete.Value />

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
    );
}
