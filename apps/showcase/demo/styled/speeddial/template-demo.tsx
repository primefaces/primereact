'use client';
import { SpeedDialRootVisibleChangeEvent } from '@primereact/types/shared/speeddial';
import { SpeedDial } from '@primereact/ui/speeddial';
import * as React from 'react';
import { Plus } from '@primeicons/react/plus';
import { Heart } from '@primeicons/react/heart';
import { ShareAlt } from '@primeicons/react/share-alt';
import { Print } from '@primeicons/react/print';
import { Save } from '@primeicons/react/save';
import { Copy } from '@primeicons/react/copy';

export default function TemplateDemo() {
    const [visible, setVisible] = React.useState(false);

    const items = [
        { icon: Heart, label: 'Like' },
        { icon: ShareAlt, label: 'Share' },
        { icon: Print, label: 'Print' },
        { icon: Save, label: 'Save' },
        { icon: Copy, label: 'Copy' }
    ];

    return (
        <div className="flex justify-center" style={{ position: 'relative', height: '450px' }}>
            <SpeedDial.Root
                direction="down"
                transitionDelay={50}
                visible={visible}
                onVisibleChange={(e: SpeedDialRootVisibleChangeEvent) => setVisible(e.value as boolean)}
                style={{ position: 'absolute', top: 0 }}
            >
                <SpeedDial.Trigger severity="warn" className="w-12 h-12 transition-transform duration-200 data-open:rotate-45">
                    <Plus className="w-4! h-4!" />
                </SpeedDial.Trigger>
                <SpeedDial.List className="gap-4 mt-4">
                    {items.map((item, index) => (
                        <SpeedDial.Item key={index}>
                            <div
                                className="flex gap-3 cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                onClick={() => setVisible(false)}
                            >
                                <span className="flex items-center justify-center w-24 px-6 py-2 bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 rounded-lg text-surface-500 dark:text-surface-400 font-medium">
                                    {item.label}
                                </span>
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-700 text-surface-500 dark:text-surface-400">
                                    {React.createElement(item.icon, { className: 'text-xl' })}
                                </span>
                            </div>
                        </SpeedDial.Item>
                    ))}
                </SpeedDial.List>
            </SpeedDial.Root>
        </div>
    );
}
