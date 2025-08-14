import { SpeedDial } from 'primereact/speeddial';

export default function MaskDemo() {
    const items = [{ icon: 'pi pi-pencil' }, { icon: 'pi pi-refresh' }, { icon: 'pi pi-trash' }, { icon: 'pi pi-upload' }, { icon: 'pi pi-external-link' }];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <SpeedDial.Mask>
                    <SpeedDial direction="up" style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
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
                </SpeedDial.Mask>
            </div>
        </div>
    );
}
