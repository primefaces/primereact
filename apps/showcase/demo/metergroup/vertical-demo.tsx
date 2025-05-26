import { MeterGroup } from 'primereact/metergroup';

export default function VerticalDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 24 },
        { label: 'Messages', color: '#fbbf24', value: 16 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 12 }
    ];

    return (
        <div className="card flex justify-center" style={{ height: '360px' }}>
            <MeterGroup orientation="vertical">
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={index} value={item.value} color={item.color} />
                    ))}
                </MeterGroup.Meters>
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
            </MeterGroup>
        </div>
    );
}
