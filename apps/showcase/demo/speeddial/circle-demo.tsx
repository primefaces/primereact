import { SpeedDial } from 'primereact/speeddial';

export default function CircleDemo() {
    const items = [{ icon: 'pi pi-pencil' }, { icon: 'pi pi-refresh' }, { icon: 'pi pi-trash' }, { icon: 'pi pi-upload' }, { icon: 'pi pi-external-link' }];

    return (
        <div className="card">
            <div className="flex items-center justify-center" style={{ position: 'relative', height: '500px' }}>
                <SpeedDial type="circle" radius={80} style={{ position: 'absolute' }}>
                    <SpeedDial.Button severity="warn" />
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
        </div>
    );
}
