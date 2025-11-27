'use client';

import { Knob } from 'primereact/knob';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Knob defaultValue={60} size={200}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
