'use client';
import { Spinner } from '@primeicons/react/spinner';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { InputGroup } from '@primereact/ui/inputgroup';
import * as React from 'react';

export default function BasicDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={items} onComplete={search}>
                <InputGroup.Root>
                    <AutoComplete.Input />
                    <InputGroup.Addon>
                        <Spinner className="animate-spin" />
                    </InputGroup.Addon>
                </InputGroup.Root>

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
