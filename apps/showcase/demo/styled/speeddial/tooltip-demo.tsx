import { SpeedDial } from '@primereact/ui/speeddial';
import { Tooltip } from '@primereact/ui/tooltip';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

export default function TooltipDemo() {
    const items = [
        { icon: Pencil, label: 'Add' },
        { icon: Refresh, label: 'Update' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="help" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => {
                                const Icon = action.icon;

                                return (
                                    <Tooltip.Root key={action.label} side="left">
                                        <Tooltip.Trigger as={SpeedDial.Item}>
                                            <SpeedDial.Action>
                                                <Icon />
                                            </SpeedDial.Action>
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                            <Tooltip.Content>
                                                <p>{action.label}</p>
                                                <Tooltip.Arrow />
                                            </Tooltip.Content>
                                        </Tooltip.Portal>
                                    </Tooltip.Root>
                                );
                            })}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial.Root>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="danger" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        <Tooltip.Group>
                            {items.map((action) => {
                                const Icon = action.icon;

                                return (
                                    <Tooltip.Root key={action.label} side="right">
                                        <Tooltip.Trigger as={SpeedDial.Item}>
                                            <SpeedDial.Action>
                                                <Icon />
                                            </SpeedDial.Action>
                                        </Tooltip.Trigger>
                                        <Tooltip.Portal>
                                            <Tooltip.Content>
                                                <p>{action.label}</p>
                                                <Tooltip.Arrow />
                                            </Tooltip.Content>
                                        </Tooltip.Portal>
                                    </Tooltip.Root>
                                );
                            })}
                        </Tooltip.Group>
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
