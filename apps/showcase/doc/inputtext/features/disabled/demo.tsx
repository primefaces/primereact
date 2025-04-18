import { InputText } from 'primereact/inputtext';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-center">
            <InputText defaultValue={''} disabled placeholder="Disabled" />
        </div>
    );
}
