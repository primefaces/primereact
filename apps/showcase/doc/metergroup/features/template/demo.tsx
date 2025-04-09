import { MeterGroup } from 'primereact/metergroup';

export default function TemplateDemo() {
    const values = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];

    const totalPercent = values.reduce((acc, value) => acc + value.value, 0);

    const percent = (meter: number) => {
        return Math.round(Math.max(0, Math.min(100, (meter / 100) * 100))) + '%';
    };

    return (
        <div className="card">
            <MeterGroup max={200}>
                <MeterGroup.Labels>
                    {values.map((value, index) => (
                        <MeterGroup.Label key={`label_${index}`}>
                            {/* <Card className="flex-1 border border-surface shadow-none">
                                <div className="flex justify-between gap-8">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-surface-500 dark:text-surface-400 text-sm">{value.label}</span>
                                        <span className="font-bold text-lg">{value.value}%</span>
                                    </div>
                                    <span className="w-8 h-8 rounded-full inline-flex justify-center items-center text-center" style={{ backgroundColor: `${value.color1}`, color: '#ffffff' }}>
                                        <i className={value.icon} />
                                    </span>
                                </div>
                            </Card> */}
                        </MeterGroup.Label>
                    ))}
                </MeterGroup.Labels>
                <div className="flex justify-between mt-4 mb-2 relative">
                    <span>Storage</span>
                    <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                        {totalPercent}%
                    </span>
                    <span className="font-medium">1TB</span>
                </div>

                <MeterGroup.Meters>
                    {values.map((value, index) => (
                        <MeterGroup.Meter asChild key={`meter_${index}`}>
                            {(instance) => {
                                return (
                                    <span
                                        key={`meter_${index}`}
                                        className={instance.className}
                                        style={{
                                            background: `linear-gradient(to right, ${value.color1}, ${value.color2})`,
                                            width: percent(value.value)
                                        }}
                                    />
                                );
                            }}
                        </MeterGroup.Meter>
                    ))}
                </MeterGroup.Meters>
                {/* <div className="flex justify-between mt-4">
                    <Button label="Manage Storage" outlined size="small" />
                    <Button label="Update Plan" size="small" />
                    </div> */}
            </MeterGroup>
        </div>
    );
}
