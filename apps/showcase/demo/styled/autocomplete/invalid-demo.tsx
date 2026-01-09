'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

export default function InvalidDemo() {
    const [value, setValue] = React.useState<string>('');
    const [value2, setValue2] = React.useState<string>('');
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <AutoComplete.Root options={items} invalid={!value} placeholder="Search" onComplete={search}>
                <AutoComplete.Input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>

            <AutoComplete.Root options={items} invalid={!value2} variant="filled" placeholder="Search" onComplete={search}>
                <AutoComplete.Input value={value2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue2(e.target.value)} />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
