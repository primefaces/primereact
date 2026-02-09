import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

export default function TransitionDelayDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div className="flex justify-between" style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" transitionDelay={0} style={{ position: 'absolute', left: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="secondary" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label}>
                                    <SpeedDial.Action>
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={80} style={{ position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 }}>
                    <SpeedDial.Trigger severity="success" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label}>
                                    <SpeedDial.Action>
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>

                <SpeedDial.Root direction="up" transitionDelay={150} style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger severity="info" className="transition-transform duration-200 data-open:rotate-45">
                        <Plus />
                    </SpeedDial.Trigger>
                    <SpeedDial.List>
                        {items.map((action) => {
                            const Icon = action.icon;

                            return (
                                <SpeedDial.Item key={action.label}>
                                    <SpeedDial.Action>
                                        <Icon />
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            );
                        })}
                    </SpeedDial.List>
                </SpeedDial.Root>
            </div>
        </div>
    );
}
