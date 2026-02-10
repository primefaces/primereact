'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import { FloatLabel } from '@primereact/ui/floatlabel';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function FloatLabelDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-wrap justify-center items-end gap-4">
            <FloatLabel>
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Value id="over_label" />

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

                <Label htmlFor="over_label">Over Label</Label>
            </FloatLabel>

            <FloatLabel variant="in">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Value id="in_label" />

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

                <Label htmlFor="in_label">In Label</Label>
            </FloatLabel>

            <FloatLabel variant="on">
                <AutoComplete.Root options={items} onComplete={search}>
                    <AutoComplete.Value id="on_label" />

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

                <Label htmlFor="on_label">On Label</Label>
            </FloatLabel>
        </div>
    );
}
