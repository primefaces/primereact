import { ToggleButtonIndicatorInstance } from '@primereact/types/shared/togglebutton';
import { ToggleButton } from 'primereact/togglebutton';

export default function StateDemo() {
    return (
        <div className="card flex flex-wrap items-center justify-center gap-4">
            <ToggleButton>
                <ToggleButton.Indicator>{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? 'On' : 'Off')}</ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-lock"></i>Locked
                            </>
                        ) : (
                            <>
                                <i className="pi pi-lock-open"></i>Unlocked
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator>
                    {({ togglebutton }: ToggleButtonIndicatorInstance) =>
                        togglebutton?.state.pressed ? (
                            <>
                                <i className="pi pi-volume-up"></i>Mute
                            </>
                        ) : (
                            <>
                                <i className="pi pi-volume-off"></i>Unmute
                            </>
                        )
                    }
                </ToggleButton.Indicator>
            </ToggleButton>
            <ToggleButton>
                <ToggleButton.Indicator className="w-8 h-8">{({ togglebutton }: ToggleButtonIndicatorInstance) => (togglebutton?.state.pressed ? <i className="pi pi-heart-fill"></i> : <i className="pi pi-heart"></i>)}</ToggleButton.Indicator>
            </ToggleButton>
        </div>
    );
}
