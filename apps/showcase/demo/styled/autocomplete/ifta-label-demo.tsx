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
                <AutoComplete.Root options={items} variant="filled" onComplete={search} className="w-full md:w-56">
                    <AutoComplete.Value id="autocomplete" className="w-full" />

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

                <Label htmlFor="autocomplete" className="mb-2">
                    Search
                </Label>
            </IftaLabel>
        </div>
    );
}
