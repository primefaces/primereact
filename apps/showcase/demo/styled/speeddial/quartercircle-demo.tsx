import { useSpeedDialProps } from '@primereact/types/shared/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

const directions = [
    { direction: 'up-left', style: { position: 'absolute', right: 0, bottom: 0 } },
    { direction: 'up-right', style: { position: 'absolute', left: 0, bottom: 0 } },
    { direction: 'down-left', style: { position: 'absolute', right: 0, top: 0 } },
    { direction: 'down-right', style: { position: 'absolute', left: 0, top: 0 } }
];

export default function QuarterCircleDemo() {
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
                {directions.map((item) => (
                    <SpeedDial.Root
                        key={item.direction}
                        radius={120}
                        type="quarter-circle"
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
