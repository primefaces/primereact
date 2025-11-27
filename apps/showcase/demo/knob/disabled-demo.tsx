'use client';

import { Knob } from 'primereact/knob';

export default function DisabledDemo() {
    return (
        <div className="flex justify-center">
            <Knob defaultValue={50} disabled>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
