import { Knob } from '@primereact/ui/knob';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Knob.Root defaultValue={60} size={200}>
                <Knob.Range />
                <Knob.Value />
                <Knob.Text />
            </Knob.Root>
        </div>
    );
}
