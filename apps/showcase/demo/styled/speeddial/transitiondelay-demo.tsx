import { PlusIcon } from '@primereact/icons';
import { SpeedDial } from '@primereact/ui/speeddial';

export default function TransitionDelayDemo() {
    const items = [
        { icon: 'pi pi-pencil' },
        { icon: 'pi pi-refresh' },
        { icon: 'pi pi-trash' },
        { icon: 'pi pi-upload' },
        { icon: 'pi pi-external-link' }
    ];

    return (
        <div>
            <div className="flex justify-between" style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" transitionDelay={0} style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="secondary" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => (
                            <SpeedDial.Item key={action.icon}>
                                <SpeedDial.Action>
                                    <i className={action.icon} />
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        ))}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={80} style={{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }}>
                    <SpeedDial.Trigger severity="success" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => (
                            <SpeedDial.Item key={action.icon}>
                                <SpeedDial.Action>
                                    <i className={action.icon} />
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        ))}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={150} style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="info" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => (
                            <SpeedDial.Item key={action.icon}>
                                <SpeedDial.Action>
                                    <i className={action.icon} />
                                </SpeedDial.Action>
                            </SpeedDial.Item>
                        ))}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
