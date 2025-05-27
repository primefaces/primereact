import { MeterGroup } from 'primereact/metergroup';

export default function VerticalDemo() {
    const values = [
        { label: 'Apps', value: 24 },
        { label: 'Messages', value: 16 },
        { label: 'Media', value: 24 },
        { label: 'System', value: 12 }
    ];

    return (
        <div className="card flex justify-center" style={{ height: '360px' }}>
            <MeterGroup orientation="vertical">
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={index} value={item.value} index={index} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels orientation="vertical">
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
