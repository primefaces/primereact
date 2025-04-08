/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = {
    "code": "import { MeterGroup } from 'primereact/metergroup';\n\nexport default function BasicDemo() {\n    const value = { label: 'Space used', value: 15, color: 'var(--p-primary-color)' };\n\n    return (\n        <div className=\"card\">\n            <MeterGroup>\n                <MeterGroup.Meters>\n                    <MeterGroup.Meter value={value} />\n                </MeterGroup.Meters>\n                <MeterGroup.Labels>\n                    <MeterGroup.Label>\n                        <MeterGroup.Marker color={value.color} />\n                        <MeterGroup.Text>\n                            {value.label} ({value.value}%)\n                        </MeterGroup.Text>\n                    </MeterGroup.Label>\n                </MeterGroup.Labels>\n            </MeterGroup>\n        </div>\n    );\n}\n"
};
