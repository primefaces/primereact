'use client';

import { Knob } from 'primereact/knob';

export default function MinMaxDemo() {
    return (
        <div className="flex justify-center">
            <Knob defaultValue={10} min={-50} max={50}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
