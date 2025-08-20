import { Knob } from 'primereact/knob';

export default function ColorDemo() {
    return (
        <div className="card flex justify-center">
            <Knob defaultValue={50}>
                <Knob.Range color="MediumTurquoise" />
                <Knob.Value color="PeachPuff" />
                <Knob.Text />
            </Knob>
        </div>
    );
}
