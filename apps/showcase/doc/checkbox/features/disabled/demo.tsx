import { Checkbox } from 'primereact/checkbox';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center gap-2">
            <Checkbox defaultChecked={false} disabled />
            <Checkbox defaultChecked={true} disabled />
        </div>
    );
}
