'use client';

import { Knob } from 'primereact/knob';

export default function StrokeDemo() {
    return (
        <div className="flex justify-center">
            <Knob defaultValue={40}>
                <Knob.Range strokeWidth={5} />
                <Knob.Value strokeWidth={5} />
                <Knob.Text />
            </Knob>
        </div>
    );
}
