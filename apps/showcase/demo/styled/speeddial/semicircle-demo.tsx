'use client';

import { SpeedDial } from 'primereact/speeddial';

const directions = [
    { direction: 'up', style: { position: 'absolute', left: 'calc(50% - 2rem)', bottom: 0 } },
    { direction: 'down', style: { position: 'absolute', left: 'calc(50% - 2rem)', top: 0 } },
    { direction: 'left', style: { position: 'absolute', top: 'calc(50% - 2rem)', right: 0 } },
    { direction: 'right', style: { position: 'absolute', top: 'calc(50% - 2rem)', left: 0 } }
];

export default function SemiCircleDemo() {
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
                {directions.map((item) => (
                    <SpeedDial.Root key={item.direction} radius={80} type="semi-circle" direction={item.direction} style={item.style}>
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
                    </SpeedDial.Root>
                ))}
            </div>
        </div>
    );
}
