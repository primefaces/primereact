import { SpeedDial } from 'primereact/speeddial';

export default function SpeedDialPTDemo() {
    const items = [{ icon: 'pi pi-pencil' }, { icon: 'pi pi-refresh' }, { icon: 'pi pi-trash' }, { icon: 'pi pi-upload' }, { icon: 'pi pi-external-link' }];

    return (
        <div style={{ position: 'relative', height: '300px' }}>
            <SpeedDial direction="down" style={{ position: 'absolute', left: 'calc(50% - 2rem)', top: 0 }}>
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
        </div>
    );
}
