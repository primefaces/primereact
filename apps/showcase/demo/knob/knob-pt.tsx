import { Knob } from 'primereact/knob';

export default function KnobPTDemo() {
    return (
        <Knob defaultValue={50}>
            <Knob.Range />
            <Knob.Value />
            <Knob.Text />
        </Knob>
    );
}
