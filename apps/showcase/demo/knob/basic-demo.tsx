'use client';

import { Knob } from 'primereact/knob';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Knob defaultValue={50}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
