'use client';

import { Knob } from 'primereact/knob';

export default function StepDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50} step={10}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
