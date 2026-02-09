'use client';
import { Lock } from '@primeicons/react/lock';
import type { ToggleButtonIndicatorInstance } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from '@primereact/ui/togglebutton';

export default function RenderPropsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}
                </ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <Lock></Lock>Locked
                            </>
                        ) : (
                            <>
                                <i className="pi pi-lock-open" />
                                Unlocked
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>
            <ToggleButton.Root>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-volume-up" />
                                Mute
                            </>
                        ) : (
                            <>
                                <i className="pi pi-volume-off" />
                                Unmute
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton.Root>
        </div>
    );
}
