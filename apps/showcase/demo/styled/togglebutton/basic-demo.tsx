'use client';
import type { ToggleButtonIndicatorInstance } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? <i className="pi pi-heart-fill"></i> : <i className="pi pi-heart"></i>
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
