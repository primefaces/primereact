import { MeterGroup } from 'primereact/metergroup';

export default function IconDemo() {
    const values = [
        { label: 'Apps', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', value: 24, icon: 'pi pi-image' },
        { label: 'System', value: 10, icon: 'pi pi-cog' }
    ];

    return (
        <div className="card">
            <MeterGroup>
                <MeterGroup.Meters>
                    {values.map(({ value }, index) => (
                        <MeterGroup.Meter key={`meter_${index}`} value={value} index={index} />
                    ))}
                </MeterGroup.Meters>
                <MeterGroup.Labels>
                    {values.map(({ value, label, icon }, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            <MeterGroup.Icon className={icon} index={index} />
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
