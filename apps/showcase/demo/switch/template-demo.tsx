'use client';

import { CheckIcon, TimesIcon } from '@primereact/icons';
import type { SwitchThumbInstance } from '@primereact/types/shared/switch';
import { Switch } from 'primereact/switch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root>
                <Switch.Control>
                    <Switch.Thumb>
                        {(instance: SwitchThumbInstance) => {
                            const { switch: switchContext } = instance;

                            return <>{switchContext?.state.checked ? <CheckIcon /> : <TimesIcon />}</>;
                        }}
                    </Switch.Thumb>
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
