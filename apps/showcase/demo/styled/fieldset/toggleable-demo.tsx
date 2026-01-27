'use client';
import { MinusIcon, PlusIcon } from '@primereact/icons';
import type { FieldsetTriggerInstance } from '@primereact/types/shared/fieldset';
import { Fieldset } from '@primereact/ui/fieldset';

export default function ToggleableDemo() {
    return (
        <Fieldset.Root defaultOpen>
            <Fieldset.Legend>
                <Fieldset.Trigger className="flex items-center gap-2">
                    {(instance: FieldsetTriggerInstance) => {
                        const open = instance.fieldset?.state.open;

                        return (
                            <>
                                {open ? <MinusIcon /> : <PlusIcon />}
                                <Fieldset.Title>Legend</Fieldset.Title>
                            </>
                        );
                    }}
                </Fieldset.Trigger>
            </Fieldset.Legend>
            <Fieldset.Content>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset.Content>
        </Fieldset.Root>
    );
}
