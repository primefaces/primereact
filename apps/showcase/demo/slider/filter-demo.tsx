import { SliderChangeEvent } from '@primereact/types/shared/slider';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';
import Image from 'next/image';
import { Slider } from 'primereact/slider';
import { ToggleButton } from 'primereact/togglebutton';
import * as React from 'react';

export default function FilterDemo() {
    const [filter, setFilter] = React.useState(0);
    const [filterValues, setFilterValues] = React.useState([100, 100, 0]);

    const filterStyle = React.useMemo(() => {
        return {
            filter: `contrast(${filterValues[0]}%) brightness(${filterValues[1]}%) sepia(${filterValues[2]}%)`
        };
    }, [filterValues]);

    return (
        <div className="card flex flex-col items-center justify-center">
            <Image alt="user header" className="w-80 rounded mb-6" src="https://primefaces.org/cdn/primevue/images/card-vue.jpg" style={filterStyle} width={320} height={240} />
            <ToggleButton.Group value={filter} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setFilter(e.value as number)}>
                <ToggleButton value={0}>
                    <ToggleButton.Indicator>Contrast</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value={1}>
                    <ToggleButton.Indicator>Brightness</ToggleButton.Indicator>
                </ToggleButton>
                <ToggleButton value={2}>
                    <ToggleButton.Indicator>Sepia</ToggleButton.Indicator>
                </ToggleButton>
            </ToggleButton.Group>
            <Slider
                value={filterValues[filter]}
                onValueChange={(e: SliderChangeEvent) =>
                    setFilterValues((prev) => {
                        const updated = [...prev];

                        updated[filter] = e.value as number;

                        return updated;
                    })
                }
                className="w-56 mt-4"
                min={0}
                max={200}
            >
                <Slider.Range />
                <Slider.Thumb />
            </Slider>
        </div>
    );
}
