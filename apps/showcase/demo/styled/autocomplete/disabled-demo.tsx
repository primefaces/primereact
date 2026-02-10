import { AutoComplete } from '@primereact/ui/autocomplete';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={[]} disabled className="w-full md:w-56">
                <AutoComplete.Value className="w-full" />

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
