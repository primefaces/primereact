import { PlusIcon } from '@primereact/icons';
import { SpeedDial } from '@primereact/ui/speeddial';
import { Tooltip } from '@primereact/ui/tooltip';

export default function TooltipDemo() {
    const items = [
        { icon: 'pi pi-pencil', label: 'Add' },
        { icon: 'pi pi-refresh', label: 'Update' },
        { icon: 'pi pi-trash', label: 'Delete' },
        { icon: 'pi pi-upload', label: 'Upload' },
        { icon: 'pi pi-external-link', label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="help" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => (
                                <Tooltip.Root key={action.icon} side="left">
                                    <Tooltip.Trigger as={SpeedDial.Item}>
                                        <SpeedDial.Action>
                                            <i className={action.icon} />
                                        </SpeedDial.Action>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content>
                                            <p>{action.label}</p>
                                            <Tooltip.Arrow />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            ))}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial.Root>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="danger" className="transition-transform duration-200 data-open:rotate-45">
                        <PlusIcon />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => (
                                <Tooltip.Root key={action.icon} side="right">
                                    <Tooltip.Trigger as={SpeedDial.Item}>
                                        <SpeedDial.Action>
                                            <i className={action.icon} />
                                        </SpeedDial.Action>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content>
                                            <p>{action.label}</p>
                                            <Tooltip.Arrow />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            ))}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
