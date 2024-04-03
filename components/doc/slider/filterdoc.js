import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Slider } from '@/components/lib/slider/Slider';
import { useState } from 'react';

export function FilterDoc(props) {
    const [filter, setFilter] = useState(0);
    const [filterValues, setFilterValues] = useState([100, 100, 0]);

    const filterOptions = [
        { label: 'Contrast', value: 0 },
        { label: 'Brightness', value: 1 },
        { label: 'Sepia', value: 2 }
    ];

    const filterStyle = () => {
        return {
            filter: `contrast(${filterValues[0]}%) brightness(${filterValues[1]}%) sepia(${filterValues[2]}%)`
        };
    };

    const code = {
        basic: `
<img alt="user header" class="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
<SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
<Slider
    value={filterValues[filter]}
    onChange={(e) => {
        const newFilterValues = [...filterValues];
        newFilterValues[filter] = e.value;
        setFilterValues(newFilterValues);
    }}
    className="w-14rem"
    min={0}
    max={200}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { SelectButton } from "primereact/selectbutton";

export default function FilterDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <div class="flex flex-column align-items-center">
                <img alt="user header" class="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
                <SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
                <Slider
                    value={filterValues[filter]}
                    onChange={(e) => {
                        const newFilterValues = [...filterValues];
                        newFilterValues[filter] = e.value;
                        setFilterValues(newFilterValues);
                    }}
                    className="w-14rem"
                    min={0}
                    max={200}
                />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { SelectButton } from "primereact/selectbutton";

export default function FilterDemo() {
    const [value, setValue] = useState<number>(null);

    return (
        <div className="card flex justify-content-center">
            <div class="flex flex-column align-items-center">
                <img alt="user header" class="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
                <SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
                <Slider
                    value={filterValues[filter]}
                    onChange={(e) => {
                        const newFilterValues = [...filterValues];
                        newFilterValues[filter] = e.value;
                        setFilterValues(newFilterValues);
                    }}
                    className="w-14rem"
                    min={0}
                    max={200}
                />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Slider is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div class="flex flex-column align-items-center">
                    <img alt="user header" class="w-full md:w-20rem border-round mb-4" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle()} />
                    <SelectButton value={filter} onChange={(e) => setFilter(e.value)} options={filterOptions} className="mb-3" />
                    <Slider
                        value={filterValues[filter]}
                        onChange={(e) => {
                            const newFilterValues = [...filterValues];
                            newFilterValues[filter] = e.value;
                            setFilterValues(newFilterValues);
                        }}
                        className="w-14rem"
                        min={0}
                        max={200}
                    />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
