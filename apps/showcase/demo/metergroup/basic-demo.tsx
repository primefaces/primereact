import { MeterGroup } from 'primereact/metergroup';

export default function BasicDemo() {
    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };

    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Meters>
                    <MeterGroup.Meter value={value.value} color={value.color} />
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    <MeterGroup.Label>
                        <MeterGroup.Marker color={value.color} />
                        <MeterGroup.Text>
                            {value.label} ({value.value}%)
                        </MeterGroup.Text>
                    </MeterGroup.Label>
                </MeterGroup.Labels>
            </MeterGroup>
        </div>
    );
}
