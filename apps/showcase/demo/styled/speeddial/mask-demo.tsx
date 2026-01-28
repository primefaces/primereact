'use client';
import { Motion } from '@primereact/core/motion';
import { PlusIcon } from '@primereact/icons';
import { SpeedDialRootVisibleChangeEvent } from '@primereact/types/shared/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import * as React from 'react';

export default function MaskDemo() {
    const [visible, setVisible] = React.useState(false);

    const items = [
        { icon: 'pi pi-pencil' },
        { icon: 'pi pi-refresh' },
        { icon: 'pi pi-trash' },
        { icon: 'pi pi-upload' },
        { icon: 'pi pi-external-link' }
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
        </>
    );
}
