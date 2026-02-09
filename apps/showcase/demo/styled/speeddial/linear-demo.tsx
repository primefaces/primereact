import { useSpeedDialProps } from '@primereact/types/shared/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

const directions = [
    { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
    { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
    { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
    { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
];

export default function LinearDemo() {
    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item, index) => (
                    <SpeedDial.Root
                        key={index}
                        direction={item.direction as useSpeedDialProps['direction']}
                        style={item.style as React.CSSProperties}
                    >
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
                ))}
            </div>
        </div>
    );
}
