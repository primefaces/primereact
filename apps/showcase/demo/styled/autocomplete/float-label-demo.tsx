'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <Label.Float>
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input id="over_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.List>
                            <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                        </AutoComplete.List>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label.Root htmlFor="over_label">Over Label</Label.Root>
            </Label.Float>

            <Label.Float variant="in">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input id="in_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.List>
                            <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                        </AutoComplete.List>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label.Root htmlFor="in_label">In Label</Label.Root>
            </Label.Float>

            <Label.Float variant="on">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Input id="on_label" />

                    <AutoComplete.Portal>
                        <AutoComplete.List>
                            <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                        </AutoComplete.List>
                    </AutoComplete.Portal>
                </AutoComplete.Root>

                <Label.Root htmlFor="on_label">On Label</Label.Root>
            </Label.Float>
        </div>
    );
}
