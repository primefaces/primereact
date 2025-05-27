import { MeterGroup } from 'primereact/metergroup';

export default function MultipleDemo() {
    const values = [
        { label: 'Apps', value: 14 },
        { label: 'Messages', value: 12 },
        { label: 'Media', value: 8 },
        { label: 'System', value: 12 },
        { label: 'Documents', value: 6 },
        { label: 'Cache', value: 11 },
        { label: 'Other', value: 9 }
    ];

    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} index={index} value={item.value} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker index={index} />
                            <MeterGroup.Text>
                                {item.label} ({item.value}%)
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
