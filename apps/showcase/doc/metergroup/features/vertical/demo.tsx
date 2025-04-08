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
            <MeterGroup orientation="vertical" labelOrientation="vertical">
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={index} value={item} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((value, index) => (
                        <MeterGroup.Label key={`legend_${index}`}>
                            <MeterGroup.Marker color={value.color} />
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
