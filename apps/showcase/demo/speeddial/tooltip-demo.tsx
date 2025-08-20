import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';

export default function TooltipDemo() {
    const items = [
        { icon: 'pi pi-pencil', label: 'Add' },
        { icon: 'pi pi-refresh', label: 'Update' },
        { icon: 'pi pi-trash', label: 'Delete' },
        { icon: 'pi pi-upload', label: 'Upload' },
        { icon: 'pi pi-external-link', label: 'External' }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Button severity="help" />
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => (
                                <Tooltip key={action.icon} side="left">
                                    <Tooltip.Trigger as={SpeedDial.Item}>
                                        <SpeedDial.Action>
                                            <i className={action.icon}></i>
                                        </SpeedDial.Action>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content>
                                            <p>{action.label}</p>
                                            <Tooltip.Arrow />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip>
                            ))}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial>
                <SpeedDial direction="up" style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Button severity="danger" />
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => (
                                <Tooltip key={action.icon} side="right">
                                    <Tooltip.Trigger as={SpeedDial.Item}>
                                        <SpeedDial.Action>
                                            <i className={action.icon}></i>
                                        </SpeedDial.Action>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content>
                                            <p>{action.label}</p>
                                            <Tooltip.Arrow />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip>
                            ))}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial>
            </div>
        </div>
    );
}
