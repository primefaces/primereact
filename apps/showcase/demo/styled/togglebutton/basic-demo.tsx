'use client';
import { Heart } from '@primeicons/react/heart';
import { HeartFill } from '@primeicons/react/heart-fill';
import type { ToggleButtonIndicatorInstance } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? <HeartFill></HeartFill> : <Heart></Heart>)}
                </ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
