import { MeterGroup } from 'primereact/metergroup';

export default function LabelDemo() {
    const values = [
        { label: 'Apps', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', value: 24, icon: 'pi pi-image' },
        { label: 'System', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card">
            <MeterGroup>
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
                <MeterGroup.Meters>
                    {values.map((item, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={item.value} index={index} />
                    ))}
                </MeterGroup.Meters>
            </MeterGroup>
        </div>
    );
}
