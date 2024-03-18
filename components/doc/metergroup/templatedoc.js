import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { MeterGroup } from '@/components/lib/metergroup/MeterGroup';
import { Button } from '@/components/lib/button/Button';
import { Card } from '@/components/lib/card/Card';

export function TemplateDoc(props) {
    const code = {
        basic: `
<MeterGroup values={values} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function TemplateDemo() {
    const meter = (props, attr) => <span {...attr} key={props.index} style={{ background: \`linear-gradient(to right, \${props.color1}, \${props.color2})\`, width: props.percentage + '%' }} />;

    const labelList = ({ values }) => (
        <div className="flex flex-wrap gap-3">
            {values.map((item, index) => (
                <Card className="flex-1" key={index}>
                    <div className="flex justify-content-between gap-5">
                        <div className="flex flex-column gap-1">
                            <span className="text-secondary text-sm">{item.label}</span>
                            <span className="font-bold text-lg">{item.value}%</span>
                        </div>
                        <span className="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center" style={{ backgroundColor: item.color1, color: '#ffffff' }}>
                            <i className={item.icon} />
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );

    const start = ({ totalPercent }) => (
        <div className="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                {totalPercent}%
            </span>
            <span className="font-medium">1TB</span>
        </div>
    );

    const end = (
        <div className="flex justify-content-between mt-3">
            <Button label="Manage Storage" outlined size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    );

    const values = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog', meterTemplate: meter }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup labelPosition="start" values={values} start={start} end={end} meter={meter} labelList={labelList} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { MeterGroup } from 'primereact/metergroup';

export default function TemplateDemo() {
    const meter = (props: any, attr: any) => (
        <span
            {...attr}
            key={props.index}
            style={{
                background: \`linear-gradient(to right, \${props.color1}, \${props.color2})\`,
                width: props.percentage + '%',
            }}
        />
    );

    const start = ({ totalPercent }: {totalPercent: number}) => (
        <div className="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span
                style={{ width: totalPercent + '%' }}
                className="absolute text-right"
            >
                {totalPercent}%
            </span>
            <span className="font-medium">1TB</span>
        </div>
    );

    const end = (
        <div className="flex justify-content-between mt-3">
            <Button label="Manage Storage" outlined size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    );

    const labelList = ({ values }: {values: any[]}) => (
        <div className="flex flex-wrap gap-3">
            {values.map((item, index) => (
                <Card
                    className="flex-1"
                    key={index}
                >
                    <div className="flex justify-content-between gap-5">
                    <div className="flex flex-column gap-1">
                        <span className="text-secondary text-sm">{item.label}</span>
                        <span className="font-bold text-lg">{item.value}%</span>
                    </div>
                    <span
                        className="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center"
                        style={{ backgroundColor: item.color1, color: '#ffffff' }}
                    >
                        <i className={item.icon} />
                    </span>
                    </div>
                </Card>
            ))}
        </div>
    );

    const values = [
        {
            label: 'Apps',
            color1: '#34d399',
            color2: '#fbbf24',
            value: 25,
            icon: 'pi pi-table',
        },
        {
            label: 'Messages',
            color1: '#fbbf24',
            color2: '#60a5fa',
            value: 15,
            icon: 'pi pi-inbox',
        }, 
        {
            label: 'Media',
            color1: '#60a5fa',
            color2: '#c084fc',
            value: 20,
            icon: 'pi pi-image',
        },
        {
            label: 'System',
            color1: '#c084fc',
            color2: '#c084fc',
            value: 10,
            icon: 'pi pi-cog',
            meterTemplate: meter,
        },
    ];
    
    return (
        <div className="card flex justify-content-center">
            <MeterGroup labelPosition="start" values={values} start={start} end={end} meter={meter} labelList={labelList} />
        </div>
    )
}
        `
    };

    const meter = (props, attr) => <span {...attr} key={props.index} style={{ background: `linear-gradient(to right, ${props.color1}, ${props.color2})`, width: props.percentage + '%' }} />;

    const labelList = ({ values }) => (
        <div className="flex flex-wrap gap-3">
            {values.map((item, index) => (
                <Card className="flex-1" key={index}>
                    <div className="flex justify-content-between gap-5">
                        <div className="flex flex-column gap-1">
                            <span className="text-secondary text-sm">{item.label}</span>
                            <span className="font-bold text-lg">{item.value}%</span>
                        </div>
                        <span className="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center" style={{ backgroundColor: item.color1, color: '#ffffff' }}>
                            <i className={item.icon} />
                        </span>
                    </div>
                </Card>
            ))}
        </div>
    );

    const start = ({ totalPercent }) => (
        <div className="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span style={{ width: totalPercent + '%' }} className="absolute text-right">
                {totalPercent}%
            </span>
            <span className="font-medium">1TB</span>
        </div>
    );

    const end = (
        <div className="flex justify-content-between mt-3">
            <Button label="Manage Storage" outlined size="small" />
            <Button label="Update Plan" size="small" />
        </div>
    );

    const values = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog', meterTemplate: meter }
    ];

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    MeterGroup requires a <i>value</i> as the data to display where each item in the collection should be a type of <i>MeterItem</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <MeterGroup labelPosition="start" values={values} start={start} end={end} meter={meter} labelList={labelList} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
