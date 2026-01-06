'use client';

import { KnobTextInstance } from '@primereact/types/shared/knob';
import { Knob } from 'primereact/knob';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text>
                    {(instance: KnobTextInstance) => {
                        const { knob } = instance;

                        return <>{knob?.state.value}%</>;
                    }}
                </Knob.Text>
            </Knob.Root>
        </div>
    );
}
