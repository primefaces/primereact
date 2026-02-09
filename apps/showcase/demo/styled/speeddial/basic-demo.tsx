import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

export default function BasicDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction="up" style={{ position: 'absolute', right: 0, bottom: 0 }}>
                    <SpeedDial.Trigger className="transition-transform duration-200 data-open:rotate-45">
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
