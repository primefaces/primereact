import { Knob } from '@primereact/ui/knob';

export default function StrokeDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={40}>
                <Knob.Range strokeWidth={5} />
                <Knob.Value strokeWidth={5} />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
