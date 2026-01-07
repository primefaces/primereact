import { Knob } from '@primereact/ui/knob';

export default function KnobPTDemo() {
    return (
        <Knob.Root defaultValue={50}>
            <Knob.Range />
            <Knob.Value />
            <Knob.Text />
        </Knob.Root>
    );
}
