'use client';

import { SpeedDialProps } from '@primereact/types/shared/speeddial';
import { SpeedDial } from 'primereact/speeddial';

const directions = [
    { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
    { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
    { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
    { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
];

export default function LinearDemo() {
    const items = [
        { icon: 'pi pi-pencil' },
        { icon: 'pi pi-refresh' },
        { icon: 'pi pi-trash' },
        { icon: 'pi pi-upload' },
        { icon: 'pi pi-external-link' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item, index) => (
                    <SpeedDial key={index} direction={item.direction as SpeedDialProps['direction']} style={item.style as React.CSSProperties}>
                        <SpeedDial.Button />
                        <SpeedDial.List>
                            {items.map((action) => (
                                <SpeedDial.Item key={action.icon}>
                                    <SpeedDial.Action>
                                        <i className={action.icon}></i>
                                    </SpeedDial.Action>
                                </SpeedDial.Item>
                            ))}
                        </SpeedDial.List>
                    </SpeedDial>
                ))}
            </div>
        </div>
    );
}
