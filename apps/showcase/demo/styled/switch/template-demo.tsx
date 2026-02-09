'use client';
import { Check } from '@primeicons/react/check';
import { Times } from '@primeicons/react/times';
import type { SwitchThumbInstance } from '@primereact/types/shared/switch';
import { Switch } from '@primereact/ui/switch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch.Root>
                <Switch.Control>
                    <Switch.Thumb>
                        {(instance: SwitchThumbInstance) => {
                            const { switch: switchContext } = instance;

                            return <>{switchContext?.state.checked ? <Check /> : <Times />}</>;
                        }}
                    </Switch.Thumb>
                </Switch.Control>
            </Switch.Root>
        </div>
    );
}
