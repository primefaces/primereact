'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { IftaLabel } from '@primereact/ui/iftalabel';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function IftaLabelDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex justify-center">
            <IftaLabel>
                <AutoComplete.Root options={items} variant="filled" onComplete={search}>
                    <AutoComplete.Input id="autocomplete" />

                    <AutoComplete.Portal>
                        <AutoComplete.List>
                            <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                        </AutoComplete.List>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label htmlFor="autocomplete" className="mb-2">
                    Search
                </Label>
            </IftaLabel>
        </div>
    );
}
