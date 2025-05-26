import { MeterGroup } from 'primereact/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Labels orientation="vertical">
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker color={item.color} />
                            <MeterGroup.Text>
                                {item.label} ({item.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={item.value} color={item.color} />
                    ))}
                </MeterGroup.Meters>
            </MeterGroup>
        </div>
    );
}
