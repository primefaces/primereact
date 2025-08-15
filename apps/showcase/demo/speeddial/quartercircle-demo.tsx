import { SpeedDial } from 'primereact/speeddial';

const directions = [
    { direction: 'up-left', style: { position: 'absolute', right: 0, bottom: 0 } },
    { direction: 'up-right', style: { position: 'absolute', left: 0, bottom: 0 } },
    { direction: 'down-left', style: { position: 'absolute', right: 0, top: 0 } },
    { direction: 'down-right', style: { position: 'absolute', left: 0, top: 0 } }
];

export default function QuarterCircleDemo() {
    const items = [{ icon: 'pi pi-pencil' }, { icon: 'pi pi-refresh' }, { icon: 'pi pi-trash' }, { icon: 'pi pi-upload' }, { icon: 'pi pi-external-link' }];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                {directions.map((item) => (
                    <SpeedDial key={item.direction} radius={120} type="quarter-circle" direction={item.direction} style={item.style}>
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
