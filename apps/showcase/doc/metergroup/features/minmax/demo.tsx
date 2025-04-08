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
                    {values.map((value, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={value} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map((value, index) => (
                        <MeterGroup.Label key={`legend_${index}`}>
                            <MeterGroup.Marker color={value.color} />
                            <MeterGroup.Text>
                                {value.label} ({percent(value.value)})
                            </MeterGroup.Text>
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
