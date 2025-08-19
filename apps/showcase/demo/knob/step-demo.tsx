import { Knob } from 'primereact/knob';

export default function StepDemo() {
    return (
        <div className="card flex justify-center">
            <Knob defaultValue={50} step={10}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
