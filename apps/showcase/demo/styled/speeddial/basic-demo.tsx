import { SpeedDial } from '@primereact/ui/speeddial';

export default function BasicDemo() {
    const items = [
        { icon: 'pi pi-pencil' },
        { icon: 'pi pi-refresh' },
        { icon: 'pi pi-trash' },
        { icon: 'pi pi-upload' },
        { icon: 'pi pi-external-link' }
    ];

    return (
        <div>
            <div style={{ position: 'relative', height: '240px' }}>
                <SpeedDial.Root direction={'up'} style={{ position: 'absolute', right: 0, bottom: 0 }}>
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
            </div>
        </div>
    );
}
