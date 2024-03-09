import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Knob } from '@/components/lib/knob/Knob';
import { Slider } from '@/components/lib/slider/Slider';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';
import { useState } from 'react';

export function ReactiveDoc(props) {
    const [buttonTooltip, setButtonTooltip] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);

    const code = {
        basic: `
<Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

<Tooltip target=".knob" content={\`\${knobValue}%\`} />
<Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

<Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
<Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [buttonTooltip, setButtonTooltip] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function ReactiveDemo() {
    const [buttonTooltip, setButtonTooltip] = useState<string>('Click to proceed');
    const [knobValue, setKnobValue] = useState<number>(60);
    const [sliderValue, setSliderValue] = useState<number>(20);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
            <Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tooltip content is reactive to reflect changes related to the target component.</p>
            </DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-5">
                <Button type="button" label="Save" icon="pi pi-check" tooltip={buttonTooltip} onClick={() => setButtonTooltip('Completed')} />

                <Tooltip target=".knob" content={`${knobValue}%`} />
                <Knob className="knob" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                <Tooltip target=".slider>.p-slider-handle" content={`${sliderValue}%`} position="top" event="focus" />
                <Slider className="slider" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
