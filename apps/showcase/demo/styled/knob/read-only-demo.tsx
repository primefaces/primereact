'use client';

import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} readOnly>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
