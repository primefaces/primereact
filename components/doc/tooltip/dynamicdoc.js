import { useState } from 'react';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { Slider } from '../../lib/slider/Slider';
import { Knob } from '../../lib/knob/Knob';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DynamicDoc(props) {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);

    const code = {
        basic: `
<Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

<Tooltip target=".knob" content={\`\${knobValue}%\`} />
<Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

<Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
<Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

export default function DynamicDoc() {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);

    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
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

export default function DynamicDoc() {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    
    return (
        <div>
            <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

            <Tooltip target=".knob" content={\`\${knobValue}%\`} />
            <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

            <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
            <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide. You can set it to 'both' to allow for both hover and focus events. </p>
            </DocSectionText>
            <div className="card flex align-items-center justify-content-center">
                <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

                <Tooltip target=".knob" content={`${knobValue}%`} />
                <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                <Tooltip target=".slider>.p-slider-handle" content={`${sliderValue}%`} position="top" event="focus" />
                <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
