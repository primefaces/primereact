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
                    {values.map(({ value, color }, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={value} color={color} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map(({ value, label, color, icon }, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Icon className={icon} style={{ color }} />
                            <MeterGroup.Text>
                                {label} ({value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
