import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-center">
            <Knob defaultValue={50} readOnly>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob>
        </div>
    );
}
