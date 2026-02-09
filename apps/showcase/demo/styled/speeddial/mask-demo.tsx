'use client';
import { Motion } from '@primereact/core/motion';
import { SpeedDialRootVisibleChangeEvent } from '@primereact/types/shared/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import * as React from 'react';
import { Plus } from '@primeicons/react/plus';
import { Pencil } from '@primeicons/react/pencil';
import { Refresh } from '@primeicons/react/refresh';
import { Trash } from '@primeicons/react/trash';
import { Upload } from '@primeicons/react/upload';
import { ExternalLink } from '@primeicons/react/external-link';

export default function MaskDemo() {
    const [visible, setVisible] = React.useState(false);

    const items = [
        { icon: Pencil, label: 'Edit' },
        { icon: Refresh, label: 'Refresh' },
        { icon: Trash, label: 'Delete' },
        { icon: Upload, label: 'Upload' },
        { icon: ExternalLink, label: 'External' }
    ];

    return (
        <>
            <div style={{ position: 'relative', height: '360px' }}>
                <Motion
                    visible={visible}
                    name="p-overlay-mask"
                    className="absolute inset-0 bg-black/50 rounded-md"
                    onClick={() => setVisible(false)}
                />
                <SpeedDial.Root
                    direction="up"
                    visible={visible}
                    onVisibleChange={(e: SpeedDialRootVisibleChangeEvent) => setVisible(e.value as boolean)}
                    style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}
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
            </div>
        </>
    );
}
