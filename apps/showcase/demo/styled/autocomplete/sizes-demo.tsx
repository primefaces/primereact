'use client';
import type { AutoCompleteCompleteEvent } from '@primereact/types/shared/autocomplete';
import { AutoComplete } from '@primereact/ui/autocomplete';
import * as React from 'react';

export default function SizesDemo() {
    const [items, setItems] = React.useState<string[]>([]);

    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <AutoComplete.Root options={items} size="small" placeholder="Small" onComplete={search}>
                <AutoComplete.Value placeholder="Small" />

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

            <AutoComplete.Root options={items} placeholder="Normal" onComplete={search}>
                <AutoComplete.Value placeholder="Normal" />

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

            <AutoComplete.Root options={items} size="large" placeholder="Large" onComplete={search}>
                <AutoComplete.Value placeholder="Large" />

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
