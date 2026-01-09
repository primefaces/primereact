import { AutoComplete } from '@primereact/ui/autocomplete';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <AutoComplete.Root options={[]} disabled>
                <AutoComplete.Input />

                <AutoComplete.Portal>
                    <AutoComplete.List>
                        <AutoComplete.Options style={{ maxHeight: '14rem' }} />
                    </AutoComplete.List>
                </AutoComplete.Portal>
            </AutoComplete.Root>
        </div>
    );
}
