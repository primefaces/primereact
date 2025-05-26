import { MeterGroup } from 'primereact/metergroup';

export default function MinMaxDemo() {
    const values = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];

    const percent = (meter: number) => {
        return Math.round(Math.max(0, Math.min(100, (meter / 200) * 100))) + '%';
    };

    return (
        <div className="card">
            <MeterGroup max={200}>
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={item.value} color={item.color} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((item, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Marker color={item.color} />
                            <MeterGroup.Text>
                                {item.label} ({percent(item.value)})
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
