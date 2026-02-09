import { SpeedDial } from '@primereact/ui/speeddial';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

export default function SpeedDialPTDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div style={{ position: 'relative', height: '300px' }}>
            <SpeedDial.Root direction="down" style={{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }}>
                <SpeedDial.Trigger />
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
    );
}
