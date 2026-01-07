import { Knob } from '@primereact/ui/knob';

export default function ColorDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={50}>
                <Knob.Range color="MediumTurquoise" />
                <Knob.Value color="PeachPuff" />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
