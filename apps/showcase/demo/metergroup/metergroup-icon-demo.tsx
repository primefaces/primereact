import { MeterGroup } from 'primereact/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Meters>
                    {values.map((value, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={value} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((value, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Icon color={value.color}>
                                <i className={value.icon}></i>
                            </MeterGroup.Icon>
                            <MeterGroup.Text>
                                {value.label} ({value.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
